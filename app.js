const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.set('view engine', 'html'); // Set view engine to HTML
app.engine('html', require('ejs').renderFile); // Use EJS to render HTML

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Set static directory

// // Dummy data


/////////////////////////////Login data/////////////////////////
// Login data
const db = new sqlite3.Database('databases/login.db');

app.get('/', (req, res) => {
    res.render("login.html");
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else if (row) {
      // Send successful login response
      const { fullname, username, won, lost, drawn } = row;
      const totalMatches = won + lost + drawn;
      const winPercentage = (won / totalMatches * 100).toFixed(2);

      res.render("homepage.html", { data: homepageData });
    } else {
      // Send unsuccessful login response
      const responseHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
          <title>Login Failed</title>
        </head>
        <body style="margin: 5% 5%;">
          <div class="container">
            <h2>Login Failed</h2>
            <p>The <em>username</em> or <em>password</em> provided doesn't match our records</p>
            <a href="/" class="btn btn-primary">Return to Login</a>
          </div>
        </body>
        </html>
      `;
      res.send(responseHTML);
    }
  });
});
/////////////////////////////Login data/////////////////////////



// /////////////////////////////Homepage data/////////////////////////

// Initialize homepageData as a let variable
let homepageData = null;

// Create a function to load homepage data from the database
function loadHomepageData(callback) {
  const homepageDb = new sqlite3.Database('databases/homepage.db');
  homepageDb.get('SELECT data FROM homepageData', (err, row) => {
    homepageDb.close();
    if (err) {
      callback(err, null);
    } else if (row) {
      const homepageData = JSON.parse(row.data);
      callback(null, homepageData);
    } else {
      callback(null, null);
    }
  });
}

// Load homepageData at the start of your application
loadHomepageData((err, data) => {
  if (err) {
    console.error('Error loading homepage data:', err);
  } else if (data) {
    homepageData = data;
    console.log('Homepage data loaded from the database.');
  } else {
    console.log('No homepage data found in the database.');
  }
});

// /////////////////////////////Homepage data/////////////////////////


// /////////////////////////////About data/////////////////////////\

// Initialize aboutData as a let variable
let aboutData = null;

function loadAboutData(callback) {
  const aboutDb = new sqlite3.Database('databases/aboutDB.db');
  aboutDb.get('SELECT data FROM aboutData', (err, row) => {
    aboutDb.close();
    if (err) {
      callback(err, null);
    } else if (row) {
      const aboutData = JSON.parse(row.data);
      callback(null, aboutData);
    } else {
      callback(null, null);
    }
  });
}

// Load aboutData at the start of your application
loadAboutData((err, data) => {
  if (err) {
    console.error('Error loading about data:', err);
  } else if (data) {
    aboutData = data;
    console.log('About data loaded from the database.');
  } else {
    console.log('No about data found in the database.');
  }
});

// /////////////////////////////About data/////////////////////////

// /////////////////////////////Feedback data/////////////////////////

// Initialize feedbackData as a let variable
let feedbackData = null;

// Create a function to load feedback data from the database
function loadFeedbackData(callback) {
  const feedbackDb = new sqlite3.Database('databases/feedbackDB.db');
  feedbackDb.get('SELECT data FROM feedbackData', (err, row) => {
    feedbackDb.close();
    if (err) {
      callback(err, null);
    } else if (row) {
      const feedbackData = JSON.parse(row.data);
      callback(null, feedbackData);
    } else {
      callback(null, null);
    }
  });
}

// Load feedbackData at the start of your application
loadFeedbackData((err, data) => {
  if (err) {
    console.error('Error loading feedback data:', err);
  } else if (data) {
    feedbackData = data;
    console.log('Feedback data loaded from the database.');
  } else {
    console.log('No feedback data found in the database.');
  }
});
// /////////////////////////////Feedback data/////////////////////////


/////////////////////////////Products data/////////////////////////

// Initialize allProducts as an array
let allProducts = [];

// Create a function to load products data from the database
function loadProductsData(callback) {
  const productsDb = new sqlite3.Database('databases/productsDB.db');
  productsDb.get('SELECT data FROM products', (err, row) => {
    productsDb.close();
    if (err) {
      callback(err, null);
    } else if (row) {
      const productsData = JSON.parse(row.data);
      callback(null, productsData);
    } else {
      callback(null, null);
    }
  });
}

// Load allProducts at the start of your application
loadProductsData((err, data) => {
  if (err) {
    console.error('Error loading products data:', err);
  } else if (data) {
    allProducts = data;
    console.log('Products data loaded from the database.');
  } else {
    console.log('No products data found in the database.');
  }
});

/////////////////////////////Products data/////////////////////////



app.post('/reset', (req, res) => {
  // Handle POST request to reset the database
  db.serialize(() => {
    db.run('DELETE FROM users', (err) => {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        console.log('Database reset');
        res.sendStatus(200);
      }
    });
  });
});



// Feedback route
app.get("/homepage", function(req, res) {
    res.render("homepage.html", { data: homepageData });
});

// About Us route
app.get("/about", function(req, res) {
    res.render("about.html", { data: aboutData });
});

// Feedback route
app.get("/feedback", function(req, res) {
    res.render("feedback.html", { data: feedbackData });
});

// // Products route
// app.get("/products/:category", function(req, res) {
//     const category = req.params.category;

//     // Filter products based on category
//     const filteredProducts = allProducts;

//     res.render("products.html", { data: { products: filteredProducts } });
// });
app.get("/products", function(req, res) {

  // Filter products based on category
  const filteredProducts = allProducts;
  res.render('products', { products: filteredProducts });

});



// app.post("/submit-feedback", function(req, res) {
//     const submittedData = {
//         email: req.body.email,
//         contactNumber: req.body.contactNumber,
//         feedback: req.body.feedback
//     };

    
//     // Print submitted feedback data
//     console.log(submittedData);

//     res.send("Feedback submitted successfully");
// });








app.post('/submit-feedback', (req, res) => {
  // Handle POST request to save feedback to the database
  const { email, contactNumber, feedback } = req.body;

  const db = new sqlite3.Database('./databases/commentsDB.db');
  const sql = `
    INSERT INTO feedbacks (email, contactNumber, feedback)
    VALUES (?, ?, ?)
  `;

  db.run(sql, [email, contactNumber, feedback], (err) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500); // Server error
    } else {
      console.log('Feedback saved to the database');
      res.send('Successfully Saved'); // Send a success message
    }
  });

  db.close();
});


// Add these routes to your existing Node.js application
app.get('/showFeedbacks', (req, res) => {
  // Serve the showFeedbacks.html page
  res.sendFile(__dirname + '/views/showFeedbacks.html');
});

app.get('/get-feedbacks', (req, res) => {
  // Handle GET request to retrieve feedback data from the database
  const db = new sqlite3.Database('./databases/commentsDB.db');
  const sql = 'SELECT * FROM feedbacks';

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500); // Server error
    } else {
      res.json(rows); // Send JSON response
    }
  });

  db.close();
});

app.post('/reset-feedbacks', (req, res) => {
  // Handle POST request to reset the feedbacks database
  const db = new sqlite3.Database('./databases/commentsDB.db');
  const sql = 'DELETE FROM feedbacks';

  db.run(sql, [], (err) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500); // Server error
    } else {
      console.log('Feedbacks reset');
      res.sendStatus(200); // Success
    }
  });

  db.close();
});











app.listen(3000, function() {
    console.log("Server created on port 3000");
});





