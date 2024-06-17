import express from 'express';
import bodyParser from 'body-parser';
import itemRoutes from './routes/iteamRouter';
import sequelize from './config/database';
require('dotenv').config()


const app = express();

const port = process.env.PORT

app.use(bodyParser.json());

app.use('/api', itemRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
