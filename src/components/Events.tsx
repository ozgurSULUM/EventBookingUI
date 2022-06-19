import { FC, useState } from 'react';
import {
    Box,
    Text,
    Fade
} from '@chakra-ui/react';

import EventCards from './EventCards';
import { IEvent } from '../react-app-env';

const mockEvents: IEvent[] = [
    {
        id: '1',
        name: "Nikomedia Kazıları",
        image: "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        organizer: "T.C. İzmit Belediyesi",
        startdate: new Date(2022, 5, 10),
        endDate: new Date(2022, 5, 11),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman'
    },
    {
        id: '2',
        name: "Kiraz Şenliği",
        image: "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-07-at-11.19.34-640x640.jpeg",
        organizer: "T.C. İzmit Belediyesi",
        startdate: new Date(2022, 5, 8),
        endDate: new Date(2022, 5, 9),
        description: "Arızlı, Kulfallı, Kabaoğlu ve Akpınar Mahallelerinde üretilen kirazlar Kuruçeşme Mahallesi Kapalı Pazar Alanında gerçekleşen Kiraz Şenliği ile vatandaşlarla buluştu. Bölgede mevsim itibariyle yetişen dört kiraz cinsi arasında yapılacak kiraz yarışması ile en güzel kirazı üreten üreticiler ödüllendirildi. Yarışmanın yanı sıra program boyunca birbirinden renkli etkinlikler gerçekleştirildi.",
        category: 'festival'
    },
    {
        id: '3',
        name: "Mezuniyet",
        image: "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
        organizer: "KOÜ",
        startdate: new Date(),
        endDate: new Date(),
        description: "Modern home in city center in the heart of historic Los Angeles",
        category: 'kutlama'
    },
    {
        id: '4',
        name: "Mezuniyet",
        image: "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
        organizer: "KOÜ",
        startdate: new Date(),
        endDate: new Date(),
        description: "Modern home in city center in the heart of historic Los Angeles",
        category: 'kutlama'
    },
];

interface IEvents {
    eventType: "past" | "upcoming"
}

const Events: FC<IEvents> = ({ eventType }) => {
    const [events, setEvents] = useState<IEvent[]>(mockEvents);


    return (
        <Fade in={true}>
            <EventCards events={events} eventType={eventType} />
        </Fade>
    )
}

export default Events;