/// <reference types="react-scripts" />

export interface IEvent {
    id: string;
    name: string;
    organizer: string;
    description: string,
    image: string;
    startdate: Date;
    endDate: Date;
    category: string;
}