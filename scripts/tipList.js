import { getTips } from "./fishData.js";

export const tipList = () => {
    let tipsHTML = "<h2>Tips:</h2>"
    const tips = getTips()

    for (const tip of tips) {
        tipsHTML += `
            <ul class="tips">
                <li class="tip">
                    <p>${tip.topic}:</p>
                    <p>${tip.text}</p>
                </li>
            </ul>
        `
    }

    return tipsHTML
}