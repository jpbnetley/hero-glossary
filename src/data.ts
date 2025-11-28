export const heroDB = [
    {
        heroName: 'Dead Pool',
        id: 69
    },
    {
        heroName: 'Bat Man',
        id: 420
    },
    {
        heroName: 'Spider Man',
        id: 12
    },
]

window.localStorage.setItem('heroes', JSON.stringify(heroDB))
