import { FC, useState } from 'react';
import { Fade, Box, Heading } from '@chakra-ui/react';

import { IEvent } from '../react-app-env';
import EventCards from './EventCards';
import useGetEvents from '../hooks/useGetEvents';

interface IEvents {
    eventType: "past" | "upcoming"
}

const Events: FC<IEvents> = ({ eventType }) => {
    const { isLoading, isError, data: events } = useGetEvents(eventType);
    if (isLoading) {
        return (
            <Box w='90%' margin='auto'>
                <Heading>Loading...</Heading>
            </Box>
        )
    }

    if (isError) {
        return (
            <Box w='90%' margin='auto'>
                <Heading>Error</Heading>
            </Box>
        )
    }

    return (
        <Fade in={true}>
            <EventCards events={events} eventType={eventType} />
        </Fade>
    )
}

export default Events;