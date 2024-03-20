---
title: Build an HTTP Server in Go
tags:
  - golang
  - http
  - tcp
  - http-server
description: Learn how to create an HTTP server in Golang from scratch, using TCP.
publishedAt: 2024-03-19
---

Recently, I made an HTTP server in Golang called [Muick](https://github.com/adibfahimi/muick), and I thought it would be a good idea to share how I did it. In this tutorial, we will create an HTTP server from scratch using TCP.

## 1. Initialize the project

Let's start our project.

```bash
mkdir http-server
cd http-server
go mod init github.com/myreponame/http-server
```

## 2. Start a TCP server

Now let's create a TCP server.

```go
package main

import (
  "fmt"
  "net"
)

func handleConnection(c net.Conn) {
  buf := make([]byte, 1024)
  _, err := c.Read(buf)
  if err != nil {
  fmt.Println("Error reading:", err)
  }
  fmt.Println("Received:", string(buf))
  c.Write([]byte("Hello, world!"))
  c.Close()
}

func main() {
  conn, err := net.Listen("tcp", "127.0.0.1:3000")
  if err != nil {
  fmt.Println("Error listening:", err)
  }
  defer conn.Close()

  fmt.Println("Server listening on 127.0.0.1:3000")

  for {
  c, err := conn.Accept()
  if err != nil {
    fmt.Println("Error accepting connection:", err)
  }
  go handleConnection(c)
  }
}

```

Now open [127.0.0.1:3000](http://127.0.0.1:3000/) in your browser, and you will see that the browser sends a TCP message to our server.

```bash
Server listening on localhost:3000
Received: GET / HTTP/1.1
Host: 127.0.0.1:3000
Connection: keep-alive
sec-ch-ua: "Chromium";v="122", "Not(A:Brand";v="24", "Brave";v="122"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8
Sec-GPC: 1
Accept-Language: en-US,en
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
```

## 3. HTTP TCP message

We need to parse the TCP message into a request struct to work with it. Let's create our `HttpRequest` struct.

```go
type HttpRequest struct {
  Method  string
  Path  string
  Headers map[string]string
  Body  string
}
```

Now, let's convert our TCP message string to an `HttpRequest`.

## 4. Parsing

```go
func parseRequest(request string) HttpRequest {
  lines := strings.Split(request, "\n")
  firstLine := strings.Split(lines[0], " ")
  method := strings.TrimSpace(firstLine[0])
  path := strings.TrimSpace(firstLine[1])
  headers := make(map[string]string)
  var i int
  for i = 1; i < len(lines); i++ {
    line := strings.TrimSpace(lines[i])
    if line == "" {
      i++
      break
    }
    parts := strings.SplitN(line, ": ", 2)
    headers[strings.TrimSpace(parts[0])] = strings.TrimSpace(parts[1])
  }
  body := strings.Join(lines[i:], "\n")
  return HttpRequest{method, path, headers, body}
}
```

We can now pass the TCP message string into `parseRequest`.

```go
func handleConnection(c net.Conn) {
  buf := make([]byte, 1024)
  _, err := c.Read(buf)
  if err != nil {
  fmt.Println("Error reading:", err)
  }
  request := parseRequest(string(buf))

  fmt.Println("Method:", request.Method)
  fmt.Println("Path:", request.Path)
  fmt.Println("Headers:", request.Headers)
  fmt.Println("Body:", request.Body)

  c.Write([]byte("Hello, world!"))
  c.Close()
}
```

Now, if you open [127.0.0.1:3000](http://127.0.0.1:3000/) in your browser again, you will see:

```bash
Method: GET
Path: /
Headers: ...
Body:
```

## 5. HTTP Response

HTTP response is similar to HTTP request, so we can create a `HttpResponse` struct.

```go
type HttpResponse struct {
  Headers    map[string]string
  Status     string
  Body       string
  StatusCode int
}
```

We can create a function to convert the `HttpResponse` to a string.

```go
func (r *HttpResponse) String() string {
  return fmt.Sprintf("HTTP/1.1 %d %s\n%s\n\n%s", r.StatusCode, r.Status, r.Headers, r.Body)
}
```

let's edit the `handleConnection` function to send a response to the client.

```go
func handleConnection(c net.Conn) {
  buf := make([]byte, 1024)
  _, err := c.Read(buf)
  if err != nil {
    fmt.Println("Error reading:", err)
  }
  request := parseRequest(string(buf))

  fmt.Println("Method:", request.Method)
  fmt.Println("Path:", request.Path)
  fmt.Println("Headers:", request.Headers)
  fmt.Println("Body:", request.Body)

  response := HttpResponse{
    Headers: map[string]string{
    "Content-Type": "text/html",
    },
    Status:     "OK",
    StatusCode: 200,
    Body:       "<h1>Hello, World!</h1>",
  }

  c.Write([]byte(response.String()))
  c.Close()
}
```

Final code in [GitHub Gist](https://gist.github.com/adibfahimi/3f77ab92860270f89517357622eaf93d)

## 6. Refactor

let's create a function to create a server.

Let move our code to the `server/server.go`

1. Rename package name to `server`
2. Remove `main` func

let make a `Server` struct and store our routes in it
for now, we only save GET method routes
at each

```go
// server/server.go

func handleConnection(c net.Conn, s *Server) {
	buf := make([]byte, 1024)
	_, err := c.Read(buf)
	if err != nil {
		fmt.Println("Error reading:", err)
	}
	request := parseRequest(string(buf))
	response := &HttpResponse{
		Headers: make(map[string]string),
	}

	if handler, ok := s.Routes[request.Path]; ok {
		handler(&request, response)
	} else {
		response.StatusCode = 404
		response.Status = "Not Found"
		response.Body = "<h1>404 Not Found</h1>"
	}

	c.Write([]byte(response.String()))
	c.Close()
}

type Handler func(*HttpRequest, *HttpResponse)

type Server struct {
	Routes map[string]Handler
}

func New() *Server {
	return &Server{Routes: make(map[string]Handler)}
}

func (s *Server) Get(path string, handler Handler) {
	s.Routes[path] = handler
}

func (s *Server) Listen(port int) {
	conn, err := net.Listen("tcp", fmt.Sprintf("127.0.0.1:%d", port))
	if err != nil {
		fmt.Println("Error listening:", err)
	}
	defer conn.Close()

	fmt.Println("Server listening on 127.0.0.1:", port)

	for {
		c, err := conn.Accept()
		if err != nil {
			fmt.Println("Error accepting connection:", err)
		}
		go handleConnection(c, s)
	}
}
```

then we can use our server like this

```go
package main

import "github.com/myreponame/http-server/server"

func main() {
	s := server.New()

	s.Get("/", func(req *server.HttpRequest, res *server.HttpResponse) {
		res.Body = "<h1>Hello, World!</h1>"
		res.Headers["Content-Type"] = "text/html"
		res.StatusCode = 200
		res.Status = "OK"
	})

	s.Listen(3000)
}
```

## 7. Conclusion

That concludes this article. You can further enhance this project by adding features such as support
for POST, PUT, DELETE methods, implementing a `Static()` function to serve static files, and more.

Feel free to explore additional features on my GitHub repository [Muick](https://github.com/adibfahimi/muick).
with more feutures
