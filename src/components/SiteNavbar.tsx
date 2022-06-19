import { FC } from 'react';
import {
    Center,
    Link as ChakraLink,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const navRoutes = [
    ['/upcoming', 'Upcoming Events'],
    ['/past', 'Past Events']
];

const SiteNavbar: FC<any> = () => {
    const borderColor = useColorModeValue('black', 'white');
    const navigate = useNavigate();

    return (
        <Center>
            {
                navRoutes.map((route, index) => (
                    <ChakraLink
                        key={index}
                        onClick={() => navigate(route[0])}
                        p='4'
                        borderBottom='2px solid rgba(0,0,0,0)'
                        _hover={{ borderBottom: `2px solid ${borderColor}` }}>
                        <Text fontSize='md' fontWeight='semibold' fontFamily='monospace'>{route[1]}</Text>
                    </ChakraLink>
                ))
            }
        </Center>
    );
}

export default SiteNavbar;