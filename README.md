# TradeLink Web Application

Welcome to the TradeLink web application! This project is a web-based platform that allows users to explore and purchase various products. The application includes features such as user authentication, product filtering, feedback submission, and more.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Database Information](#database-information)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

1. **User Authentication:** Users can log in with their username and password to access the platform.

2. **Product Filtering:** Explore products by applying various filters such as product type, name, manufactured date, price range, manufacturer, and country.

3. **Latest News:** Stay informed about the latest news and events related to the products.

4. **Feedback System:** Users can submit feedback about their experience, which can be viewed on the feedback page.

5. **Attractive Images:** Enjoy visually appealing images related to nature and the products available on the platform.

## Guest view
<table>
  <tr>
    <td><img src="https://github.com/Nilupa-Illangarathna/TradeLink-website/assets/95247831/3d6f2f04-e401-4158-9e17-1e0c7500db45" style="width: 100%;"></td>
    <td><img src="https://github.com/Nilupa-Illangarathna/TradeLink-website/assets/95247831/15fcc452-6d91-4adc-b966-2a96f752b74f" style="width: 100%;"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/Nilupa-Illangarathna/TradeLink-website/assets/95247831/8dcfdcf7-27b1-420a-b204-2bc4cb65c805" style="width: 100%;"></td>
    <td><img src="https://github.com/Nilupa-Illangarathna/TradeLink-website/assets/95247831/bff56858-9a78-47ae-bd54-d61b610b388f" style="width: 100%;"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/Nilupa-Illangarathna/TradeLink-website/assets/95247831/f17df447-193c-49de-8879-b96f3cc39aa5" style="width: 100%;"></td>
    <td><img src="https://github.com/Nilupa-Illangarathna/TradeLink-website/assets/95247831/c99ba30b-a1cd-4119-a118-236ee22baa05" style="width: 100%;"></td>
  </tr>
</table>

## Admin view
<table>
  <tr>
    <td><img src="https://github.com/Nilupa-Illangarathna/TradeLink-website/assets/95247831/701f715e-d2ee-4b8e-b583-3de30b79a248" style="width: 100%;"></td>
    <td><img src="https://github.com/Nilupa-Illangarathna/TradeLink-website/assets/95247831/863fc7df-c539-4181-821e-37a5ab285c34" style="width: 100%;"></td>
  </tr>
</table>



## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed
- SQLite database installed

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tradelink-web-app.git
   ````
   
Change into the project directory:
````
cd tradelink-web-app
````
Install dependencies:
````
npm install
````
Start the server:
````
npm start
Open your web browser and navigate to http://localhost:3000.
````
Explore the TradeLink web application.

File Structure
The project has the following file structure:

public/: Static assets such as images, stylesheets, and client-side scripts.
views/: HTML templates using EJS (Embedded JavaScript).
routes/: Server-side logic for handling different routes.
databases/: SQLite databases for storing information.
app.js: Main entry point for the application.

## Technologies Used
Node.js
Express.js
SQLite
Bootstrap
jQuery
EJS (Embedded JavaScript)
noUiSlider

## Database Information
The application uses SQLite databases to store information related to feedback, about page data, and homepage data.


### About Database
Database Name: aboutDB.db
Table Name: aboutData
### Comments Database
Database Name: commentsDB.db
Table Name: commentsData
### Feedback Database
Database Name: feedbackDB.db
Table Name: feedbackData
### Homepage Database
Database Name: homepageDB.db
Table Name: homepageData
### Login Database
Database Name: loginDB.db
Table Name: loginData
### Products Database
Database Name: productsDB.db
Table Name: productsData






