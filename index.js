// index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/process-design', (req, res) => {
  const designData = req.body;
  console.log('Received design data:', designData);

  // Example: Create a product in Shopify
  // You can use the Shopify API to create a product
  // Use the `POST /admin/api/2023-10/products.json` endpoint

  // Example: Send the design to Printful
  // Use the Printful API to create an order
  // Use the `POST /store/orders` endpoint

  res.json({ success: true, message: 'Design processed successfully' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
});
