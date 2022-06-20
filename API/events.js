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
        images: [
            "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn",
            "https://live-production.wcms.abc-cdn.net.au/ff1221fbfdb2fe163fdda15df5f77676?impolicy=wcms_crop_resize&cropH=394&cropW=700&xPos=0&yPos=37&width=862&height=485",
            "https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        ],
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman',
        location: {
            center: {
                lat: 40.77180317553562,
                lng: 29.965789052781698
            },
            zoom: 11
        },
        ticketPrice: {
            isItPaid: false,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 70,
                from: 3,
                to: 4
            },
            backRows: {
                price: 40,
                from: 3,
                to: 4
            }
        },
        popularity: 23
    },
    {
        id: '2',
        name: "Kiraz Şenliği",
        images: [
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        ],
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 25),
        endDate: new Date(2022, 5, 26),
        description: "Arızlı, Kulfallı, Kabaoğlu ve Akpınar Mahallelerinde üretilen kirazlar Kuruçeşme Mahallesi Kapalı Pazar Alanında gerçekleşen Kiraz Şenliği ile vatandaşlarla buluştu. Bölgede mevsim itibariyle yetişen dört kiraz cinsi arasında yapılacak kiraz yarışması ile en güzel kirazı üreten üreticiler ödüllendirildi. Yarışmanın yanı sıra program boyunca birbirinden renkli etkinlikler gerçekleştirildi.",
        category: 'festival',
        location: {
            center: {
                lat: 40.77180317553562,
                lng: 29.965789052781698
            },
            zoom: 11
        },
        popularity: 21
    },
    {
        id: '3',
        name: "Mezuniyet",
        images: [
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg"
        ],
        organizer: "KOÜ",
        startDate: new Date(2022, 5, 10),
        endDate: new Date(2022, 5, 3),
        description: "Modern home in city center in the heart of historic Los Angeles",
        category: 'kutlama',
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 70,
                from: 3,
                to: 4
            },
            backRows: {
                price: 40,
                from: 3,
                to: 4
            },
        },
        location: {
            center: {
                lat: 40.77180317553562,
                lng: 29.965789052781698
            },
            zoom: 11
        },
        popularity: 26
    },
    {
        id: '4',
        name: "Mezuniyet",
        images: [
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg"
        ],
        startDate: new Date(2022, 5, 18),
        endDate: new Date(2022, 5, 19),
        description: "Modern home in city center in the heart of historic Los Angeles",
        category: 'kutlama',
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 70,
                from: 3,
                to: 4
            },
            backRows: {
                price: 40,
                from: 3,
                to: 4
            }
        },
        location: {
            center: {
                lat: 40.77180317553562,
                lng: 29.965789052781698
            },
            zoom: 11
        },
        popularity: 12
    },
    {
        id: '5',
        name: "Mezuniyet",
        images: [
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg",
            "https://www.baskent.edu.tr/upload/images/id00_01_2020.jpg"
        ],
        organizer: "KOÜ",
        startDate: new Date(),
        endDate: new Date(),
        description: "Modern home in city center in the heart of historic Los Angeles",
        category: 'kutlama',
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 70,
                from: 3,
                to: 4
            },
            backRows: {
                price: 40,
                from: 3,
                to: 4
            }
        },
        location: {
            center: {
                lat: 40.77180317553562,
                lng: 29.965789052781698
            },
            zoom: 11
        },
        popularity: 19
    },
    {
        id: '6',
        name: "Nikomedia Kazıları",
        images: [],
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman',
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 70,
                from: 3,
                to: 4
            },
            backRows: {
                price: 40,
                from: 3,
                to: 4
            }
        },
        location: {
            center: {
                lat: 40.77180317553562,
                lng: 29.965789052781698
            },
            zoom: 11
        },
        popularity: 25
    },
    {
        id: '7',
        name: "Nikomedia Kazıları",
        images: [
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg"
        ],
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman',
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 70,
                from: 3,
                to: 4
            },
            backRows: {
                price: 40,
                from: 3,
                to: 4
            }
        },
        location: {
            center: {
                lat: 40.77180317553562,
                lng: 29.965789052781698
            },
            zoom: 11
        },
        popularity: 42
    },
    {
        id: '8',
        name: "Nikomedia Kazıları",
        images: [
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg"
        ],
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman',
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 70,
                from: 3,
                to: 4
            },
            backRows: {
                price: 40,
                from: 3,
                to: 4
            }
        },
        location: {
            center: {
                lat: 40.77180317553562,
                lng: 29.965789052781698
            },
            zoom: 11
        },
        popularity: 20
    },
    {
        id: '9',
        name: "Nikomedia Kazıları",
        images: [
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg"
        ],
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 31),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman',
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 70,
                from: 3,
                to: 4
            },
            backRows: {
                price: 40,
                from: 3,
                to: 4
            }
        },
        location: {
            center: {
                lat: 40.77180317553562,
                lng: 29.965789052781698
            },
            zoom: 11
        },
        popularity: 17
    },
];




export default events;