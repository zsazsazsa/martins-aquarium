import { getFish } from "./scripts/fishData.js"

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""
    const database = getFish()
    for (const fish of database) {
        if (fish.length % 3 === 0) {
            holyFish += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.species}" class="fish_image">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_species">${fish.species}</p>
                    <p class="fish_length">Length: ${fish.length}</p>
                    <p class="fish_location">Location: ${fish.location}</p>
                    <p class="fish_diet">Diet: ${fish.diet}</p>
                </div>
            </article>
        `
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = ""
    const database = getFish()
    for (const fish of database) {
        if (fish.length % 5 === 0) {
            soldierFish += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.species}" class="fish_image">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_species">${fish.species}</p>
                    <p class="fish_length">Length: ${fish.length}</p>
                    <p class="fish_location">Location: ${fish.location}</p>
                    <p class="fish_diet">Diet: ${fish.diet}</p>
                </div>
            </article>
        `
        }
    }
    return soldierFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = ""
    const database = getFish()
    for (const fish of database) {
        if (fish.length % 5 != 0 && fish.length % 3 != 0) {
            regularFish += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.species}" class="fish_image">
                <div class="fish_details">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_species">${fish.species}</p>
                    <p class="fish_length">Length: ${fish.length}</p>
                    <p class="fish_location">Location: ${fish.location}</p>
                    <p class="fish_diet">Diet: ${fish.diet}</p>
                </div>
            </article>
        `
        }
    }
    return regularFish
}