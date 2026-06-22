const mysql = require('mysql2/promise');

async function run() {
  const c = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@1234',
    database: 'amazon_clone'
  });

  try {
    // 1. Truncate products to start fresh
    await c.query('SET FOREIGN_KEY_CHECKS = 0');
    await c.query('TRUNCATE TABLE products');
    await c.query('SET FOREIGN_KEY_CHECKS = 1');

    // 2. Fetch all category items
    const [items] = await c.query('SELECT * FROM category_items');

    // 3. For each category item, create a matching product and link it
    for (const item of items) {
      // Generate a realistic looking price
      const price = (Math.floor(Math.random() * 4000) + 299) + 0.00;
      const desc = `Premium quality ${item.name}. Designed for everyday use with high durability and excellent performance.`;
      
      const [res] = await c.query(
        'INSERT INTO products (name, description, price, image, category, carousel_type) VALUES (?, ?, ?, ?, ?, ?)',
        [item.name, desc, price, item.image, 'General', 'related']
      );
      
      const newId = res.insertId;
      
      // Update the category_item to point exactly to this new product
      await c.query('UPDATE category_items SET link = ? WHERE id = ?', [`/product/${newId}`, item.id]);
    }

    console.log("Database successfully synchronized! All images now match their product pages.");
  } catch (err) {
    console.error(err);
  } finally {
    c.end();
  }
}

run();
