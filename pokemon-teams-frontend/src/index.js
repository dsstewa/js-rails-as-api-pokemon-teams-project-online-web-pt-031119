const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.getElementsByTagName('main')[0];



let fetchTrainers = () => {
    return fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(json => renderTrainer(json));
};

let renderTrainer = (trainers) => {
    for (const trainer of trainers) {
        createTrainer(trainer);
    }
}




let createTrainer = (trainer) => {
     let div = document.createElement("div")
        div.setAttribute('class','card')
        div.setAttribute('data-id',`${trainer.id}`)
  
     let p = document.createElement("p")
        p.innerText = trainer.name
  
     let btn = document.createElement("button")
        btn.setAttribute('data-trainer-id',`${trainer.id}`)
        btn.innerText= "Add Pokemon"
        btn.addEventListener("click", addPokemon)
     
     let ul = document.createElement("ul")
     
     for (const poke of trainer.pokemons) {
         ul.appendChild(createPokemon(poke))
     }
     
     div.append(p)
     div.appendChild(btn)
     div.appendChild(ul)
     main.append(div)
    
         //add pokemon data here
        //btn.addEventListener("click", updateLikes

}

let createPokemon = (pokemon) => {
    
    let li = document.createElement("li")
        li.innerHTML = `${pokemon.nickname} (${pokemon.species})`
        li.setAttribute("id", `p${pokemon.id}`)
    let btn = document.createElement("button")
        btn.setAttribute('class','release')
        btn.setAttribute('data-pokemon-id',`${pokemon.id}`)
        btn.innerText= "Relese"
        btn.addEventListener("click", deletePokemon)
    li.appendChild(btn)
    
    return li
}

let deletePokemon = (data) => {
    id = data.target.dataset.pokemonId
    url = `http://localhost:3000/pokemons/${id}`
    const configObject = {
        method: 'DELETE'
    }

    return fetch(url,configObject)
           .then(resp => resp.json())
           .then(function(data2) {
            li = document.getElementById(`p${data2.id}`)
            li.remove()
           })
}

let addPokemon = (trainer) => {
     const id = trainer.target.dataset.trainerId
      url = `http://localhost:3000/pokemons/`
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "trainer_id" : `${id}`
        })
    }


    return fetch(url,configObject)
           .then(resp => resp.json())
           .then(function(data2) {
               debugger
            li = document.getElementById(`p${data2.id}`)
            li.remove()
           })
   
 

}