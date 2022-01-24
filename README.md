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
Get All Cars : `GET /cars`
Create A Car : `POST /cars`
Get A Car : `GET /cars/:id`
Update A Car : `PUT /cars/:id`
Delete A Car : `DELETE /cars/:id`

## Getting Started
Environment prerequisite:
- Docker (Recommended version: v20.10.8).
- Docker-compose (Recommended version: v1.29.2).

### Start the API server
In the parent directory, run `docker-compose up -d`.
The API will be exposed on port `4000`. `(make sure the port is free and not used by any other apps)`.
e.g: `GET http://localhost:4000/cars` to get all cars meta-data