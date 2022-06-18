import { FC } from 'react';
import {
    Flex,
} from '@chakra-ui/react';

import EventCard from './EventCard';
import { IEvent } from '../react-app-env';

interface IEventCards {
    events: IEvent[];
}

const EventCards: FC<IEventCards> = ({ events }) => {
    return (
        <Flex flexWrap='wrap' w='90%' margin='auto' justify='center'>
            {
                events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))
            }
        </Flex>
    )
}

export default EventCards;