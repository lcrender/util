import express from 'express';
import empRoutes from './routes/routes.js';
const app = express();
// Middlewares
app.use(express.json());
// Routes
app.use('/api', empRoutes);
app.use((req, res, next) => {
	res.status(404).json({ message: 'endpoint not found' });
});

export default app;
