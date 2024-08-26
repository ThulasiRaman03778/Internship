# Login Page with Firebase Authentication

## Overview

This project features a React-based login page integrated with Firebase for authentication. It includes user sign-in functionality, password visibility toggle, and a password reset feature. The page is styled with `styled-components` and adapts to various screen sizes with media queries.

## Features

- **Login Functionality**: Allows users to sign in with their email and password.
- **Password Visibility Toggle**: Provides an option to show or hide the password.
- **Forgot Password**: Users can request a password reset email if they forget their password.
- **Responsive Design**: The page layout adjusts based on the screen size to ensure a consistent user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Styled-Components**: For styling components using CSS-in-JS.
- **Firebase**: Provides authentication services.
- **Firebase Authentication**: Manages user sign-in and password reset functionalities.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-repository
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up Firebase:**

    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Add your Firebase configuration to `src/firebaseConfig.js`.

5. **Run the project:**

    ```bash
    npm start
    ```

## Usage

1. **Login Form**

   - Input your email and password into the respective fields.
   - Use the "Show" button to reveal or "Hide" to obscure the password.
   - Click "SIGN IN" to attempt logging in.

2. **Forgot Password**

   - Click on the "Forgot your password?" link to open the password reset form.
   - Enter your email address and click "Send Reset Email" to receive a password reset link.

## Code Structure

- **`src/firebaseConfig.js`**: Contains Firebase configuration and initialization.
- **`src/FormComponent.js`**: Handles the login form, password visibility toggle, and forgot password functionality.
- **`src/styles.js`**: Contains styled components used in the application.

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes and push them to your fork.
4. Open a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
