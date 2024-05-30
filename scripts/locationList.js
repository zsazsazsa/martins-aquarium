import { getLocations } from "./fishData.js";

export const locationList = () => {
    let locationHTML = "<h2>Locations:</h2>"
    const locations = getLocations()

    for (const location of locations) {
        locationHTML += `
            <article class="locations">
                <section class="location">
                    <h3>${location.name}</h3>
                    <p>Country: ${location.country}</p>
                    <p>Description: ${location.description}</p>
                </section>
            </article>
        `
    }
    return locationHTML
}