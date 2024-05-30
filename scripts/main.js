import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { regularFish, soldierFish, mostHolyFish } from '../sortFish.js'

// Generate the fish list
const holyFish = mostHolyFish()
const soldiers = soldierFish()
const regular = regularFish()
const fishListContainer = document.querySelector("#fishList")

// Generate the care tips
const tipHTML = tipList()
const tipContainer = document.querySelector("#tipList")

// Generate the location list
const locationHTML = locationList()
const locationContainer = document.querySelector("#locationList")

// Render each HTML string to the correct DOM element
fishListContainer.innerHTML = `${holyFish}${soldiers}${regular}`

tipContainer.innerHTML = tipHTML

locationContainer.innerHTML = locationHTML