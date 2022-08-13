import { useParams } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// cardsRow component States (store an array of all characters)
			people: [],
			location: [],
			// learnMorePeople component States (store the object of one specific person)
			person: {},
			// learnMoreLocation component States (store the object of one specific place)
			place: {},
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			// cardsRow component functions
			fetchPeople: () => {
				fetch("https://rickandmortyapi.com/api/character")
				.then((response) => response.json())
				.then(data => {setStore({people: data.results})
				})
			}, 
			fetchLocations: () => {
				fetch("https://rickandmortyapi.com/api/location")
				.then((response) => response.json())
				.then(data => {setStore({location: data.results})
				})
			},
			//learnMorePeople component functions
			fetchPerson: async (params) => {
				const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
				const data = await response.json();
				setStore({person: data})
				if(data){
					return true
				} else {
					return false
				}
			},
			//learnMorePeople component functions
			fetchPlace: async (params) => {
				const response = await fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
				const data = await response.json()
				setStore({place: data})
				if(data){
					return true
				} else {
					return false
				}
			},
		}
	};
};

export default getState;
