# Todo-List Project with React and Redux

This is a **Todo-List** project built using **React** , **Tailwind CSS** and **Redux** for state management. The todos are fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos). The project includes several features and is fully responsive with support for dark and light themes.

## Features

- **Fetch Todos**: Todos are fetched from the JSONPlaceholder API.
- **Add Todo**: Users can add new todos to the list.
- **Delete Todo**: Users can delete todos from the list.
- **Filter Todos**: Todos can be filtered by the number of items displayed.
- **Mark Todo as Completed**: Users can tick/check completed todos.
- **Dark/Light Theme**: The app supports both dark and light themes.
- **Responsive Design**: The app is fully responsive and works on all devices.
- **Styling**: Styling is done using the **Tailwind CSS** framework.
- **State Management**: State is managed using **Redux**.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd todo-list-react-redux
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app**:
   Open your browser and go to `http://localhost:3000` to view the app.

### Using Vite

This project is built using **Vite**. To start the development server, run:

```bash
npm run dev
```

## Project Structure

- **`src/`**: Contains the main source code.
  - **`components/`**: React components.
  - **`redux/`**: Redux store, actions, and reducers.
  - **`styles/`**: Tailwind CSS configuration and custom styles.
  - **`App.jsx`**: Main application component.
  - **`main.jsx`**: Entry point for the app.
- **`public/`**: Static assets like images and icons.
- **`vite.config.js`**: Vite configuration file.