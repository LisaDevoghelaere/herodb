console.log('coucou');
const heroInput = document.getElementById('heroinput');


function getBatman(search){
//     console.log('je suis ton père');
const identityCard = document.getElementById('identity-cards');
//     //requête ajax
const xhr = new XMLHttpRequest();
xhr.onreadystatechange  = function(){
    if (this.readyState == 4 && this.status == 200){
        identityCard.innerHTML = xhr.responseText;
    }
};

xhr.open('POST', '/search', true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("search=" + search);
}

heroInput.addEventListener('input', ()=>{
    const search = heroInput.value;

    getBatman(search);
});
// window.onload = getBatman;