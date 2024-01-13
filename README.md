# Assessment CodeScale


## Table of Contents

- [Project Overview](#project-overview)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Environment variables](#environment-variables)


## project-overview

The Weather Report API is a Node.js application designed to store users' emails and locations, providing automatic hourly weather reports every 3 hours. It leverages MongoDB for data storage, Mongoose for schema definition, and the OpenWeatherMap API for fetching weather data. The application includes routes for storing user details, updating locations, and retrieving weather data for a specific day. Additionally, it utilizes Nodemailer and Gmail to send periodic weather reports to users.

## Demo
Check out the live demo
[here](https://assessment-code-scale-rb5678ch5-asankagamage98.vercel.app).

Domains
[here](https://assessment-code-scale.vercel.app/).
[here](https://assessment-code-scale-git-main-asankagamage98.vercel.app/).
[here](https://assessment-code-scale-rb5678ch5-asankagamage98.vercel.app/).


assessment-code-scale-git-main-asankagamage98.vercel.app
assessment-code-scale-rb5678ch5-asankagamage98.vercel.app

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asankagamage98/Assessment-codeScale.git

2. Navigate to the project directory:
    cd Assessment-codeScale

3. Install dependencies:
    npm install


## Usage
To run the project, use the following command:
    npm start || npm run dev

The application will be accessible at http://localhost:3000


## endpoints
Create User:
Endpoint: https://assessment-code-scale.vercel.app/api/user/create
Description: Create a new user.
Authentication: Non-authenticated

Login User:
Endpoint: https://assessment-code-scale.vercel.app/api/user/login
Description: Authenticate and log in a user.
Authentication: Non-authenticated

Get User:
Endpoint: https://assessment-code-scale.vercel.app/api/user
Description: Retrieve user information.
Authentication: Non-authenticated

Update User Location:
Endpoint: https://assessment-code-scale.vercel.app/api/user/update/location/:id
Description: Update the location of a user.
Authentication: Requires JWT token

Get Weather by Date:
Endpoint: https://assessment-code-scale.vercel.app/api/user/whether/:date
Description: Retrieve weather information for a specific date.
Authentication: Requires JWT token

## authentication
This project uses JSON Web Tokens (JWT) for authentication. Ensure that the following environment variable is set

    JWT_SECRET=secret

Routes marked as "authenticated" in the Endpoints section require a valid JWT token for access


## environment-variables

PORT=3000
MONGODB_URL=mongodb+srv://asanka:codeScale@cluster0.1vj0csi.mongodb.net/codescale-db?retryWrites=true&w=majority

OPENWEATHERMAP_API_KEY=56d8453cda2e1f8b3cce5aaa186e3bc7


EMAIL_USERNAME=madushanisuru646@gmail.com
EMAIL_PASSWORD=usxa ryqf asrr uwms


JWT_SECRET=secret
