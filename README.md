# [Products App](https://ecommerse-ridepanda.vercel.app)

## Overview

[This project](https://ecommerse-ridepanda.vercel.app) is a simple e-commerce application that displays a list of products. It includes features such as pagination, search, and user authentication using Clerk. The application is built with Next.js, TypeScript, and utilizes ShadcnUI for UI components. 

## Features

- **Pagination**: Users can navigate through product pages and set the number of products displayed per page.
- **Search**: Users can search for products by title.
- **Authentication**: User authentication is implemented using Clerk. Only authenticated users can access the product routes.
- **Landing Page**: A basic landing page is provided with login and register buttons for unauthenticated users.
- **Protected Routes**: Unauthenticated users attempting to access protected routes are redirected to the login/register page.
- **Deployment**: The project is deployed on [Vercel](https://ecommerse-ridepanda.vercel.app) for easy hosting and deployment.

## Assumptions

- The product data is fetched from an external API.
- The API does not support server-side search, so the search functionality is implemented on the client side.
- Clerk is used for user authentication and managing protected routes.

## Design Choices

- **Next.js**: Chosen for its server-side rendering capabilities and ease of use.
- **TypeScript**: Ensures type safety and better development experience.
- **ShadcnUI**: Provides a consistent and easy-to-use set of UI components.
- **React Context**: Used for managing the search state across the application.
- **Custom Hooks**: Used for managing pagination and filtering logic, promoting code reusability and separation of concerns.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn
- Clerk account

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/ecommerse-ridepanda.git
    cd ecommerse-ridepanda
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up Clerk:
    - Sign up for a Clerk account at https://clerk.dev.
    - Create a new Clerk application.
    - Copy your Frontend API and JWT Secret from the Clerk dashboard.

4. Create a `.env.local` file in the root of the project and add your Clerk credentials and API URL:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='pk_test_some-public-key'
    CLERK_SECRET_KEY='sk_test_some-secret-key'
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    API_URL='https://fakestoreapi.com'
    ```


### Running the Project

1. Run the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Project Structure

- `components/`: Contains reusable UI components such as `Button`, `ProductCard`, etc.
- `hooks/`: Contains custom hooks like `usePagination`.
- `providers/`: Contains context providers like `SearchProvider`.
- `app/products/`: Contains pages and components related to products.
- `pages/`: Contains the main pages including the landing page.
- `public/`: Contains static assets.
- `styles/`: Contains global styles.

### Usage

- **Landing Page**: Displays login and register buttons for unauthenticated users.
- **Product List**: Displays a list of products with pagination and search functionality.
- **Authentication**: Users can log in or register to access protected product routes.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

### License

This project is powered by Clerk and ShadcnUI. 
Enjoy it at [ecommerse-ridepanda.vercel.app](https://ecommerse-ridepanda.vercel.app)
