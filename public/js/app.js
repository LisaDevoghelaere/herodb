//variable pour l'input de recherche
const heroInput = document.getElementById('heroinput');


function getBatman(search){
//console.log('je suis ton père');
//dans cette variable on cible la div dans laquelle on va venir charger les cartes
const identityCard = document.getElementById('identity-cards');
 //requête ajax
const xhr = new XMLHttpRequest();
xhr.onreadystatechange  = function(){
    if (this.readyState == 4 && this.status == 200){
        identityCard.innerHTML = xhr.responseText;
         // -----------------Graphique des stats------------------
        let ctx = document.getElementById('graphic').getContext('2d');
        let myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                // "colones":
                labels: ['Intelligence', 'Strenght', 'Speed', 'Durability', 'Power', 'Combat'],
                // "lignes":
                datasets: [{
                    label: 'Stat Area',
                    backgroundColor: 'rgb(255, 99, 132, 0.5)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [88, 100, 88, 95, 100, 75]
                }]
            },
            options: {
                legend:{
                    display: false,
                },
                gridLines: {
                    display: false
                },
                scale: {
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }

};
//méthode, chemin (ici route "search" dans l'index.php), true
xhr.open('POST', '/search', true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//on envoi la requête avec en variable cer qui est entré (ici) dans l'input 
xhr.send("search=" + search);
}
//écoute sur l'input, à chaque lettre frappée on lance la requête
heroInput.addEventListener('input', ()=>{
    const search = heroInput.value;
    //on lance la fonction avec la requête ajax pour lancer la recherche sur l'API
    getBatman(search);

   
console.log('coucou');

});
// window.onload = getBatman;

