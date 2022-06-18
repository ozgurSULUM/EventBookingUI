import { FC, useState } from 'react';
import {
    Box,
    Text,
    Fade
} from '@chakra-ui/react';

import EventCards from './EventCards';
import { IEvent } from '../react-app-env';

const mockEvents: IEvent[] = [
    {
        id: '1',
        name: "Mezuniyet",
        image: "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
        organizer: "KOÜ",
        startdate: new Date(),
        endDate: new Date(),
        description: "This is description"
    },
    {
        id: '2',
        name: "Mezuniyet",
        image: "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
        organizer: "KOÜ",
        startdate: new Date(),
        endDate: new Date(),
        description: "This is description"
    },
    {
        id: '3',
        name: "Mezuniyet",
        image: "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
        organizer: "KOÜ",
        startdate: new Date(),
        endDate: new Date(),
        description: "This is description"
    },
    {
        id: '4',
        name: "Mezuniyet",
        image: "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
        organizer: "KOÜ",
        startdate: new Date(),
        endDate: new Date(),
        description: "This is description"
    },
];

interface IEvents {
    eventType: "past" | "upcoming"
}

const Events: FC<IEvents> = ({ eventType }) => {
    const [events, setEvents] = useState<IEvent[]>(mockEvents);


    return (
        <Fade in={true}>
            <Box>
                <Text>{eventType}</Text>
                <EventCards events={events} />
            </Box>
        </Fade>
    )
}

export default Events;