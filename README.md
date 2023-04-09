# regioneir

This is a social media website that allows users to create profiles, post updates like posts and follow other users. 

## Technologies Used

The following technologies were used to create this project:

- Express.js
- MongoDB
- Mongoose
- Multer
- Morgan
- Helmet
- Cors
- Body-parser
- Dotenv
- ES6 syntax

## Demo

for a quick visit https://not yet


## Installation

To run this project on your local machine, follow these steps:

1. Clone this repository: `git clone https://github.com/Qarani-m/regioneir`
2. Change into the project directory: `cd regioneir`
3. Install dependencies: `npm install`
4. Set up your MongoDB database and add the connection URL and a jwt secret to the `.env` file
```
SECRET ="some secret string"

DB_URL ="connection url"
```
5. Run the project: `npm start`

## Functionality

### User Authentication

Users can register for an account, log in, and log out. The website uses JSON Web Tokens (JWT) to authenticate users.

### User Profile

Each user has a profile page that displays their username, profile picture, and a list of their posts. Users can edit their profile picture and bio.

### Following

Users can follow other users to see their posts in their feed. Users can also unfollow other users.

### Posting

Users can create posts, which can include text and an optional image. Posts are displayed on the user's profile page and in the feeds of their followers.

### Searching

Users can search for other users by username.

## API Routes

### `POST /auth/register`

Registers a new user account. Expects a JSON payload with the following properties:

- `username` (required): The username for the new account
- `password` (required): The password for the new account
- `picture` (optional): A profile picture for the new account (uploaded using Multer)

### `POST /auth/login`

Logs in a user. Expects a JSON payload with the following properties:

- `username` (required): The username of the user
- `password` (required): The password of the user

Returns a JWT token that can be used to authenticate future requests.

### `GET /users/:username`

Returns the profile page of a user.

### `PATCH /users/:username`

Updates the profile picture and bio of a user. Expects a JSON payload with the following properties:

- `picture` (optional): A new profile picture for the user (uploaded using Multer)
- `bio` (optional): A new bio for the user

### `POST /posts`

Creates a new post. Expects a JSON payload with the following properties:

- `text` (required): The text of the post
- `picture` (optional): An image for the post (uploaded using Multer)

### `GET /posts`

Returns all posts, sorted by most recent.

### `GET /users/:username/posts`

Returns all posts by a user, sorted by most recent.

### `GET /feed`

Returns all posts by the users that the current user is following, sorted by most recent.

### `POST /users/:username/follow`

Follows a user.

### `DELETE /users/:username/follow`

Unfollows a user.

## Conclusion

This social media website is a basic example of how to create a website with user authentication, profiles, following, and posting functionality. It can be extended and customized to fit different needs.


Sure, here's an example contribution section you can add to the readme file:

## Contributing

I welcome contributions from everyone! Here are a few ways you can help improve this social media website:

- **Bug reports:** If you notice any bugs or errors on the website, please open an issue on my [GitHub repository](https://github.com/Qarani-m/regioneir).
- **Feature requests:** If you have an idea for a new feature or functionality, please open an issue on my [GitHub repository](https://github.com/Qarani-m/regioneir).
- **Code contributions:** If you want to contribute code to the project, you can submit a pull request on my [GitHub repository](https://github.com/Qarani-m/regioneir). Please make sure to follow our coding guidelines and write tests for your code.
- **Documentation:** If you notice any gaps or errors in our documentation, please open an issue on our [GitHub repository](https://github.com/Qarani-m/regioneir) or submit a pull request with your proposed changes.
- **Translations:** If you're fluent in a language other than English, you can help us translate our website to make it more accessible to a global audience. Please open an issue on our [GitHub repository](https://github.com/Qarani-m/regioneir) or submit a pull request with your translations.

Before submitting a pull request, please make sure to run the tests and ensure that your changes don't break any existing functionality. 
