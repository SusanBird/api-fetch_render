// import functions
import { getPokedex } from './fetch-utils.js';

// grab DOM elements
const template = document.querySelector('#template');
// validate with console.log(template); 
const selectEl = document.querySelector('select');
// validate with console.log(select); 
const list = document.querySelector('#list');


async function loadPokedex() {
    const pokedex = await getPokedex();
    list.classList.add('pokemon');

    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');

        name.textContent = 'Name: ' + pokemon.pokemon;
        //can add more things here for fun

        type.textContent = 'Type: ' + pokemon.type_1;
        image.src = pokemon.url_image;
        image.alt = pokemon.pokemon;

        list.appendChild(clone);
    }
}



// set event listeners 
selectEl.addEventListener('change', async (event) => {
    const selected = event.target.value;
    console.log('user click');


    if (selected === 'none') {
        const p = document.createElement('p';)

        p.textContent = 'please select an API';

        errorElement.appendChild(p);
    }    
    else if (selected === 'pokemon') {
        list.innerHTML = '';
        await loadPokedex();
    } else if (selected === 'star-wars') {
       // TODO write loadStarWars function
        list.innerHTML = '';
        await loadStarWars();
    }
});
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
