import { Request, Response } from 'express';

export const getSample = (req: Request, res: Response) => {
    res.json({ message: 'Hello World, this is a sample endpoint!' });
};
