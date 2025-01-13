export const harvestPlants = (plants) => {
    const seeds = []
    for (const plant of plants) {
        let cropOutput = plant.output
        if (plant.type === "Corn") {
            for (var i = 0; i < cropOutput / 2; ++i) {
                seeds.push(plant)
            }
        } else {
            for (var i = 0; i < cropOutput; ++i) {
                seeds.push(plant)
            }
        }
    }
    return seeds
}