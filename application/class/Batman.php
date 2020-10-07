<?php

namespace App;
//Ici la fonction pour appeler l'API SuperHéro et récupérer le JSON
class Batman
{
    public static function callBatman()
    {
        //S'il y a une recherche de lancée
        if(isset($_POST['search'])){
            $search = $_POST['search'];
            // echo $search;
        }
        //le chemin vers l'API contenant la variable correspondant à l'entrée de la recherche
        $chemin ='https://superheroapi.com/api/10223722812199901/search/'.$search;
        // Récupération du json grâce à file_get_content
        $json = file_get_contents($chemin);
        // on décode le json et le stock dans une variable pour le rendre utilisable sur twig
        $parsed_json = json_decode($json, true);
        
        //render template (on va charger les information dans une page dédiées qui elle même sera chargée dans une div de home.html.twig)
        //auparavant j'ai essayé de faire un rendre dans home.html.twig et me suis rendue compte que la totalité de la page home se rechargeait dans la div prévu pour les ID-CARD de super-héros
        $twig = new Twig('identity-card.html.twig');
        
         echo $twig->render(array(
                'values'=>$parsed_json 
                )
        );
    }
}