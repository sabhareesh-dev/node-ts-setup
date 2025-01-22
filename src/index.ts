import express, { Application } from 'express';
import dotenv from 'dotenv';
import { logger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';
import sampleRoutes from './routes/sampleRoutes';
import { config } from './config/environment';

dotenv.config();

const app: Application = express();
const PORT = config.port;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/v1/sample', sampleRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
