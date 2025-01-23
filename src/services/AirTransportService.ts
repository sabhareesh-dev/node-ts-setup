import { TransportService } from '../interfaces/TransportService';

export class AirTransportService implements TransportService {
    calculateCost(weight: number, distance: number): number {
        return 100 + weight * 10 + distance * 0.5;
    }
}
