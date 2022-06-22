import { FC, useEffect, useState } from 'react';
import {
    Box,
    Text,
    Button,
    useDisclosure,
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverTrigger,
    ButtonGroup,
    Select,
    Flex,
    Input,
    Divider
} from '@chakra-ui/react';
import { FiFilter } from 'react-icons/fi';
import DatePicker from "react-datepicker";
import { isEqual } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

import { IEvent } from '../react-app-env';

interface IEventFilter {
    events: IEvent[] | undefined;
    filteredEvents: IEvent[] | undefined;
    setFilteredEvents: React.Dispatch<React.SetStateAction<IEvent[] | undefined>>;
    setFilterWithPlace: React.Dispatch<React.SetStateAction<string | undefined>>;
    eventType: "passed" | "upcoming";
    filterWithPlace: string | undefined;
}

const cities = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
    "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale",
    "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum ", "Eskişehir",
    "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir",
    "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya ", "Malatya",
    "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya",
    "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon  ", "Tunceli", "Şanlıurfa", "Uşak",
    "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt ", "Karaman", "Kırıkkale", "Batman", "Şırnak",
    "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük ", "Kilis", "Osmaniye ", "Düzce"];

const eventCategories = ["Konser", "Tiyatro", "Festival", "Lansman"];

const EventFilter: FC<IEventFilter> = (
    {
        events,
        filterWithPlace,
        filteredEvents,
        setFilterWithPlace,
        setFilteredEvents,
        eventType
    }) => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const [filterDate, setFilterDate] = useState<Date>();
    const [filterPlace, setFilterPlace] = useState<string>();
    const [filterCity, setFilterCity] = useState<string>();
    const [filterCategory, setFilterCategory] = useState<string>();
    const [showReset, setShowReset] = useState<boolean>(false);

    const filterEvents = () => {
        if (filterDate || filterPlace || filterCity || filterCategory) {
            const wantedEvents = events?.filter((event) => {
                if (filterDate) {
                    if (!isEqual(filterDate, event.startDate)) {
                        return false;
                    }
                }

                if (filterCity) {
                    if (!(filterCity.toLowerCase() === event.location.city.toLowerCase())) {
                        return false;
                    }
                }

                if (filterCategory) {
                    if (!(filterCategory.toLowerCase() === event.category.toLowerCase())) {
                        return false;
                    }
                }

                if (filterPlace) {
                    const flag = event.location.place.toLowerCase().indexOf(filterPlace.toLowerCase());
                    if (flag === -1) {
                        return false;
                    }
                }

                return true;
            });
            setFilteredEvents(wantedEvents);
            setShowReset(true);
        } else {
            setFilteredEvents(events);
            setShowReset(false);
        }
    }

    const resetFilter = () => {
        setFilterPlace('');
        setFilterDate(undefined);
        setFilterCity('');
        setFilterCategory('');
        setFilterWithPlace('');
        setShowReset(false);
        setFilteredEvents(events);
    }

    useEffect(() => {
        setFilterPlace(filterWithPlace);
        setFilterDate(undefined);
        setFilterCity(undefined);
        setFilterCategory(undefined);

        if (filterWithPlace) {
            const wantedEvents = events?.filter((event) => {

                if (filterWithPlace) {
                    const flag = event.location.place.toLowerCase().indexOf(filterWithPlace.toLowerCase());
                    if (flag === -1) {
                        return false;
                    }
                }

                return true;
            });
            setFilteredEvents(wantedEvents);
            setShowReset(true);
        } else {
            setFilteredEvents(events);
            setShowReset(false);
        }
    }, [filterWithPlace]);

    return (
        <Box mb='2' mt='4'>
            <Popover
                returnFocusOnClose={false}
                isOpen={isOpen}
                placement='bottom-start'
                closeOnBlur={false}>
                <PopoverTrigger>
                    <Button ml='6' aria-label='filter-button' onClick={onToggle}>
                        <FiFilter />
                        <Text ml='2'>
                            Filter
                        </Text>
                    </Button>
                </PopoverTrigger>
                <PopoverContent w={{ base: '200px', sm: '300px', md: '210px', lg: '210px' }}>
                    <PopoverHeader fontWeight='semibold'>Filter Options</PopoverHeader>
                    <PopoverBody>
                        <Text mb='1' fontSize='x-small' fontWeight='light' >Event Start Date</Text>
                        <Divider mb='2' />
                        <DatePicker
                            minDate={eventType === "upcoming" ? new Date() : undefined}
                            maxDate={eventType === "passed" ? new Date() : undefined}
                            placeholderText='None' selected={filterDate}
                            onChange={(date: Date) => setFilterDate(date)} />
                        <Text mb='1' mt='6' fontSize='x-small' fontWeight='light' >Event City and Place</Text>
                        <Divider mb='2' />
                        <Select
                            value={filterCity}
                            onChange={(ev) => setFilterCity(ev.target.value)}
                            placeholder='None'
                            size='md'
                            variant='unstyled'>
                            {
                                cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))
                            }
                        </Select>
                        <Input
                            value={filterPlace}
                            onChange={(ev) => setFilterPlace(ev.target.value)}
                            variant='unstyled'
                            placeholder='Place'
                            size='md'
                            mt='2'
                        />
                        <Text mb='1' mt='6' fontSize='x-small' fontWeight='light' >Event Category</Text>
                        <Divider mb='2' />
                        <Select
                            value={filterCategory}
                            onChange={(ev) => setFilterCategory(ev.target.value)}
                            placeholder='None'
                            size='md'
                            variant='unstyled'>
                            {
                                eventCategories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))
                            }
                        </Select>
                    </PopoverBody>
                    <Flex m='4' display='flex' justifyContent='flex-end'>
                        <ButtonGroup size='xs'>
                            {showReset && <Button onClick={resetFilter} variant='outline'>Reset</Button>}
                            <Button onClick={onClose} variant='outline'>Cancel</Button>
                            <Button onClick={filterEvents} colorScheme='green'>Apply</Button>
                        </ButtonGroup>
                    </Flex>
                </PopoverContent>
            </Popover>
        </Box>
    );
}

export default EventFilter;