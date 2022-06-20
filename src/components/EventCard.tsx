import { FC } from 'react';

import {
    Box,
    Text,
    Image,
    HStack,
    Tag,
    useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import imageFallbackPlaceholder from '../resources/event_image_placeholder.svg';
import { IEvent } from '../react-app-env';

interface IEventCard {
    event: IEvent,
    eventType: "past" | "upcoming"
}

const EventCard: FC<IEventCard> = ({ event, eventType }) => {
    const shadowColor = useColorModeValue('rgba(0,0,0,0.2)', 'rgba(255,255,255,0.2)');
    const navigate = useNavigate();

    return (
        <Box
            onClick={() => navigate(`/details/${eventType}/${event.id}`)}
            _hover={{ boxShadow: `0 4px 8px 0 ${shadowColor}` }}
            cursor='pointer'
            transition='all 150ms'
            w='320px'
            h='400px'
            m='2'
            borderWidth='2px'
            borderRadius='lg'
            overflow='hidden'>
            <Image w='100%' h='200px' src={event.images[0]} fallbackSrc={imageFallbackPlaceholder} objectFit='cover' />
            <Box m='4'>
                <HStack mb='4'>
                    <Tag size='sm' pl='3' pr='3' variant='solid' colorScheme={eventType === 'upcoming' ? 'green' : 'red'}>{eventType}</Tag>
                    <Tag size='sm' pl='3' pr='3' variant='solid' colorScheme='yellow'>{event.category}</Tag>
                </HStack>
                <Text mb='1' fontSize='lg' fontWeight='semibold' noOfLines={1}>{event.name}</Text>
                <Text mb='4' fontSize='sm' fontWeight='light' noOfLines={1}>{event.startDate.toDateString()} - {event.endDate.toDateString()}</Text>

                <Text mb='4' noOfLines={1} fontWeight='semibold'>
                    {event.description}
                </Text>
                <Text fontSize='sm' noOfLines={1} fontWeight='light'>
                    {event.organizer}
                </Text>
            </Box>
        </Box>
    )
}

export default EventCard;