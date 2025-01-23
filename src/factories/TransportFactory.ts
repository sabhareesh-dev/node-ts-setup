import { TransportService } from '../interfaces/TransportService';
import { AirTransportService } from '../services/AirTransportService';
import { RoadTransportService } from '../services/RoadTransportService';

export class TransportFactory {
    static createtransportService(mode: string): TransportService {
        switch (mode) {
            case 'air':
                return new AirTransportService();
            case 'road':
                return new RoadTransportService();
            default:
                throw new Error(`Transport mode ${mode} not supported.`);
        }
    }
}
