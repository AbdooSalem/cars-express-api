# Cars REST API
This is a dockerized REST API developed using NodeJS, Express with Typescript and MongoDB as a database.

## API details
### Car data model
```
Car {
	brand: string
	color: string
	model: string
}
```
### Available endpoints
- Get All Cars : `GET /cars`
- Create A Car : `POST /cars`
- Get A Car : `GET /cars/:id`
- Update A Car : `PUT /cars/:id`
- Delete A Car : `DELETE /cars/:id`

### Security
The API is secured using an API key `6Nz4Nm6CWa0Zea9ox6gI6A==`.

The key should be passed in the headers as the following to authorize the requests.
`x-api-key: 6Nz4Nm6CWa0Zea9ox6gI6A==`

## Getting Started
Environment prerequisite:
- Docker (Recommended version: v20.10.8).
- Docker-compose (Recommended version: v1.29.2).

### Start the API server
In the parent directory, run `docker-compose up -d`.
The API will be exposed on port `4000`. **Make sure the port is free and not used by any other apps**.

query example using curl: `curl 'http://localhost:4000/cars' --header 'x-api-key: 6Nz4Nm6CWa0Zea9ox6gI6A=='` to get meta-data of all the cars

## Further improvements
- Have testing in place.
- Read variables such as `MONGODB_PORT`, `MONGODB_URL` `API_PORT`, `API_KEY` from the environment.
- Have an API documentation using Swagger and have an endpoint for it in the API e.g: `/docs`.
