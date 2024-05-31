# Recipe App
[![Netlify Status](https://api.netlify.com/api/v1/badges/1d8219ac-5d0e-4e1d-ac69-fbbf504ef67a/deploy-status)](https://app.netlify.com/sites/beautiful-kataifi-c3dc96/deploys)


Welcome to the Recipe App! This application allows you to search for recipes, view details, and save your favorites. It is built using React and the Spoonacular API.

Check out the live site: [Recipe App](https://beautiful-kataifi-c3dc96.netlify.app/)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Key Setup](#api-key-setup)
- [Contributing](#contributing)
- [License](#license)

## Features
- Search for recipes query.
- View detailed recipe information.
- View Similar recipes in the Detailed recipe page.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/recipe-app.git
    cd recipes-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **API Key Setup:**
   To access the Spoonacular API, you need an API key. Follow the instructions below to get a new API key and set it up in the project.

## API Key Setup

1. **Get an API Key:**
    - Go to the [Spoonacular API website](https://spoonacular.com/food-api/docs).
    - Sign up for an account if you don't have one.
    - Generate a new API key from your account dashboard.

2. **Set up the API Key in your project:**
    - Open the file `src/config/config.js`.
    - Replace the placeholder with your API key:
        ```javascript
        const API_KEY = 'YOUR_API_KEY_HERE';
        ```

## Usage
Once you have set up the API key, you can run the app locally:

```bash
npm run dev
```

## Contributing
Pull requests are welcome. Please fork the repository and create a pull request with your changes.

## License
[MIT](https://choosealicense.com/licenses/mit/)