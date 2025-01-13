import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan) {
        for (const crop of row) {
            if (crop === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            if (crop === "Corn") {
                const cornSeeds = createCorn()
                addPlant(cornSeeds)
            }
            if (crop === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
            if (crop === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            if (crop === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            if (crop === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
        }
    }
}