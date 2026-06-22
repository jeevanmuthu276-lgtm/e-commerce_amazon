const mysql = require('mysql2/promise');

async function run() {
  const c = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@1234',
    database: 'amazon_clone'
  });

  try {
    // 1. Update product images for Appliances to match the category images
    await c.query("UPDATE products SET image = '/images/categories/appliances/ac.jpg' WHERE id = 1");
    await c.query("UPDATE products SET image = '/images/categories/appliances/fridge.jpg' WHERE id = 2");
    await c.query("UPDATE products SET image = '/images/categories/appliances/microwave.jpg' WHERE id = 3");
    await c.query("UPDATE products SET image = '/images/categories/appliances/washing.jpg' WHERE id = 4");
    await c.query("UPDATE products SET image = '/images/categories/home/cushion.jpg' WHERE id = 5");
    await c.query("UPDATE products SET image = '/images/categories/laptop.jpg' WHERE id = 8"); // Headphones

    // 2. Update category_items links to point to the correct product IDs
    await c.query("UPDATE category_items SET link = '/product/1' WHERE name = 'Air conditioners'");
    await c.query("UPDATE category_items SET link = '/product/2' WHERE name = 'Refrigerators'");
    await c.query("UPDATE category_items SET link = '/product/3' WHERE name = 'Microwaves'");
    await c.query("UPDATE category_items SET link = '/product/4' WHERE name = 'Washing machines'");
    await c.query("UPDATE category_items SET link = '/product/8' WHERE name = 'Headphones'");

    // For the rest, map them to some product so they don't break
    await c.query("UPDATE category_items SET link = '/product/5' WHERE name IN ('Olay', 'Diapers')");
    await c.query("UPDATE category_items SET link = '/product/6' WHERE name IN ('Cetaphil', 'Toys')");
    await c.query("UPDATE category_items SET link = '/product/7' WHERE name IN ('Lotion', 'Ride ons')");
    await c.query("UPDATE category_items SET link = '/product/9' WHERE name IN ('Cream', 'Bath care')");
    
    // Also update any section links that point to '/products' to point to '/'
    await c.query("UPDATE category_sections SET link = '/' WHERE link LIKE '%/products%'");

    console.log("Database successfully updated!");
  } catch (err) {
    console.error(err);
  } finally {
    c.end();
  }
}

run();
