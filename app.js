const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'html'); // Set view engine to HTML
app.engine('html', require('ejs').renderFile); // Use EJS to render HTML

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Set static directory

// Dummy data
/////////////////////////////Homepage data/////////////////////////
class LatestNews {
    constructor(headline, imageUrl, description) {
        this.headline = headline;
        this.imageUrl = imageUrl;
        this.description = description; // Description attribute
    }

    static fetchLatestNews() {
        // Simulating fetching news from an API or database
        return [
            new LatestNews("ONEIDA'S NEW TABLEWARE COLLECTION MAKES FOR BEAUTIFUL, BUDGET-FRIENDLY GIFTS"  , "images/news and events images/news01.jpg", "Get the dinner party started with this sleek dinner set! Featuring four bowls, and four salad plates, this set is under $50 right now!"),
            new LatestNews("OUR PLACE’S NEW WONDER OVEN IS THE STYLISH, VERSATILE COUNTERTOP APPLIANCE YOUR KITCHEN NEEDS", "images/news and events images/news02.jpg", "For home cooks who want one countertop appliance that can do the most and make good, fresh food fast, the Wonder Oven is going to be your new favorite thing."),
            new LatestNews("THE 11 BEST CROSSBODY PHONE CASES"  ,"images/news and events images/news03.jpg", "It makes total sense to us that crossbody phone cases are trending right now, because who wants to lug around anything extra, especially when it's this hot out?"),
            new LatestNews("‘BARBIE THE MOVIE’ AMAZON SHOP IS FULL OF PINK","images/news and events images/news04.jpg", "The Barbie movie shop on Amazon is home to loads of pink, plastic, and totally fantastic items, like collectible dolls, T-shirts, Barbie the Album (which you can pre-order in vinyl or CD formats), Barbie pool floats, and oodles more."),
            new LatestNews("GRAB THE TIKTOK-FAVORITE STANLEY QUENCHER TUMBLER IN A BRAND NEW SHADE"  , "images/news and events images/news05.jpg", "The hype really is worth it, especially if it helps you hydrate better throughout your day. So, you might want to grab one now while they're available"),
            new LatestNews("THE FOREVER 21 X REEBOK COLLAB IS GIVING MAJOR VARSITY VIBES", "images/news and events images/news06.jpg", "This collection gives major prep school drama main character energy, and we're so here for it! If you are, too, scroll on to shop some of our faves from the collection."),
            // Add more news and events here
        ].sort(() => Math.random() - 0.5);
    }
}

class AttractiveImage {
    constructor(name, imageUrl, description) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description; // Description attribute
    }

    static fetchAttractiveImages() {
        // Simulating fetching images from the internet
        return [
            new AttractiveImage("Bird Tree", "images/attractive images/attractive01.jpg", "A vibrant tree adorned with colorful birds, creating a lively and melodious natural symphony."),
            new AttractiveImage("Snowed Lake", "images/attractive images/attractive02.jpg", "A serene wintry scene: A bird perches on a tree beside a snow-covered lake."),
            new AttractiveImage("Spring Season", "images/attractive images/attractive03.jpg", "In a blossoming spring, a vibrant tree hosts a symphony as colorful birds celebrate nature's awakening."),
            new AttractiveImage("Ride on sea", "images/attractive images/attractive04.jpg", "Graceful bird soars above waves, finding rest on swaying tree in the sea's embrace."),
            new AttractiveImage("Tropical island", "images/attractive images/attractive05.jpg", "Colorful avian species inhabit lush trees on a tropical island, creating a vibrant symphony of nature."),
            // Add more attractive images here
        ].sort(() => Math.random() - 0.5);
    }
}

const homepageData = {
    title: "Homepage",
    introduction:"This website serves as a platform for various products and information. It aims to provide you with quality products and a seamless shopping experience. Explore our diverse range of products and find what you need. Stay updated with the latest news and events happening in our company and the industry.",
    latestNews: LatestNews.fetchLatestNews(),
    attractiveImages: AttractiveImage.fetchAttractiveImages()
};
/////////////////////////////Homepage data/////////////////////////




const aboutData = {
    logoAddress:"images/Logo/Logo.png",
    Founder: "Jonathan Marshall",
    companyName: "TradeLink",
    biography: "Jonathan Marshall is the visionary founder behind Tradelink, a groundbreaking online platform that has reshaped the way people shop and trade. Born on July 10, 1985, Jonathan's early fascination with technology led him to pursue a degree in Computer Science. After graduating, he worked for several tech companies, honing his skills and gaining invaluable insights into the world of digital commerce. However, it was his innate desire to create something truly impactful that drove Jonathan to launch Tradelink. Fueled by coffee-fueled late nights and an unwavering belief in his vision, he overcame countless challenges in the platform's early days. Jonathan's commitment to user experience, security, and seamless functionality turned Tradelink into a go-to destination for both buyers and sellers. Outside of his entrepreneurial endeavors, Jonathan enjoys hiking in the great outdoors, experimenting with new cooking recipes, and playing the guitar. He believes in giving back to the community and has initiated various charity drives through Tradelink, reflecting his commitment to making a positive impact beyond the digital realm. Jonathan Marshall's journey from a passionate tech enthusiast to the creator of Tradelink serves as an inspiration to aspiring entrepreneurs and tech innovators worldwide. His legacy is deeply intertwined with the ever-expanding realm of online commerce, and his dedication continues to shape the way we shop and connect in the digital age.",
    history: "Tradelink, founded in 2010, emerged as a pioneering force in the e-commerce landscape. Its creator, Jonathan Marshall, harnessed his passion for connecting people and products to create a platform that would revolutionize online shopping. Armed with a vision of bridging the gap between buyers and sellers, Tradelink started as a humble project in Jonathan's garage. Through relentless dedication and innovation, it rapidly gained traction, evolving into a dynamic online marketplace that now hosts millions of transactions every year.",
    address: "Tradelink Headquarters, 123 Market Street, Techville, TX 12345, United States"
};

const feedbackData = {
    imageUrl: "/images/image01.jpg",
    email: "dummy@example.com",
    contactNumber: "123-456-7890",
    address: "Dummy address",
    linkedIn: "Dummy LinkedIn profile"
};

/////////////////////////////Products data/////////////////////////

// Class for products
class Product {
    constructor(name, imageUrl, description, productType, manufacturedDate, price, manufacturer, country) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.productType = productType; // Electric, Wooden, Fabric
        this.manufacturedDate = manufacturedDate; // Dummy expiration date
        this.price = price; // Dummy price
        this.manufacturer = manufacturer; // Dummy manufacturer
        this.country = country; // Dummy country
    }
}

const allProducts = [
    // Electric Products
    new Product("Panasonic Rice Cooker", "images/goods/electric/image01.jpg", "Include Extended Warranty Plus (2 Years)", "Electric", "2023-03-31", "$100", "Panasonic", "USA"),
    new Product("MSI Modern 14 C7M Laptop"   , "images/goods/electric/image02.jpg", "Processor: Ryzen 5, Ram: 16GB", "Electric", "2023-01-31", "$1000", "MSI", "Canada"),
    new Product("Top Loader Washing Machine", "images/goods/electric/image03.jpg", "Special Features	Eco Bubble / BubbleStorm™ / Speed Spray™", "Electric", "2021-10-30", "$120", "Samsung", "UK"),
    new Product("Mixer Grinder", "images/goods/electric/image04.jpg", "Jar Capacity	1.5 LITRE JAR CAPACITY", "Electric", "2020-02-28", "$200", "Regnis", "Australia"),
    new Product("Built-In Oven", "images/goods/electric/image05.jpg", "deep baking tray, shallow baking tray,Grill Gate", "Electric", "2022-09-20", "$900", "Hafele", "USA"),

    // Wooden Products
    new Product("Budget Stool", "images/goods/wooden/image01.jpg", "Wipe clean using a damp cloth and a mild cleaner, wipe dry with a clean cloth", "Wooden", "2021-12-31", "$50", "Artisan Furnishings", "USA"),
    new Product("Cascade Console Table", "images/goods/wooden/image02.jpg", "	2 Drawer & steel rectangular bar frame with console unit", "Wooden", "2022-11-15", "$220", "Abans", "Sri Lanka"),
    new Product("Jane Center Table", "images/goods/wooden/image03.jpg", "Glass Top with Square Wooden frame", "Wooden", "2020-10-30", "$180", "RusticWoods Inc", "UK"),
    new Product("Regal Dining Set", "images/goods/wooden/image04.jpg", "Treated Rubber Wood, PU Cushion, Fabric,", "Wooden", "2019-02-28", "$300", "FineWood Creations", "Australia"),

    // Fabric Products
    new Product("ATHLETE DRY FIT T SHIRT", "images/goods/fabric/image01.jpg", "When your workout heats up, you'll want something to cool you down. Embrace the extremes in the Trafford Dry fit tee.", "Fabric", "2018-12-31", "$30", "TRAFFORD", "USA"),
    new Product("PINTUK DETAILED EMBROIDERED DRESS", "images/goods/fabric/image02.jpg", "Model Height 5' 6", "Wearing size UK 10 Please bear in mind that the photo may be slightly different from the actual item.", "Fabric", "2022-11-15", "$25", "TENDENZA", "Canada"),
    new Product("BOY SCHOOL UNIFORM SHORT", "images/goods/fabric/image03.jpg", "Model Height 4' 5", "wearing size 28 Please bear in mind that the photo may be slightly different from the actual item in terms of colour", "Fabric", "2021-10-30", "$40", "N/A", "Sri Lanka"),
    new Product("GIRL’S PRINTED FROCK", "images/goods/fabric/image04.jpg", "Please bear in mind that the photo may be slightly different from the actual item", "Fabric", "2021-02-28", "$35", "SilkSense", "Australia"),
    new Product("PRINTED BATIK SARONG", "images/goods/fabric/image05.jpg", "Hand wash with cold water, Wash inside out dark colors separately, Dry in a shade", "Fabric", "2020-04-20", "$45", "IndiaFabrics", "India"),
    new Product("LONG SLEEVE FORMAL SHIRT", "images/goods/fabric/image06.jpg", "Hand wash with cold water, Wash inside out dark colors separately, Dry in a shade", "Fabric", "2021-02-28", "$35", "SilkSense", "Australia"),
    new Product("DETAILED CROP TOP", "images/goods/fabric/image07.jpg", "Model Height 5' 6\" wearing size M", "Fabric", "2020-09-20", "$45", "EleganceFabrics", "USA"),
    
    // ... Add more products here if needed
].sort(() => Math.random() - 0.5); // Randomize the array

/////////////////////////////Products data/////////////////////////

// Homepage route
app.get("/", function(req, res) {
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

// Products route
app.get("/products/:category", function(req, res) {
    const category = req.params.category;

    // Filter products based on category
    const filteredProducts = allProducts.filter(product => product.productType.toLowerCase() === category);

    res.render("products.html", { data: { products: filteredProducts } });
});


app.post("/submit-feedback", function(req, res) {
    const submittedData = {
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        feedback: req.body.feedback
    };

    // Print submitted feedback data
    console.log(submittedData);

    res.send("Feedback submitted successfully");
});

app.listen(3000, function() {
    console.log("Server created on port 3000");
});





