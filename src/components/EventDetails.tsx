import { FC, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Container,
    Heading,
    Divider,
    Flex
} from '@chakra-ui/react';

import useGetEvents from '../hooks/useGetEvents';
import SlideShow from './SlideShow';
import ShareButtons from './ShareButtons';
import EventPrices from './EventPrices';
import EventLocation from './EventLocation';

import { IEvent } from '../react-app-env';


const EventDetails: FC<any> = () => {
    const { eventId, eventType } = useParams();
    const { data: events } = useGetEvents(eventType ? eventType : '');


    const event = useMemo(()=>{
        if (events) {
            const ev = events?.find((event) => {
                return eventId === event.id;
            });
            return ev;
        }
    },[events]);

    return (
        <Box w='100%' h='120vh' pt='8'>
            <Box>
                <SlideShow images={event?.images} />
            </Box>
            <Box>
                <Container centerContent>
                    <Heading mt='32' mb='2'>{event?.name}</Heading>
                    <Divider />
                    <Divider />
                    <Divider mb='4'/>
                    {event?.description}
                    <Flex flexDirection='row-reverse' w='100%' mt='4'>
                        <ShareButtons />
                    </Flex>
                    <EventPrices ticketPrice={event?.ticketPrice} />
                </Container>
            </Box>
            <EventLocation location={event?.location} />
        </Box>
    );
}

export default EventDetails;