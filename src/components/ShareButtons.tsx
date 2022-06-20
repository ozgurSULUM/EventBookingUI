import { FC } from 'react';
import { 
    FaFacebookSquare, 
    FaTwitterSquare, 
    FaWhatsappSquare,
    FaLinkedin 
} from 'react-icons/fa';
import { 
    FacebookShareButton, 
    TwitterShareButton, 
    WhatsappShareButton, 
    LinkedinShareButton 
} from 'react-share';
import { HStack, Container } from '@chakra-ui/react';

const IconStyles = {
    fontSize: '2rem'
}

const ShareButtons: FC<any> = () => {

    return (
        <HStack>
            <FacebookShareButton url={window.location.href}>
                <FaFacebookSquare style={IconStyles}/>
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href}>
                <FaTwitterSquare style={IconStyles}/>
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href}>
                <FaWhatsappSquare style={IconStyles}/>
            </WhatsappShareButton>
            <LinkedinShareButton url={window.location.href}>
                <FaLinkedin style={IconStyles}/>
            </LinkedinShareButton>
        </HStack>
    );
}
 
export default ShareButtons;