const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://cdn.mos.cms.futurecdn.net/BgZFhT7piMqXpyzfWrdKyP.jpg"
        },
        {
            name: "Princess",
            species: "Rock Beauty",
            length: 2, 
            location: "Carribean",
            diet: "Omnivore",
            image: "https://reefguide.org/pix/rockbeauty13.jpg"
        },
        {
            name: "Simon",
            species: "Great White Shark", 
            length: 10,
            location: "Carribean",
            diet: "Carnivore", 
            image: "https://www.bigfishexpeditions.com/wp-content/uploads/2023/04/Great-white-shark-diving-002.jpg"
        },
        {
            name: "Paul",
            species: "Barracuda",
            length: 6,
            location: "Carribean",
            diet: "Carnivore",
            image: "https://www.fishi-pedia.com/wp-content/uploads/2019/06/baracuda.jpg"
        },
        {
            name: "Sammy",
            species: "Salmon",
            length: 5, 
            location: "river", 
            diet: "Herbivore", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXNhBtlUj6K24HjTpt6Vs6lDh0ITht8auF9DIy_WvQA&s"
        },
        {
            name: "Rocky",
            species: "Rockfish", 
            length: 6,
            location: "river", 
            diet: "Herbivore", 
            image: "https://www.montereybayaquarium.org/globalassets/mba/images/animals/fishes/rockfish-rw17-091-2.jpg"
        }
    ],
}

export const getData = () => {
    return database.fish.map((fish) => ({...fish}))
}