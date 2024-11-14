// creo una const con l'url della api

const myURL = "https://api.pexels.com/v1/search?query=otters";

//prendo il riferimento al button

const load = document.getElementById("loadButton");
//aggiungo l'event listener
load.addEventListener("click", (e) => {
		fetch(myURL, {
			headers: {
				Authorization:
					"3Sp9NU47sl0NGG3kzkWS97OXF4mYgC0MG4GbOmdLtsun8yoOzEuI3VkW",
			},
		}).then((response) => {
			if (response.ok) {
				throw new Error("ERRORE NEL SERVER");
			}
			return response
				.json()

				.then((pictures) => {
					console.log("ECCO LE FOTO", pictures);

					// seleziono la parte delle card dove dovrebbe andare l'immagine

					const cardTop = document.querySelectorAll(".card-img-top");

					// devo ciclare

					cardTop.forEach((card) => {
						// Check if the picture exists at the current index
						if (pictures.photos) {
							// Set the image source dynamically
							card.setAttribute("src", pictures.photos.url);
						}
					});
				});
		});
	})
	.catch((error) => {
		console.log("ERRORE!", error);
	});
