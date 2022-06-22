/// <reference types="react-scripts" />

interface RowPrice {
    price: number,
    from: number,
    to: number
}

export interface EventPrice {
    isItPaid: boolean;
    frontRows: RowPrice;
    middleRows: RowPrice;
    backRows: RowPrice;
}

interface Coordinates {
    lat: number,
    lng: number
}

export interface Location {
    city: string,
    place: string,
    center: Coordinates;
    zoom: number;
}

export interface IEvent {
    id: string;
    name: string;
    organizer: string;
    description: string,
    images: string[];
    startDate: Date;
    endDate: Date;
    category: string;
    ticketPrice: EventPrice;
    location: Location;
    popularity: number
}