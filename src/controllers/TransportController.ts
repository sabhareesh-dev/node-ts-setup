import { Request, Response } from 'express';
import { TransportFactory } from '../factories/TransportFactory';

export const getDistance = (req: Request, res: Response) => {
    const { mode, weight, distance } = req.body;

    try {
        const transportService = TransportFactory.createtransportService(mode);
        const cost = transportService.calculateCost(weight, distance);
        res.json({ mode, weight, distance, cost });
    } catch (error) {
        res.status(400).json({ error });
    }
};
