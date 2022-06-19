import { FC } from 'react';
import { Heading, Center } from '@chakra-ui/react';

const PageNotFound: FC<any> = () => {
    return (
        <Center w='100%' h='60vh'>
            <Heading size='3xl'>
                Page not found.
            </Heading>
        </Center>
    )
};

export default PageNotFound;