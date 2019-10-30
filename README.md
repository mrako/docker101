# Docker 101

This is the repository for simple Docker exercises. You can find the answers under branch **answers**.


## Exercise 1

1. Add two files into folder **cmd/**: **Dockerfile** and **index.js**.
2. To **index.js**, add printing the first command-line parameter in format "Hello ${param}!".
3. Write a Dockerfile that runs that file (as an entrypoint).
4. Add a command-line parameter to the **Docker** command execution and make sure it prints "Hello ${param}!", e.g. "Hello world!".


## Exercise 2

1. Add three files into folder **server/**: **Dockerfile**, **package.json** and **app.js**.
2. Add [koa](http://koajs.com/) to **package.json**.
3. Install [npm](https://www.npmjs.com/) dependencies.
4. Make **server.js** answer to endpoint **/** and return "Hello world".
5. Add [node](https://nodejs.org/), **package.json** and **app.js** to **Dockerfile**.
6. Run server using **Docker**.


## Exercise 3

1. Create **docker-compose.yml** that includes postgres database.
2. Run backend using **Docker Compose**.
