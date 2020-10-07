<?php

namespace App;

class Batman
{
    public static function callBatman()
    {
        if(isset($_POST['search'])){
            $search = $_POST['search'];
            // echo $search;
        }
        $chemin ='https://superheroapi.com/api/10223722812199901/search/'.$search;
        $json = file_get_contents($chemin);
        // echo $chemin;
        $parsed_json = json_decode($json, true);
  
              //render template
        $twig = new Twig('identity-card.html.twig');
         echo $twig->render(array(
                'values'=>$parsed_json 
                )
        );
    }
}