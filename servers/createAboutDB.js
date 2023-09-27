const sqlite3 = require('sqlite3').verbose();

// Dummy data for about page
const aboutData = {
  logoAddress: "images/Logo/Logo.png",
  Founder: "Jonathan Marshall",
  companyName: "TradeLink",
  biography: "Jonathan Marshall is the visionary founder behind Tradelink, a groundbreaking online platform that has reshaped the way people shop and trade. Born on July 10, 1985, Jonathan's early fascination with technology led him to pursue a degree in Computer Science. After graduating, he worked for several tech companies, honing his skills and gaining invaluable insights into the world of digital commerce. However, it was his innate desire to create something truly impactful that drove Jonathan to launch Tradelink. Fueled by coffee-fueled late nights and an unwavering belief in his vision, he overcame countless challenges in the platform's early days. Jonathan's commitment to user experience, security, and seamless functionality turned Tradelink into a go-to destination for both buyers and sellers. Outside of his entrepreneurial endeavors, Jonathan enjoys hiking in the great outdoors, experimenting with new cooking recipes, and playing the guitar. He believes in giving back to the community and has initiated various charity drives through Tradelink, reflecting his commitment to making a positive impact beyond the digital realm. Jonathan Marshall's journey from a passionate tech enthusiast to the creator of Tradelink serves as an inspiration to aspiring entrepreneurs and tech innovators worldwide. His legacy is deeply intertwined with the ever-expanding realm of online commerce, and his dedication continues to shape the way we shop and connect in the digital age.",
  history: "Tradelink, founded in 2010, emerged as a pioneering force in the e-commerce landscape. Its creator, Jonathan Marshall, harnessed his passion for connecting people and products to create a platform that would revolutionize online shopping. Armed with a vision of bridging the gap between buyers and sellers, Tradelink started as a humble project in Jonathan's garage. Through relentless dedication and innovation, it rapidly gained traction, evolving into a dynamic online marketplace that now hosts millions of transactions every year.",
  address: "Tradelink Headquarters, 123 Market Street, Techville, TX 12345, United States"
};

// Create and populate the aboutDB.db database
let aboutDb = new sqlite3.Database('databases/aboutDB.db');

aboutDb.serialize(() => {
  aboutDb.run('CREATE TABLE IF NOT EXISTS aboutData (data TEXT)');

  const insertStmt = aboutDb.prepare('INSERT INTO aboutData (data) VALUES (?)');

  // Convert aboutData to JSON storing into the database
  insertStmt.run(JSON.stringify(aboutData));

  insertStmt.finalize();

  console.log('About data saved to database.');
});

aboutDb.close();
