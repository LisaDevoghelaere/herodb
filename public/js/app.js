// console.log('coucou');
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
});
// window.onload = getBatman;