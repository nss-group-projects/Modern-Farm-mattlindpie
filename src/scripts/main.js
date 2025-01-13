import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plants = usePlants()

const harvestedPlants = harvestPlants(plants)

console.log(harvestedPlants)

const catalogHTML = catalog(harvestedPlants)

let plantHTML = document.querySelector("#container")
plantHTML.innerHTML = catalogHTML