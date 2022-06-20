import { FC } from "react";
import { Box, Center } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface ISlideShow {
    images: string[] | undefined
}

const SlideShow: FC<ISlideShow> = ({ images }) => {
    return (
        <Center>
            <div style={{ width: '60%' }}>
                <Carousel stopOnHover={false} transitionTime={2} infiniteLoop autoPlay>
                    {
                        images?.map((image, index) => (
                            <div key={index}>
                                <img src={image} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </Center>


    )
}

export default SlideShow;