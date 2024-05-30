const database = {
     fish: [
        {
            name: "Dory",
            species: "Blue Tang",
            length: 2,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://i0.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2016/06/blue-tang-ulm.jpg?ssl=1"
        },
        {
            name: "Salmon",
            species: "Oncorhynchus",
            length: 27,
            location: "Pacific Ocean",
            diet: "Carnivore",
            image: "https://as2.ftcdn.net/v2/jpg/06/13/25/41/1000_F_613254166_jiI7msEIzhqfiexucOHZ9cMI0wAQSFxg.jpg"
        },
        {
            name: "Goldfish",
            species: "Carassius auratus",
            length: 15,
            location: "Freshwater Ponds",
            diet: "Omnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/%E3%83%AF%E3%82%AD%E3%83%B320120701.JPG"
        },
        {
            name: "Tuna",
            species: "Thunnus",
            length: 90,
            location: "Atlantic Ocean",
            diet: "Carnivore",
            image: "https://www.fisheries.noaa.gov/s3//2023-11/750x500-iStock-1334276621.jpg"
        },
        {
            name: "Clownfish",
            species: "Amphiprioninae",
            length: 12,
            location: "Indian Ocean",
            diet: "Omnivore",
            image: "https://image.petmd.com/files/styles/863x625/public/2023-12/clownfish.jpg"
        },
        {
            name: "Catfish",
            species: "Siluriformes",
            length: 45,
            location: "Freshwater Rivers",
            diet: "Omnivore",
            image: "https://tnaqua.org/app/uploads/2023/08/Orig-Blue-Catfish-0012-1200x732-c-default.jpg"
        },
        {
            name: "Bass",
            species: "Micropterus",
            length: 33,
            location: "Lakes",
            diet: "Carnivore",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9x2AvL5CRL6n7Zn3soUX3Q3E21gzCVzmgYQ&s"
        },
        {
            name: "Swordfish",
            species: "Xiphias gladius",
            length: 300,
            location: "Atlantic Ocean",
            diet: "Carnivore",
            image: "https://www.thoughtco.com/thmb/JgiyFwaipkR9JwARdfvMPhMert4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swordfish-jeff-rotman-getty-56a5f8eb5f9b58b7d0df532f.jpg"
        },
        {
            name: "Mackerel",
            species: "Scomber",
            length: 30,
            location: "Atlantic Ocean",
            diet: "Carnivore",
            image: "https://fishingbooker-prod-blog-backup.s3.amazonaws.com/blog/media/2019/05/14152600/Atlantic-Mackerel-1024x683.jpg"
        },
        {
            name: "Perch",
            species: "Perca",
            length: 25,
            location: "Freshwater Lakes",
            diet: "Carnivore",
            image: "https://vtfishandwildlife.com/sites/fishandwildlife/files/images/Learn%20More/VT%20Critters/yellow-perch.png"
        },
        {
            name: "Trout",
            species: "Oncorhynchus mykiss",
            length: 48,
            location: "Rivers",
            diet: "Carnivore",
            image: "https://w2f-assets.tenet.io/uploads/2023/09/rainbow-trout.webp"
        },
        {
            name: "Pufferfish",
            species: "Tetraodontidae",
            length: 18,
            location: "Tropical Seas",
            diet: "Omnivore",
            image: "https://i.natgeofe.com/k/b7a6ee44-f96f-434a-8606-6ae742f6ab23/pufferfish-inflated-closeup.jpg"
        },
        {
            name: "Snapper",
            species: "Lutjanidae",
            length: 60,
            location: "Coral Reefs",
            diet: "Carnivore",
            image: "https://www.sportfishingmag.com/uploads/2021/09/spf0519-redsnapper-01.jpg"
        },
        {
            name: "Grouper",
            species: "Epinephelinae",
            length: 75,
            location: "Warm Oceans",
            diet: "Carnivore",
            image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-19_Queensland_Grouper_-_Robin_Riggs_600_q85.jpg"
        },
        {
            name: "Flounder",
            species: "Paralichthys",
            length: 21,
            location: "Coastal Waters",
            diet: "Carnivore",
            image: "https://www.saltstrong.com/wp-content/uploads/flounder_eyes_jpg.jpg"
        },
        {
            name: "Halibut",
            species: "Hippoglossus",
            length: 150,
            location: "North Atlantic Ocean",
            diet: "Carnivore",
            image: "https://www.fisheries.noaa.gov/s3//dam-migration/900x600-pacific-halibut-noaa.jpg"
        }
    ],
    tips: [
        {
            topic: "Water Temperature",
            text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
        },
        {
            topic: "Feeding",
            text: "Don't overfeed your fish!"
        }, 
        {
            topic: "Playing",
            text: "Remember to take the time to play with your fish friends!"
        }
    ],
    locations: [
        {
            name: "Great Barrier Reef",
            country: "Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
         },
         {
            name: "Carribean",
            country: "North America",
            description: "The Carribean is a subregion of the Americas that includes the Caribbean Sea and its islands, some of which are surrounded by the Caribbean Sea and some of which border both the Caribbean Sea and the North Atlantic Ocean"
         },
         {
            name: "River",
            country: "Found Worldwide",
            description: "A river is a natural flowing watercourse, usually a freshwater stream, flowing on the Earth's land surface or inside caves towards another waterbody at a lower elevation, such as an ocean, sea, bay, lake, wetland, or another river."
         }
    ]
}

export const getFish = () => {
    return database.fish.map((fish) => ({...fish}))
}

export const getTips = () => {
    return database.tips.map((tips) => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map((location) => ({...location}))
}

