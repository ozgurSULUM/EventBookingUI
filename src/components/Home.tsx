import { FC } from 'react';
import {
    Box,
    Fade,
    Heading,
    useColorModeValue,
    ScaleFade,
    Text,
    Button,
    Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import useGetEvents from '../hooks/useGetEvents';

import EventCard from './EventCard';
import Events from './Events';

import { IEvent } from '../react-app-env';

const getPopularThree = (events: IEvent[] | undefined): IEvent[] | undefined => {
    if(events){
        const sortedEvents = events.sort((a,b)=>(a.popularity > b.popularity)? -1 : 1);
        if(sortedEvents.length > 3){
            return sortedEvents.slice(0,3);
        } else {
            return sortedEvents;
        }
    }
}

const Home: FC<any> = () => {
    const colorMode = useColorModeValue('black', 'white');
    const reverseColorMode = useColorModeValue('white', 'black');
    const navigate = useNavigate();
    const { data: events } = useGetEvents("upcoming");

    return (
        <Fade in={true}>
            <Flex 
                margin='auto' 
                width='90%' 
                height={{ base: '120vh', sm: '120vh', md: '120vh', lg: '90vh' }}
                flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}}>
                <Flex
                    pt='32'
                    ml={{ base: '-7', sm: '-7', md:'0' }}
                    width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
                    justify='center'
                    height='100%'
                >
                    <ScaleFade initialScale={0.9} in={true}>
                        <Box
                            borderLeft={`2px solid ${colorMode}`}
                            height='70px'
                            pl='4'
                            _after={{
                                display: 'inline',
                                content: '""',
                                position: 'absolute',
                                width: '0px',
                                height: '0px',
                                borderLeft: `35px solid ${colorMode}`,
                                borderTop: '35px solid transparent',
                                borderBottom: '35px solid transparent',
                                marginLeft: '4'

                            }}
                        >
                            <Box display='inline-block'>
                                <Heading size={{ base: 'lg', sm: 'lg', md: 'lg', lg: 'xl' }}>
                                    Dont miss any events!
                                </Heading>
                                <Text size={{ base: 'lg', sm: 'lg', md: 'lg', lg: 'xl' }} fontWeight='semibold'>
                                    There is a lot of event to look for.
                                </Text>
                            </Box>
                        </Box>
                    </ScaleFade>
                </Flex>

                <Flex
                    justify='center'
                    mt='8'
                    width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
                    height='100%'>
                    <ScaleFade initialScale={0.9} in={true}>
                        <Heading fontWeight='hairline' textTransform='capitalize' textAlign='center' mb='4'>Popular Events</Heading>
                        <Box w='340px'>
                            <Carousel showThumbs={false} showStatus={false} stopOnHover={false} transitionTime={2} infiniteLoop autoPlay>
                                {
                                    getPopularThree(events)?.map((event)=>{
                                        return <EventCard setFilterWithPlace={undefined} key={event.id} event={event} eventType='upcoming' />
                                    })
                                }
                            </Carousel>
                        </Box>
                    </ScaleFade>
                </Flex>
            </Flex>
            <Box mt='16' h='50%'>
                <Events eventType='upcoming' filterType='DateFilter' />
            </Box>
        </Fade>
    );
}

export default Home;