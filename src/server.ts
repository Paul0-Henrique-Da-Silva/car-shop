import 'dotenv/config';
import app from './app';
import connectToDatabase from './Models/Connection';

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => `Running server on port: ${PORT}`);
  })
  .catch(() => 'Server initialization cancelled');
