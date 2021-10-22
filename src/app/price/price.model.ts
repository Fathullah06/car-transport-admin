export class Price {
    _id: string;
    empty: number;
    goods: number;
    origin: {
        city_id: string;
        name: string;
        postal_code: number;
        zone: string;
        _id: string;
    }
    destination: {
        city_id: string;
        name: string;
        postal_code: number;
        zone: string;
        _id: string;
    }
}