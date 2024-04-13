
## env

```
% sw_vers
ProductName:            macOS
ProductVersion:         14.4.1
BuildVersion:           23E224
% node -v
v18.19.1
% npm -v
10.2.4
```

## install cli

```
npm i -g @nestjs/cli
```

## create project

```
 nest new hello-nestjs
⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use? npm
CREATE hello-nestjs/.eslintrc.js (663 bytes)
CREATE hello-nestjs/.prettierrc (51 bytes)
CREATE hello-nestjs/README.md (3340 bytes)
CREATE hello-nestjs/nest-cli.json (171 bytes)
CREATE hello-nestjs/package.json (1951 bytes)
CREATE hello-nestjs/tsconfig.build.json (97 bytes)
CREATE hello-nestjs/tsconfig.json (546 bytes)
CREATE hello-nestjs/src/app.controller.ts (274 bytes)
CREATE hello-nestjs/src/app.module.ts (249 bytes)
CREATE hello-nestjs/src/app.service.ts (142 bytes)
CREATE hello-nestjs/src/main.ts (208 bytes)
CREATE hello-nestjs/src/app.controller.spec.ts (617 bytes)
CREATE hello-nestjs/test/jest-e2e.json (183 bytes)
CREATE hello-nestjs/test/app.e2e-spec.ts (630 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project hello-nestjs
👉  Get started with the following commands:

$ cd hello-nestjs
$ npm run start


                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.


               🍷  Donate: https://opencollective.com/nest
```

## [create module](../../commit/0e8a9c5427f5bc12702ee0f7210a6b14c5574646)

```
nest g module hello
nest g controller hello --no-spec
nest g service hello --no-spec
```

## [add get method](../../commit/00e05b2a5a910739c40e35d0446a5c9693fc7562)

```
curl localhost:3000/hello
{"message":"Hello, World!","date":"2024-04-12T23:07:45.549Z"}
```

## [add post method](../../commit/00e05b2a5a910739c40e35d0446a5c9693fc7562)

```
curl -H 'Content-type: application/json' localhost:3000/hello -d '{"name":"okcoder"}'
{"message":"Hello, okcoder!","date":"2024-04-12T23:14:45.093Z"}
```

## [add sse method](../../commit/dc05bbcf6f2d5e129d01585425bb1aafd5f790cf)

```
curl -N localhost:3000/hello/sse -v
*   Trying [::1]:3000...
* Connected to localhost (::1) port 3000
> GET /hello/sse HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.4.0
> Accept: */*
>
< HTTP/1.1 200 OK
< x-powered-by: Express
< Content-Type: text/event-stream
< Connection: keep-alive
< Cache-Control: private, no-cache, no-store, must-revalidate, max-age=0, no-transform
< Pragma: no-cache
< Expire: 0
< X-Accel-Buffering: no
< Date: Sat, 13 Apr 2024 01:25:08 GMT
< Transfer-Encoding: chunked
<

id: 1
data: {"message":"hello world!","date":"2024-04-13T01:25:09.453Z"}

id: 2
data: {"message":"hello world!","date":"2024-04-13T01:25:10.455Z"}

id: 3
data: {"message":"hello world!","date":"2024-04-13T01:25:11.455Z"}
```

## [add sse client](../../commit/00e05b2a5a910739c40e35d0446a5c9693fc7562)
http://localhost:3000/sse.html
```
npm install --save @nestjs/serve-static
```

## [add sse post](../../commit/92648225a6a4bf46e07a39033686a941ffa1beb3)

http://localhost:3000/ssePost.html

```
 curl localhost:3000/hello/sse -d '{"name":"okcoder","stream":true}' -H 'Content-type: application/json' -v
*   Trying [::1]:3000...
* Connected to localhost (::1) port 3000
> POST /hello/sse HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.4.0
> Accept: */*
> Content-type: application/json
> Content-Length: 32
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/event-stream
< Transfer-Encoding: chunked
< Date: Sat, 13 Apr 2024 03:07:41 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
event: receive

event: process

data: {"message":"Hello, okcoder!","date":"2024-04-13T03:07:44.818Z"}

data: {"message":"Hello, okcoder!","date":"2024-04-13T03:07:45.819Z"}

data: {"message":"Hello, okcoder!","date":"2024-04-13T03:07:46.820Z"}

data: {"message":"Hello, okcoder!","date":"2024-04-13T03:07:47.822Z"}

data: {"message":"Hello, okcoder!","date":"2024-04-13T03:07:48.825Z"}

data: [DONE]
```

```
curl localhost:3000/hello/sse -d '{"name":"okcoder","stream":false}' -H 'Content-type: application/json' -v
*   Trying [::1]:3000...
* Connected to localhost (::1) port 3000
> POST /hello/sse HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.4.0
> Accept: */*
> Content-type: application/json
> Content-Length: 33
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 63
< ETag: W/"3f-18m23O9w1G+6ZS7I3vnTyUPnoIQ"
< Date: Sat, 13 Apr 2024 03:08:19 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
* Connection #0 to host localhost left intact
{"message":"Hello, okcoder!","date":"2024-04-13T03:08:19.878Z"}
```
