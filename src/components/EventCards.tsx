import { FC } from 'react';
import {
    Flex,
    Heading,
    Box
} from '@chakra-ui/react';

import EventCard from './EventCard';
import { IEvent } from '../react-app-env';

interface IEventCards {
    events: IEvent[] | undefined;
    eventType: "past" | "upcoming"
}

const EventCards: FC<IEventCards> = ({ events, eventType }) => {
    return (
        <Box w='90%' margin='auto'>
            <Heading fontWeight='hairline' textTransform='capitalize' textAlign='center' mb='4'>
                {eventType} events
            </Heading>
            <Flex flexWrap='wrap' justify='center'>

                {
                    events?.map((event) => (
                        <EventCard key={event.id} event={event} eventType={eventType} />
                    ))
                }
            </Flex>
        </Box>
    )
}

export default EventCards;