# RideWise API Documentation

## Overview

RideWise is a scalable backend system designed to manage ride-related operations with secure authentication, role-based access control, and RESTful APIs. This documentation describes the available endpoints, request/response formats, authentication mechanism, and error handling.

**Base URL:** `/api/v1`

**Tech Stack (assumed – update if needed):**

* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)
* Authentication: JWT
* Password Hashing: bcrypt

---

## Authentication & Authorization

### JWT Authentication

* JWT is issued on successful login
* Token must be sent in the `Authorization` header

```
Authorization: Bearer <JWT_TOKEN>
```

### Roles

* **USER** – Can access personal dashboard and create/manage own rides
* **ADMIN** – Full access to all users and rides

---

## Auth APIs

### Register User

**Endpoint:** `POST /auth/register`

**Request Body:**

```json
{
  "name": "Varun",
  "email": "varun@email.com",
  "password": "StrongPassword@123",
  "role": "user"
}
```

**Success Response (201):**

```json
{
  "message": "User registered successfully"
}
```

---

### Login User

**Endpoint:** `POST /auth/login`

**Request Body:**

```json
{
  "email": "varun@email.com",
  "password": "StrongPassword@123"
}
```

**Success Response (200):

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "userId",
    "role": "user"
  }
}
```

---

## User APIs

### Get Logged-in User Profile

**Endpoint:** `GET /users/me`

**Headers:**

```
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "id": "userId",
  "name": "Varun",
  "email": "varun@email.com",
  "role": "user"
}
```

---

## Ride APIs (CRUD Entity)

### Create Ride (User)

**Endpoint:** `POST /rides`

**Request Body:**

```json
{
  "source": "Hyderabad",
  "destination": "Bangalore",
  "date": "2026-01-10",
  "price": 1500
}
```

**Response (201):**

```json
{
  "message": "Ride created successfully"
}
```

---

### Get All Rides

**Endpoint:** `GET /rides`

**Access:** User (own rides), Admin (all rides)

**Response (200):**

```json
[
  {
    "id": "rideId",
    "source": "Hyderabad",
    "destination": "Bangalore",
    "price": 1500,
    "createdBy": "userId"
  }
]
```

---

### Update Ride

**Endpoint:** `PUT /rides/:id`

**Request Body:**

```json
{
  "price": 1800
}
```

**Response (200):**

```json
{
  "message": "Ride updated successfully"
}
```

---

### Delete Ride

**Endpoint:** `DELETE /rides/:id`

**Access:** Owner or Admin

**Response (200):**

```json
{
  "message": "Ride deleted successfully"
}
```

---

## Admin APIs

### Get All Users (Admin only)

**Endpoint:** `GET /admin/users`

**Response (200):**

```json
[
  {
    "id": "userId",
    "email": "user@email.com",
    "role": "user"
  }
]
```

---

## Error Handling

**Common Error Format:**

```json
{
  "error": "Error message here"
}
```

| Status Code | Meaning      |
| ----------- | ------------ |
| 400         | Bad Request  |
| 401         | Unauthorized |
| 403         | Forbidden    |
| 404         | Not Found    |
| 500         | Server Error |

---

## Security Practices

* Password hashing using bcrypt
* JWT-based stateless authentication
* Role-based middleware protection
* Input validation & sanitization

---

## Scalability Notes

* Modular architecture for easy feature expansion
* Ready for microservices separation
* Can integrate Redis for caching
* Supports Dockerized deployment
* Load balancer friendly (stateless JWT auth)

---

## Frontend Integration

* React-based UI
* JWT stored securely
* API-driven error/success handling

---

## Author

**Varun Bantupalli**
Backend Developer Intern Applicant
