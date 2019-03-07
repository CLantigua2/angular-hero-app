import { Hero } from "./hero"

export const HEROES: Hero[] = []

const names = [
	"Mr. Nice",
	"Narco",
	"Bombasto",
	"Celeritas",
	"Magneta",
	"Rubberman",
	"Dynama",
	"DR IQ",
	"Magma",
	"Tornado",
	"The Lightning",
	"OctaScrew",
	"Reactor",
	"Node Man",
	"Captain Captin",
	"Overload",
	"Dark Hand"
]

for (let i = 0; i < names.length; i++) {
	const newHeros = {
		id: i + 1,
		name: names[i]
	}
	HEROES.push(newHeros)
}
