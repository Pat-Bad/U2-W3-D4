// creo una const con l'url della api

const myURL = "https://api.pexels.com/v1/search?query=otters";

// la mia key 3Sp9NU47sl0NGG3kzkWS97OXF4mYgC0MG4GbOmdLtsun8yoOzEuI3VkW

//fetch con la key
const load = document.getElementById("loadButton")

load.addEventListener('click', function(){

fetch(myURL, {headers: {
		Authorization: "3Sp9NU47sl0NGG3kzkWS97OXF4mYgC0MG4GbOmdLtsun8yoOzEuI3VkW",
	}})
.then ((response)=>{
    if (response.ok){
        return response.json()
    } else {
        throw new Error ('errore')
    }
})

.then ((pictures)=>{
    console.log(pictures, 'ecco le foto')

    const cardTop = document.querySelectorAll('.card-img-top')


    cardTop.forEach((card)=>{
        card.setAttribute('src', pictures.photos[i].url)
    })
})



.catch((error)=>{console.log('errore!')}
)

})