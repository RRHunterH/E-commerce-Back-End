const express = require('express');
const sequelize = require('./config/sequelize'); // Adjust the path if needed

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes here
// Example:
// app.use('/api/categories', require('./Routes/API/category-routes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});