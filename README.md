# Furniture Store Project

## Initial Setup

- [x] Create repository
- [x] Initial folder structure
- [x] Add client resources

## Setup client dev env

- [x] Install packages `npm i`
- [x] Install lite-server `npm install --save-dev lite-server`
- [x] Add start script  
- [x] Add gitignore

## Setup REST API

- [x] Initialize project
- [x] Add express
- [x] Add base furniture controller
- [x] Add routes
- [x] Add CORS `npm i cors` `app.use(cors())`

## Authentication and Authorization

- [x] Create user controller with register endpoint
- [x] Add json parser `express.json()`
- [x] Setup prisma orm database `https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres`
- [x] Change node with tsx
- [x] Add user model
- [x] Add validation
- [x] Hash password with zod transform and bcrypt
- [x] Generate token
- [x] Add logout
- [x] Add login to user controller
- [x] Add auth middleware
- [x] Add isAuth middleware

## Furniture Endpoints

- [x] Create furniture endpoint
- [x] Add create furniture schema
- [x] Validate input
- [x] Add error util for messages
- [x] Add Furniture model
- [x] Add furniture service with create method
- [x] List all furnitures
- [x] Map id to _id
- [x] Furniture details

## Ownership Functions

- [x] Setup one to many relation
- [x] Add owner on furniture create
- [x] Delete furniture
- [x] Edit furniture
- [x] My furnitures

## Bonus

- [] Invalidate user session
