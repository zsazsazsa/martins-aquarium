import { getData } from './fishData.js'

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = ""
    const database = getData()
    for( const fish of database ) {
        fishHTML += `
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
    return fishHTML
};