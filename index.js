const playersList = document.querySelector('ul');
let players = [];

window.addEventListener('hashchange', function (){
    render();
});

function render(){
   const hash = window.location.hash;
   const id =  hash.slice(1)*1;
   let filtered = players;
   if(id){
    filtered = filtered.filter(function(player){
        return player.id === id;
    });
   }
    
   const html = filtered.map(function(player){
        return`
        <li>
        <h3><a href='#${player.id}'> ${player.name}</a></h3>
        <h5>${player.breed}</h4>
        <img src='${player.imageUrl}'/>
        </li>
        `;
    }).join('');
    playersList.innerHTML = html;
}

  
render();

async function fetchPlayers(){
    const repsonse =  await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-am/players');
    const json = await repsonse.json();
    players = json.data.players;
    render();
}

fetchPlayers();