console.log('coucou');

// Récupérer les données pour Batman
function getBatman(q){
    console.log('je suis là');
    $.ajax({
        //url de l'api
        url:"https://superheroapi.com/api/10223722812199901/search/batman"+q,
        success:function(res){
            //on génère le html
            document.getElementById("identity-card").innerHTML="<h2>"+res[0].name+"</h2><br><img src='"+res[0].image+"' width='300'/>";
        }
    })
}

// const heroBtn = document.getElementById("herobtn");
// const identityCard = document.getElementById("identity-card");

// function getBatman(){
//     //requête ajax
//     let xhr = new XMLHttpRequest();
//     // methode d'envoi, chemin, true
//     xhr.open('GET', 'https://superheroapi.com/api/10223722812199901/search/batman', true);
//     xhr.send(data);
//     xhr.onreadystatechange = function (){
//          //cf : "XMLHTTPRequest status w3school"
//          if(this.readyState == 4 && this.status == 200){
//             identityCard.innerHTML = xhr.responseText; 
//         }
//     }
// }
// heroBtn.addEventListener('click', function(){
//     affichage();
// })
// window.onload = getBatman();

// (function(){       
	
//     let request = new XMLHttpRequest();

//     request.onreadystatechange = function() { 

//         if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

//             identityCard.innerHTML = xhr.responseText; 

        // } else {

        //     console.log('on est dans le else');

        //     switch(this.readyState) {

        //         case XMLHttpRequest.UNSENT: 

        //             console.log("(UNSENT) L'objet est prêt, mais la méthode open() n'a pas encore été appelée.");

        //             break;

        //         case XMLHttpRequest.OPENED: 

        //             console.log("(OPENED) open() a été appelée.");

        //             break;

        //         case XMLHttpRequest.HEADERS_RECEIVED: 

        //             console.log("(HEADERS_RECEIVED) send() a été appelée, les headers et status sont disponibles au sein de l'objet.");

        //             break;

        //         case XMLHttpRequest.LOADING: 

        //             console.log("(LOADING) Réception en cours, les données reçues sont partielles.");

        //             break;

        //        default: 

        //             console.log("(DONE et status != 200) Réception des données échouée.");

        //     }

//         }

//     };

//     request.open("GET","https://superheroapi.com/api/10223722812199901/search/batman", true);

//     request.setRequestHeader("Content-Type","text/plain");

//     request.send(null);

// })();