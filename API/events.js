import { isBefore, isAfter, isEqual } from 'date-fns';

export const getUpcomingEvents = (allEvents) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
    const upcomingEvents = allEvents.filter((event) => {
        return isAfter(event.startDate, currentDate) || isEqual(event.startDate, currentDate);
    });
    return upcomingEvents;
};

export const getPastEvents = (allEvents) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
    const pastEvents = allEvents.filter((event) => {
        return isBefore(event.endDate, currentDate) || isEqual(event.endDate, currentDate);
    });
    return pastEvents;
};

const events = [
    {
        id: '1',
        name: "Nikomedia Kazıları",
        images: [
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        ],
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 32),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman',
        location: {
            city: 'Kocaeli',
            place: 'Kocaeli Arkeoloji Müzesi',
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
                from: 5,
                to: 6
            }
        },
        popularity: 23
    },
    {
        id: '2',
        name: "Umut Uslusoy Band - Birsen Tezer",
        images: [
            "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/umut-uslusoy-band-birsen-tezer-2022525105321.jpg",
        ],
        organizer: "Nilüfer Sanat",
        startDate: new Date(2022, 5, 24),
        endDate: new Date(2022, 5, 27),
        description: "Elektronik müzik çalışmalarını MUTUS mahlasıyla sürdüren Umut Uslusoy, ilk teklisi Asla'yı 2022'nin başında yayınladı. 80'ler Türkçe Pop’unu anımsatan bir melodi ve form içine eklediği 90'lar R&B ve Glitch-Hop türündeki klasik ve modern soundlarla, Türkçe sözlü müziği dünya standartlarında yapmaya ve tek bir müzik türüne bağlı kalmamaya kararlı olduğunu dinleyicilerine gösterdi.",
        category: 'konser',
        location: {
            city: 'Bursa',
            place: 'Balat Atatürk Ormanı',
            center: {
                lat: 40.268538383874564,
                lng: 28.932755975375446
            },
            zoom: 11
        },
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
                from: 5,
                to: 6
            }
        },
        popularity: 35
    },
    {
        id: '3',
        name: "An Epic Symphony & maNga",
        images: [
            "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/an-epic-symphony-manga-2022318133642.jpg",
            "https://pbs.twimg.com/media/EBi0gNvWkAAC1jy.jpg",
            "https://firsat.me/img/big1024/18176_5a5c868f9d43e_1179x662.jpg",
        ],
        organizer: "İstanbul Night Flight",
        startDate: new Date(2022, 5, 24),
        endDate: new Date(2022, 5, 28),
        description: "Events Across Turkey’in bir kült haline gelen uluslararası ödüllü projesi  An Epic Symphony, 24 Haziran 2022’de ülkemizin en önemli rock gruplarından MANGA ‘yı Night Flight Symphony Orchestra eşliğinde yeniden ağırlıyor.",
        category: 'konser',
        location: {
            city: 'Antalya',
            place: 'Antalya Açıkhava',
            center: {
                lat: 36.881875050298774,
                lng: 30.666767553169375
            },
            zoom: 11
        },
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
                from: 5,
                to: 6
            }
        },
        popularity: 40
    },
    {
        id: '4',
        name: "Yüzyüzeyken Konuşuruz",
        images: [
            "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/yuzyuzeyken-konusuruz-2022517183636.jpg",
            "https://www.bursaduysun.com/images/haberler/2021/09/yuzyuzeyken-konusuruz-binlerce-hayranini-costurdu.jpg",
            "https://im.haberturk.com/2022/04/15/ver1650020868/3409545_810x458.jpg",
        ],
        organizer: "Bursa Büyükşehir Belediyesi",
        startDate: new Date(2022, 5, 25),
        endDate: new Date(2022, 5, 30),
        description: "Türkçe alternatif rock sahnesinin en parlayan yıldızlarından, ilk çıktıkları günden bu yana sağlam adımlarla yürüyen, kendini geliştiren, pek çok genç şarkıcıya ilham veren, özgün bir grup Yüzyüzeyken Konuşuruz, gitar ve vokalde Kaan Boşnak, elektrik gitarda Engin Sevik, klavyede Baran Ökmen, bas gitarda Can Tunaboylu ve davulda Can Kalyoncu’dan oluşan kadrosuyla sevenleriyle buluşacak.",
        category: 'konser',
        location: {
            city: 'Bursa',
            place: 'Bursa Kültürpark Açıkhava Tiyatrosu',
            center: {
                lat: 40.196992439939365,
                lng: 29.04154045513275
            },
            zoom: 11
        },
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 75,
                from: 3,
                to: 4
            },
            backRows: {
                price: 50,
                from: 5,
                to: 6
            }
        },
        popularity: 36
    },
    {
        id: '5',
        name: "An Epic Symphony & Hayko Cepkin",
        images: [
            "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/an-epic-symphony-hayko-cepkin-202231813369.jpg",
            "https://im.haberturk.com/2020/07/09/ver1594285052/2738429_1920x1080.jpg",
            "https://cdn1.ntv.com.tr/gorsel/G47ZpEN88kG6o6ao5gLkpQ.jpg?width=1000&mode=crop&scale=both",
        ],
        organizer: "İstanbul Night Flight",
        startDate: new Date(2022, 6, 27),
        endDate: new Date(2022, 6, 29),
        description: "Events Across Turkey’in bir kült haline gelen uluslararası ödüllü projesi An Epic Symphony,  27 Temmuz 2022’de ülkemizin en önemli solistlerinde Hayko Cepkin’i  Night Flight Symphony Orchestra eşliğinde yeniden ağırlıyor.",
        category: 'konser',
        location: {
            city: 'İzmir',
            place: 'İzmir Kültürpark Açıkhava Tiyatrosu',
            center: {
                lat: 38.42857054491143,
                lng: 27.14534063536268
            },
            zoom: 11
        },
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 75,
                from: 3,
                to: 4
            },
            backRows: {
                price: 50,
                from: 5,
                to: 6
            }
        },
        popularity: 60
    },
    {
        id: '6',
        name: "Kral Şakir Macera Dünyası",
        images: [
            "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/kral-sakir-macera-dunyasi-202241415303.png",
        ],
        organizer: "Grafi",
        startDate: new Date(2022, 5, 22),
        endDate: new Date(2022, 6, 31),
        description: "Türkiye’nin ilk çizgi film deneyim alanında eğlence dolu maceralara katılmaya hazır mısınız? Çocuğunuz Kral Şakir çizgi filminin alanlarında 50 dakika sürecek bir maceraya katılırken; Mirket’in laboratuvarında icatlar yapacak, Fil Necati’nin youtube odasında dünyayı kurtaracak fikirlerini anlatacak, Kral Şakir Sokağından geçecek, Bermuda Üçgeni’nde gemiyi korsanlardan kurtaracak ve Korsanlar Adası'nda canavarı yakalayacak. Tüm bu macera süresince yaşadıklarını dilerseniz sizde alanımızın girişinde",
        category: 'tiyatro',
        location: {
            city: 'Ankara',
            place: 'Kral Şakir Macera Dünyası',
            center: {
                lat: 39.84935631500973,
                lng: 32.83479786565272
            },
            zoom: 11
        },
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 30,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 20,
                from: 3,
                to: 4
            },
            backRows: {
                price: 15,
                from: 5,
                to: 6
            }
        },
        popularity: 9
    },
    {
        id: '7',
        name: "An Epic Symphony & Fatma Turgut",
        images: [
            "https://kdaidggt0f3v.merlincdn.net/Uploads/Films/an-epic-symphony-fatma-turgut-24-eylul-2022-202241810133.jpg",
        ],
        organizer: "Grafi",
        startDate: new Date(2022, 8, 24),
        endDate: new Date(2022, 8, 26),
        description: "Events Across Turkey’in bir kült haline gelen uluslararası ödüllü projesi An Epic Symphony, 24 Eylül 2022’de ülkemizin en önemli seslerinden FATMA TURGUT’u Night Flight Symphony Orchestra & Choir eşliğinde ilk kez ağırlıyor.",
        category: 'konser',
        location: {
            city: 'İstanbul',
            place: 'Harbiye Cemil Topuzlu Açıkhava Sahnesi',
            center: {
                lat: 41.04622300897801,
                lng: 28.989997910985775
            },
            zoom: 11
        },
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 80,
                from: 3,
                to: 4
            },
            backRows: {
                price: 60,
                from: 5,
                to: 6
            }
        },
        popularity: 40
    },
    {
        id: '8',
        name: "Event Without Image",
        images: [
        ],
        organizer: "Grafi",
        startDate: new Date(2022, 5, 18),
        endDate: new Date(2022, 5, 22),
        description: "Events Across Turkey’in bir kült haline gelen uluslararası ödüllü projesi An Epic Symphony, 24 Eylül 2022’de ülkemizin en önemli seslerinden FATMA TURGUT’u Night Flight Symphony Orchestra & Choir eşliğinde ilk kez ağırlıyor.",
        category: 'konser',
        location: {
            city: 'İstanbul',
            place: 'Harbiye Cemil Topuzlu Açıkhava Sahnesi',
            center: {
                lat: 41.04622300897801,
                lng: 28.989997910985775
            },
            zoom: 11
        },
        ticketPrice: {
            isItPaid: true,
            frontRows: {
                price: 100,
                from: 1,
                to: 2
            },
            middleRows: {
                price: 80,
                from: 3,
                to: 4
            },
            backRows: {
                price: 60,
                from: 5,
                to: 6
            }
        },
        popularity: 8
    },
    {
        id: '25',
        name: "Nikomedia Kazıları",
        images: [
            "https://izmit.bel.tr/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-02-at-14.06.51-640x640.jpeg",
        ],
        organizer: "T.C. İzmit Belediyesi",
        startDate: new Date(2022, 5, 30),
        endDate: new Date(2022, 5, 32),
        description: "İzmit Belediye Başkanı Av. Fatma Kaplan Hürriyet’in öncülüğüyle kurulan Nikomedia Kazıları İzmit Kültür, Sanat ve Eğitim Vakfı Lansmanı ile “Kayıp Roma Başkenti Nikomedia’nın Renkli Rölyefleri” adlı kitabın tanıtımı 10 Haziran’da Kocaeli Arkeoloji Müzesi’nde yapıldı. Programda Nikomedia’nın renkli rölyefleri ilk kez görücüye çıktı.",
        category: 'lansman',
        location: {
            city: 'Kocaeli',
            place: 'Kocaeli Arkeoloji Müzesi',
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
                from: 5,
                to: 6
            }
        },
        popularity: 23
    },
];




export default events;