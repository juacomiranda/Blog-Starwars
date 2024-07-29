const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			vehiculos: [],
			planetas: [],
			peopleid: {}, 
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
			]
		},
		actions: {
			getPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(response => response.json())
				.then(result => setStore({personajes:result.results}))
				.catch(err => console.error(err));
			},

			getVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(response => response.json())
				.then(result => setStore({vehiculos:result.results}))
				.catch(err => console.error(err));
			},

			getPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then(result => setStore({planetas:result.results}))
				.catch(err => console.error(err));
			},

			getPeopleId: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(response => response.json())
				.then(result =>	{
					setStore({peopleid:result.result.properties})
					console.log('Nombre:', getStore().peopleid);
				})
				.catch(err => console.error(err));
			},






			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			}
		}
	};
};

export default getState;
