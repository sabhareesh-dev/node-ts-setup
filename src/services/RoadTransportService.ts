import { TransportService } from '../interfaces/TransportService';

export class RoadTransportService implements TransportService {
    calculateCost(weight: number, distance: number): number {
        return 10 + weight * 10 + distance * 0.1;
    }
}
