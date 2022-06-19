import { FC } from "react";
import {
    Flex,
    Heading,
    Spacer,
    Center,
    Box
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { BsCalendar } from 'react-icons/bs';

import { ColorModeSwitcher } from "../ColorModeSwitcher";
import SiteNavbar from './SiteNavbar';

interface ISiteHeader {
    headerText: string
}

const SiteHeader: FC<ISiteHeader> = ({ headerText }) => {
    const navigate = useNavigate();

    return (
        <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
            <Center p='4' cursor='pointer' onClick={() => { navigate('/') }}>
                <Box mr='2'>
                    <BsCalendar />
                </Box>
                <Heading size='lg' fontWeight='semibold' fontFamily='monospace'>
                    {headerText}
                </Heading>
            </Center>
            <SiteNavbar />
            <Spacer />
            <Center>
                <ColorModeSwitcher />
            </Center>
        </Flex>
    )
}


export default SiteHeader;