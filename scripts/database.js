export const database = {
    heroes:[
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Umbra",
            power: "Shadow Manipulation"
        },
        {
            id: 2,
            name: "Die-Ac",
            power: "Necromancy"
        }

    ] 
    
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}