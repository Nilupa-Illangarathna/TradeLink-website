const sqlite3 = require('sqlite3').verbose();

// Dummy data for Homepage
class LatestNews {
    constructor(headline, imageUrl, description) {
        this.headline = headline;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    static fetchLatestNews() {
        // Simulating fetching news from an API or database
        return [
            new LatestNews("ONEIDA'S NEW TABLEWARE COLLECTION MAKES FOR BEAUTIFUL, BUDGET-FRIENDLY GIFTS", "images/news and events images/news01.jpg", "Get the dinner party started with this sleek dinner set! Featuring four bowls, and four salad plates, this set is under $50 right now!"),
            new LatestNews("OUR PLACE’S NEW WONDER OVEN IS THE STYLISH, VERSATILE COUNTERTOP APPLIANCE YOUR KITCHEN NEEDS", "images/news and events images/news02.jpg", "For home cooks who want one countertop appliance that can do the most and make good, fresh food fast, the Wonder Oven is going to be your new favorite thing."),
            new LatestNews("THE 11 BEST CROSSBODY PHONE CASES", "images/news and events images/news03.jpg", "It makes total sense to us that crossbody phone cases are trending right now, because who wants to lug around anything extra, especially when it's this hot out?"),
            new LatestNews("‘BARBIE THE MOVIE’ AMAZON SHOP IS FULL OF PINK", "images/news and events images/news04.jpg", "The Barbie movie shop on Amazon is home to loads of pink, plastic, and totally fantastic items, like collectible dolls, T-shirts, Barbie the Album (which you can pre-order in vinyl or CD formats), Barbie pool floats, and oodles more."),
            new LatestNews("GRAB THE TIKTOK-FAVORITE STANLEY QUENCHER TUMBLER IN A BRAND NEW SHADE", "images/news and events images/news05.jpg", "The hype really is worth it, especially if it helps you hydrate better throughout your day. So, you might want to grab one now while they're available"),
            new LatestNews("THE FOREVER 21 X REEBOK COLLAB IS GIVING MAJOR VARSITY VIBES", "images/news and events images/news06.jpg", "This collection gives major prep school drama main character energy, and we're so here for it! If you are, too, scroll on to shop some of our faves from the collection."),
        ].sort(() => Math.random() - 0.5);
    }
}

class AttractiveImage {
    constructor(name, imageUrl, description) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    static fetchAttractiveImages() {
        return [
            new AttractiveImage("Bird Tree", "images/attractive images/attractive01.jpg", "A vibrant tree adorned with colorful birds, creating a lively and melodious natural symphony."),
            new AttractiveImage("Snowed Lake", "images/attractive images/attractive02.jpg", "A serene wintry scene: A bird perches on a tree beside a snow-covered lake."),
            new AttractiveImage("Spring Season", "images/attractive images/attractive03.jpg", "In a blossoming spring, a vibrant tree hosts a symphony as colorful birds celebrate nature's awakening."),
            new AttractiveImage("Ride on sea", "images/attractive images/attractive04.jpg", "Graceful bird soars above waves, finding rest on swaying tree in the sea's embrace."),
            new AttractiveImage("Tropical island", "images/attractive images/attractive05.jpg", "Colorful avian species inhabit lush trees on a tropical island, creating a vibrant symphony of nature."),
        ].sort(() => Math.random() - 0.5);
    }
}

const homepageData = {
    title: "Homepage",
    introduction: "This website serves as a platform for various products and information. It aims to provide you with quality products and a seamless shopping experience. Explore our diverse range of products and find what you need. Stay updated with the latest news and events happening in our company and the industry.",
    latestNews: LatestNews.fetchLatestNews(),
    attractiveImages: AttractiveImage.fetchAttractiveImages()
};

// Create and populate the homepage.db database
let homepageDb = new sqlite3.Database('databases/homepage.db');

homepageDb.serialize(() => {
    homepageDb.run('CREATE TABLE IF NOT EXISTS homepageData (data TEXT)');

    const insertStmt = homepageDb.prepare('INSERT INTO homepageData (data) VALUES (?)');

    // Convert homepageData to JSON and insert it into the database
    insertStmt.run(JSON.stringify(homepageData));

    insertStmt.finalize();

    console.log('Homepage data saved to database.');
});

homepageDb.close();
