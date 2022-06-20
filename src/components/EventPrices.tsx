import { FC } from 'react';
import { EventPrice } from '../react-app-env';
import { 
    Box,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Heading,
    Divider,
    Flex
} from '@chakra-ui/react';

interface IEventPrices {
    ticketPrice: EventPrice | undefined
}
 
const EventPrices: FC<IEventPrices> = ({ticketPrice}) => {
    if(ticketPrice){
        if(ticketPrice.isItPaid){
        return (
            <Box width='100%' mt='32' >
                <Heading textAlign='center' mb='1'>Prices</Heading>
                <Divider />
                <Divider />
                <Divider mb='4' />
                <Flex width='100%' justify='space-between' wrap='wrap'>
                    <Stat textAlign='center'>
                        <StatLabel>Front Rows</StatLabel>
                        <StatNumber>₺{ticketPrice?.frontRows.price}.0</StatNumber>
                        <StatHelpText>Row {ticketPrice?.frontRows.from} to {ticketPrice.frontRows.to}</StatHelpText>
                    </Stat>
                    <Stat textAlign='center'>
                        <StatLabel>Middle Rows</StatLabel>
                        <StatNumber>₺{ticketPrice.middleRows.price}.0</StatNumber>
                        <StatHelpText>Row {ticketPrice.middleRows.from} to {ticketPrice.middleRows.to}</StatHelpText>
                    </Stat>
                    <Stat textAlign='center'>
                        <StatLabel>Back Rows</StatLabel>
                        <StatNumber>₺{ticketPrice?.backRows.price}.0</StatNumber>
                        <StatHelpText>Row {ticketPrice.backRows.from} to {ticketPrice.backRows.to}</StatHelpText>
                    </Stat>
                </Flex>
            </Box> 
        );
        } else {
            return (
                <Box width='100%' mt='32'>
                    <Heading textAlign='center' mb='1'>Prices</Heading>
                    <Divider />
                    <Divider />
                    <Divider mb='8' />
                    <Flex width='100%' justify='space-between' wrap='wrap'>
                        <Stat textAlign='center'>
                            <StatLabel>All Rows</StatLabel>
                            <StatNumber>₺0.0</StatNumber>
                            <StatHelpText>free of charge</StatHelpText>
                        </Stat>
                    </Flex>
                </Box> 
            );
        }

    }

    return(<Box></Box>);
}
 
export default EventPrices;