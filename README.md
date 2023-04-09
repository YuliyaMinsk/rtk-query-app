# rtk-query-app

This is a simple application designed to test the following technologies: React (with TypeScript), Material UI, RTK Query, and Vite as the build tool.

## Installation

### 1. Clone or download the repository:

To clone the repository, open your terminal and run the following command:

`git clone https://github.com/YuliyaMinsk/rtk-query-app.git`

### 2. Install the required packages:

In the terminal, navigate to the repository folder and install the necessary packages by running:

`npm install`

### 3. Build the application:

Compile the application by running the following command in the terminal:

`npm run build`

This will create a 'dist' or 'build' folder (depending on your configuration) containing the compiled application files.

### 4. Preview the production build locally:

To preview the production build on your local machine, run the following command in the terminal:

`npm run preview`

This will start a local web server, and you can view the application in your web browser by navigating to the provided URL (typically "http://localhost:port", where "port" is the port number used by the server).

## Usage

### Running the mock API server

1. Install json-server globally:

`npm install -g json-server`

2. Start the mock API server by running the following command:

`json-server --no-cors db.json --port 5000`

This command will start a mock API server at http://localhost:5000.

### API Endpoints

The following endpoints are available for use in the User Management Dashboard:

- `GET /users` Fetch all users
- `GET /users/:id` Fetch a specific user by id
- `POST /users` Add a new user
- `PUT /users/:id` Update a user by id
- `PATCH /users/:id` Partially update a user by id
- `DELETE /users/:id` Delete a user by id

Good luck!
