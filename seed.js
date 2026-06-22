const mysql = require('mysql2/promise');

async function run() {
  const c = await mysql.createConnection({host: 'localhost', user: 'root', password: 'Root@1234', database: 'amazon_clone'});

  try {
    await c.query('ALTER TABLE category_sections ADD COLUMN type VARCHAR(50) DEFAULT "grid"');
    console.log("Added type column");
  } catch(e) { }

  try {
    await c.query('ALTER TABLE category_sections ADD COLUMN ad_image VARCHAR(255)');
    console.log("Added ad_image column");
  } catch(e) { }

  // 1. Sign In Ad
  const [res4] = await c.query('INSERT INTO category_sections (title, link, display_order, type, ad_image) VALUES (?, ?, ?, ?, ?)', ['Sign in for your best experience', '/login', 4, 'sign-in-ad', '/images/categories/1781601192443-samsungtv.webp']);
  
  // 2. Mock 2
  const [res5] = await c.query('INSERT INTO category_sections (title, link, display_order, type) VALUES (?, ?, ?, ?)', ['Pick up where you left off', '/products', 5, 'grid']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res5.insertId, 'Cetaphil', '/images/sponsored/cetaphil.jpg', '#']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res5.insertId, 'Olay', '/images/categories/home/cushion.jpg', '#']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res5.insertId, 'Lotion', '/images/categories/home/storage.jpg', '#']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res5.insertId, 'Cream', '/images/categories/home/lighting.jpg', '#']);

  // 3. Mock 3
  const [res6] = await c.query('INSERT INTO category_sections (title, link, display_order, type) VALUES (?, ?, ?, ?)', ['Up to 75% off | Deals on headphones', '/products?category=Electronics', 6, 'single']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res6.insertId, 'Headphones', '/images/categories/laptop.jpg', '#']);

  // 4. Mock 4
  const [res7] = await c.query('INSERT INTO category_sections (title, link, display_order, type) VALUES (?, ?, ?, ?)', ['Appliances for your home | Up to 55% off', '/products', 7, 'grid']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res7.insertId, 'Air conditioners', '/images/categories/appliances/ac.jpg', '#']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res7.insertId, 'Refrigerators', '/images/categories/appliances/fridge.jpg', '#']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res7.insertId, 'Microwaves', '/images/categories/appliances/microwave.jpg', '#']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res7.insertId, 'Washing machines', '/images/categories/appliances/washing.jpg', '#']);

  // 5. Mock 5
  const [res8] = await c.query('INSERT INTO category_sections (title, link, display_order, type) VALUES (?, ?, ?, ?)', ['Up to 50% off | Baby care & toys', '/products', 8, 'grid']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res8.insertId, 'Diapers', '/images/categories/essentials/bathroom.jpg', '#']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res8.insertId, 'Toys', '/images/categories/home/figurines.jpg', '#']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res8.insertId, 'Ride ons', '/images/categories/home/storage.jpg', '#']);
  await c.query('INSERT INTO category_items (section_id, name, image, link) VALUES (?, ?, ?, ?)', [res8.insertId, 'Bath care', '/images/categories/home/lighting.jpg', '#']);

  console.log("Database updated successfully");
  c.end();
}

run();
