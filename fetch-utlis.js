Example: export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    //console.log(url + '/fightingType');
    const resp = await fetch(url);

    const json = await resp.json();

    return json.results;
}