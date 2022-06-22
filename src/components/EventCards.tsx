import { FC, useEffect, useState } from 'react';
import {
    Flex,
    Heading,
    Box,
    Text
} from '@chakra-ui/react';

import EventCard from './EventCard';
import EventFilter from './EventFilter';
import DateFilter from './DateFilter';

import { IEvent } from '../react-app-env';

interface IEventCards {
    events: IEvent[] | undefined;
    eventType: "passed" | "upcoming";
    filterType: "DateFilter" | "EventFilter"
}

const EventCards: FC<IEventCards> = ({ events, eventType, filterType }) => {
    const [filteredEvents, setFilteredEvents] = useState<IEvent[] | undefined>();
    const [filterWithPlace, setFilterWithPlace] = useState<string>();

    useEffect(() => {
        setFilteredEvents(events);
    }, [events]);

    return (
        <Box w='90%' margin='auto'>
            <Heading fontWeight='hairline' textTransform='capitalize' textAlign='center'>
                {eventType} events
            </Heading>
            {filterType === "EventFilter" &&
                <EventFilter
                    events={events}
                    filterWithPlace={filterWithPlace}
                    filteredEvents={filteredEvents}
                    setFilteredEvents={setFilteredEvents}
                setFilterWithPlace={setFilterWithPlace}
                    eventType={eventType} />}
            {filterType === "DateFilter" &&
                <DateFilter
                    events={events}
                    filterWithPlace={filterWithPlace}
                    filteredEvents={filteredEvents}
                    setFilteredEvents={setFilteredEvents}
                setFilterWithPlace={setFilterWithPlace}
                    eventType={eventType} />}
            <Flex flexWrap='wrap' justify='center'>
                {
                    filteredEvents?.length !== 0 ? (filteredEvents?.map((event) => (
                        <EventCard
                            setFilterWithPlace={setFilterWithPlace}
                            key={event.id}
                            event={event}
                            eventType={eventType} />
                    ))) : (
                            <Text>No Event Found</Text>
                        )
                }
            </Flex>
        </Box>
    )
}

export default EventCards;