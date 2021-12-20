const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;
const db = require('./models')

// Enable cors security headers
app.use(cors())

// add an express method to parse the POST method
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// home page
app.get('/api/', (req, res) => {
  res.send('Hi There Help')
});

// Routes
const userRouter = require("./routes/Users");
app.use("/api/user", userRouter);


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Sever running on PORT ${PORT}`);
  });
});



