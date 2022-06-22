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
import { isBefore, isAfter } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

import { IEvent } from '../react-app-env';

interface IEventFilter {
    events: IEvent[] | undefined;
    filteredEvents: IEvent[] | undefined;
    setFilteredEvents: React.Dispatch<React.SetStateAction<IEvent[] | undefined>>;
    eventType: "past" | "upcoming";
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

const DateFilter: FC<IEventFilter> = ({ events, filterWithPlace, filteredEvents, setFilteredEvents, eventType }) => {
    const { isOpen, onToggle, onClose } = useDisclosure();

    const [filterPlace, setFilterPlace] = useState<string>();
    const [filterFromDate, setFilterFromDate] = useState<Date>();
    const [filterToDate, setFilterToDate] = useState<Date>();

    const [showReset, setShowReset] = useState<boolean>(false);

    const filterEvents = () => {
        if ((filterFromDate || filterToDate) || filterPlace) {
            const wantedEvents = events?.filter((event) => {
                if (filterFromDate) {
                    if (!isBefore(filterFromDate, event.endDate)) {
                        return false;
                    }
                }

                if (filterToDate) {
                    if (!isAfter(filterToDate, event.startDate)) {
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
        setFilterFromDate(undefined);
        setFilterToDate(undefined);
        setFilterPlace(undefined);
        setShowReset(false);
        setFilteredEvents(events);
    }

    useEffect(() => {
        setFilterPlace(filterWithPlace);
        setFilterFromDate(undefined);
        setFilterToDate(undefined);

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
                        <Text mb='1' fontSize='x-small' fontWeight='light' >From Date</Text>
                        <Divider mb='2' />
                        <DatePicker
                            maxDate={filterToDate}
                            placeholderText='None' selected={filterFromDate}
                            onChange={(date: Date) => setFilterFromDate(date)} />

                        <Text mb='1' mt='3' fontSize='x-small' fontWeight='light' >To Date</Text>
                        <Divider mb='2' />
                        <DatePicker
                            minDate={filterFromDate}
                            placeholderText='None' selected={filterToDate}
                            onChange={(date: Date) => setFilterToDate(date)} />
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

export default DateFilter;