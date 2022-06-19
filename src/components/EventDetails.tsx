import { FC } from 'react';
import {
    Box,
    Heading
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';


const EventDetails: FC<any> = () => {
    const { eventId, eventType } = useParams();
    return (
        <Box w='100%' h='60vh'>
            <Heading>
                {eventType}
            </Heading>
            <Heading>
                {eventId}
            </Heading>
        </Box>
    );
}

export default EventDetails;