# Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game using React. The game allows two players to take turns marking spaces in a 3x3 grid. The first player to align three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Features

- **Two-Player Game:** Two players can play the game on the same device.
- **Game History:** Track each move and revert to any previous state.
- **Winner Detection:** Automatically detects the winner and displays the result.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/) if you don't have it installed.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   ```
    Note: Replace <your-repo-url> with your actual repository URL.

2. **Navigate to the project directory:**

   ```bash
   cd tic-tac-toe
   ```

3. **Install the dependencies::**

    ```bash
    npm install
    ```

### Running the Project

1. **Start the development server:**
    ```bash
    npm start
    ```

2. **Open your browser and visit:**
    ```bash
    http://localhost:3000
    ```
    Note: This will open the game in your default web browser.


## Project Structure

- **Square Component:** Represents a single square on the Tic-Tac-Toe board.
- **Board Component:** Represents the entire game board, managing the state of the squares and determining the winner.
- **Game Component:** The main component that manages the overall state, including the history of moves, and handles the game's flow.
- **calculateWinner Function:** A helper function to determine the winner based on the current state of the board.

## How to Play

- You can customize the look and feel of the game by modifying the CSS classes in the project. The main styles are applied to the .square, .board-row, .status, and .game-info classes.
- Modify the logic inside the calculateWinner function if you want to change the winning conditions.
