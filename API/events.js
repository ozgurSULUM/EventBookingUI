import { isBefore, isAfter } from 'date-fns';

export const getUpcomingEvents = (allEvents) => {
    const currentDate = new Date();
    const upcomingEvents = allEvents.filter((event) => {
        return isAfter(event.startDate, currentDate);
    });
    return upcomingEvents;
};

export const getPastEvents = (allEvents) => {
    const currentDate = new Date();
    const pastEvents = allEvents.filter((event) => {
        return isBefore(event.startDate, currentDate);
    });
    return pastEvents;
};

const events = [
    {
        id: '1',
        name: "Nikomedia Kazıları",
        image: "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman'
    },
    {
        id: '2',
        name: "Kiraz Şenliği",
        image: "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-07-at-11.19.34-640x640.jpeg",
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 25),
        endDate: new Date(2022, 5, 26),
        description: "Arızlı, Kulfallı, Kabaoğlu ve Akpınar Mahallelerinde üretilen kirazlar Kuruçeşme Mahallesi Kapalı Pazar Alanında gerçekleşen Kiraz Şenliği ile vatandaşlarla buluştu. Bölgede mevsim itibariyle yetişen dört kiraz cinsi arasında yapılacak kiraz yarışması ile en güzel kirazı üreten üreticiler ödüllendirildi. Yarışmanın yanı sıra program boyunca birbirinden renkli etkinlikler gerçekleştirildi.",
        category: 'festival'
    },
    {
        id: '3',
        name: "Mezuniyet",
        image: "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
        organizer: "KOÜ",
        startDate: new Date(2022, 5, 10),
        endDate: new Date(2022, 5, 3),
        description: "Modern home in city center in the heart of historic Los Angeles",
        category: 'kutlama'
    },
    {
        id: '4',
        name: "Mezuniyet",
        image: "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
        organizer: "KOÜ",
        startDate: new Date(2022, 5, 18),
        endDate: new Date(2022, 5, 19),
        description: "Modern home in city center in the heart of historic Los Angeles",
        category: 'kutlama'
    },
    {
        id: '5',
        name: "Mezuniyet",
        image: "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
        organizer: "KOÜ",
        startDate: new Date(),
        endDate: new Date(),
        description: "Modern home in city center in the heart of historic Los Angeles",
        category: 'kutlama'
    },
    {
        id: '6',
        name: "Nikomedia Kazıları",
        image: "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman'
    },
    {
        id: '7',
        name: "Nikomedia Kazıları",
        image: "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman'
    },
    {
        id: '8',
        name: "Nikomedia Kazıları",
        image: "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman'
    },
    {
        id: '9',
        name: "Nikomedia Kazıları",
        image: "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman'
    },
];




export default events;