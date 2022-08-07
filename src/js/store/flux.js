import { useParams } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			// cardsRow component States (store an array of all characters)
			people: [],
			location: [],
			// learnMorePeople component States (store the object of one specific person)
			person: {},
			// learnMoreLocation component States (store the object of one specific place)
			place: {},
			// episodeListOnLearnMorePeople component states (store the list of name of episodes)
			episode: [],
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
			fetchPerson: (params) => {
				fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
				.then((resp) => resp.json())
				.then(data => {setStore({person: data})})
				.catch(err => console.error(err))
			},
			//learnMorePeople component functions
			fetchPlace: (params) => {
				fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
				.then((resp) => resp.json())
				.then(data => {setStore({place: data})})
				.catch(err => console.error(err))
			},
			// episodeListOnLearnMorePeople component functions
			fetchEpisodeName: () => {
				fetch({episode})
				.then((response) => response.json())
				.then(data => {setStore({episode: data.name})
				})
			}

		}
	};
};

export default getState;
