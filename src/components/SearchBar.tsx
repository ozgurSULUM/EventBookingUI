import { FC, useEffect, useRef, useState } from "react";
import {
    Box,
    Text,
    InputGroup,
    IconButton,
    SlideFade,
    Input,
    Divider,
    InputRightElement,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    useDisclosure,
    useTimeout
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';
import useGetEvents from "../hooks/useGetEvents";

import { IEvent } from '../react-app-env';

const SearchBar: FC<any> = () => {
    const { data: events } = useGetEvents('upcoming');
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const { isOpen: popoverIsOpen, onClose: popoverOnClose, onToggle: popoverOnToggle } = useDisclosure();

    const navigate = useNavigate();

    const searchBarRef = useRef<any>();
    const debounce = useRef<any>();

    const [searchValue, setSearchValue] = useState<string>();
    const [searchedEvents, setSearchedEvents] = useState<IEvent[]>();

    const searchBarToggle = () => {
        setIsSearchBarOpen((prevIsSearchBarOpen) => !prevIsSearchBarOpen);
    }

    const handleSearch = () => {
        if (searchValue) {
            const wantedEvents = events?.filter((event) => {
                if (searchValue) {
                    if (event.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
                        return true;
                    }

                    if (event.organizer.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
                        return true;
                    }

                    return false;
                }
            });

            setSearchedEvents(wantedEvents);
        } else {
            setSearchedEvents(undefined);
        }
    }

    useEffect(() => {
        if (debounce.current) {
            clearTimeout(debounce.current);
        }
        debounce.current = setTimeout(() => handleSearch(), 700);
    }, [searchValue]);

    return (
        <>
            <SlideFade in={isSearchBarOpen} offsetX='-20px'>
                <Input
                    mr='2'
                    value={searchValue}
                    onChange={(ev) => setSearchValue(ev.target.value)}
                    ref={searchBarRef}
                    placeholder='Search Events'
                    size='md'
                    variant='outline' />
            </SlideFade>
            <Popover
                isOpen={popoverIsOpen}
                onClose={popoverOnClose}
                initialFocusRef={searchBarRef}
                placement='bottom-start'>
                <PopoverTrigger>
                    <IconButton
                        ml='2'
                        onClick={() => {
                            popoverOnToggle();
                            searchBarToggle();
                        }}
                        aria-label='search-button'>
                        <BsSearch />
                    </IconButton>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverBody maxH='300px' overflowY='scroll'>
                        {
                            searchedEvents?.map((event) => (
                                <Box cursor='pointer'
                                    onClick={() => {
                                        navigate(`/details/upcoming/${event.id}`);
                                        popoverOnToggle();
                                        searchBarToggle();
                                    }}>
                                    <Text mb='1' fontSize='lg' fontWeight='semibold' noOfLines={1}>{event.name}</Text>
                                    <Text fontSize='sm' noOfLines={1} fontWeight='light'>
                                        {event.organizer}
                                    </Text>
                                    <Divider mt='2' mb='2' />
                                </Box>
                            ))
                        }
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    );
}

export default SearchBar;