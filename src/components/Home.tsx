import { FC } from 'react';
import {
    Box,
    Fade,
    Heading,
    useColorModeValue,
    ScaleFade,
    Text,
    Button,
    Flex
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as HomeAnimation from '../resources/home_lottie.json';

const defaultAnimationOptions = {
    loop: true,
    autplay: true,
    animationData: HomeAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Home: FC<any> = () => {
    const colorMode = useColorModeValue('black', 'white');
    const reverseColorMode = useColorModeValue('white', 'black');
    const navigate = useNavigate();

    return (
        <Fade in={true}>
            <Flex margin='auto' width='90%' height='80vh'>
                <Flex
                    pt='32'
                    ml={{ base: '-7', sm: '-7', md: '-7', lg: '-14' }}
                    width={{ base: '100%', sm: '100%', md: '65%', lg: '50%' }}
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
                                    Book your events today!
                                </Heading>
                                <Text size={{ base: 'lg', sm: 'lg', md: 'lg', lg: 'xl' }} fontWeight='semibold'>There is a lot of event to pick from.</Text>
                            </Box>
                        </Box>
                        <Button
                            _hover={{ backgroundColor: reverseColorMode, color: colorMode }}
                            color={reverseColorMode} backgroundColor={colorMode}
                            mt='8'
                            ml='2'
                            width='fit-content'
                            onClick={() => navigate('/upcoming')}>Upcoming Events</Button>
                    </ScaleFade>
                </Flex>

                <Flex display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
                    justify='center'
                    align='center'
                    width='50%'
                    height='100%'>
                    <ScaleFade initialScale={0.9} in={true}>
                        <Lottie
                            options={defaultAnimationOptions}
                            height={600}
                            width={600}
                        />
                    </ScaleFade>

                </Flex>
            </Flex>
        </Fade>
    );
}

export default Home;