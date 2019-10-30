# Docker 101

This branch includes the answers for the Docker 101 assignments.


## Cmd

```
docker build -t cmd .
docker run -i cmd example
```

## Server

```
docker build -t server .
```

### Running

```
docker run -i -p 3000:3000 server
```

### Testing

```
docker run server npm test
```

## Backend


### Queries in Curl

```
curl -X POST -H "Content-Type: application/json" --data '{"message":"testing"}' http://localhost:4000/api/messages

curl http://localhost:4000/api/messages
```

### Local

#### Create database

```
psql -c "CREATE ROLE example WITH CREATEDB LOGIN PASSWORD 'example'"
psql -c "CREATE DATABASE example WITH OWNER example"
psql -c "DROP DATABASE example"
```

#### Run

```
npm start
```

#### Test

```
npm test
```

### Docker Compose

```
docker-compose build
```

#### Run

```
docker-compose up
```

#### Test

```
docker-compose run backend npm test
```
