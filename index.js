import express from 'express';
import 'dotenv/config';
import openaiRoutes from './routes/openaiRoutes.js'

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/openai', openaiRoutes);

app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));

