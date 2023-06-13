export default class HeroService {
    heroes = [
        {
            id: '1',
            name: 'Superman',
            age: 30
        },
        {
            id: '2',
            name: 'Batman',
            age: 30
        },
        {
            id: '3',
            name: 'Goku',
            age: 30
        },
    ];

    getHeroes() {
        return this.heroes
    }

    getHero(id) {
        const hero = this.heroes.find((item) => item.id === id)
        return hero
    }

    createHero(data) {
        console.log({ data })
        this.heroes.push(data)
        return true
    }

    updateHero(id, { name, age }) {
        const hero = this.getHero(id)
        hero.name = name
        hero.age = age

        this.heroes.map((item) => {
            if (item.id === id) {
                return hero
            } else {
                return item
            }
        })
        return true
    }

    deleteHero(id) {
        this.heroes = [...this.heroes.filter((item) => item.id !== id)]
        return true
    }
}