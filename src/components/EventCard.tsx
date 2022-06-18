import { FC } from 'react';

import {
    Box,
    Text,
    Image,
    useColorModeValue
} from '@chakra-ui/react';

import imageFallbackPlaceholder from '../resources/eventImagePlaceholder.svg';
import { IEvent } from '../react-app-env';

interface IEventCard {
    event: IEvent
}

const EventCard: FC<IEventCard> = ({ event }) => {
    const shadowColor = useColorModeValue('rgba(0,0,0,0.2)', 'rgba(255,255,255,0.2)');

    return (
        <Box _hover={{ boxShadow: `0 8px 16px 0 ${shadowColor}`, }}
            transition='all 100ms'
            w='320px'
            h='400px'
            m='2'
            borderWidth='2px'
            borderRadius='sm'
            overflow='hidden'>
            <Image w='100%' h='200px' src={event.image} fallbackSrc={imageFallbackPlaceholder} objectFit='cover' />
            <Text>
                {event.description}
            </Text>
        </Box>
    )
}

export default EventCard;