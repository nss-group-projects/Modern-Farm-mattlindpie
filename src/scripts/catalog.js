export const catalog = (harvestedPlants) => {
    const plantCatalog = harvestedPlants.map(plant =>
        `<section class="plant">${plant.type}</section>`
    ).join('\n')
    return plantCatalog
}