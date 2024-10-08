# Tebak-Gambar-CLIENT

# Tebak Gambar Bendera

Tebak Gambar Bendera is a real-time multiplayer game where players guess the country based on the displayed flag. This project is built using Node.js, Express, PostgreSQL, Socket.io, and React.

## Features

- Real-time flag fetching and answer submission
- Real-time answer validation
- Interactive UI built with React
- PostgreSQL for storing flags and country names

## Requirements

- Node.js
- PostgreSQL

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd tebak-gambar-bendera
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Configure the database in `config/config.json`:
    ```json
    {
      "development": {
        "username": "yourusername",
        "password": "yourpassword",
        "database": "yourdatabase",
        "host": "127.0.0.1",
        "dialect": "postgres"
      }
    }
    ```

4. Run migrations and seeders:
    ```sh
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

5. Start the server:
    ```sh
    node app.js
    ```

## Usage

1. Start the server:
    ```sh
    node app.js
    ```

2. Navigate to `http://localhost:3000` in your browser to play the game.

## Folder Structure

- `server/`: Contains server-side code
  - `app.js`: Main server file
  - `config/`: Database configuration
  - `migrations/`: Database migrations
  - `models/`: Sequelize models
  - `seeders/`: Seed files for initial data

- `client/`: Contains client-side code
  - `src/`: Source files for React application
    - `App.js`: Main React component

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## License

This project is licensed under the MIT 
