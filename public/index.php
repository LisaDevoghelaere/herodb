<?php


require '../vendor/autoload.php';
use App\Twig;
use App\Home;

// // Le routeur
// $uri = $_SERVER['REQUEST_URI'];
// créer une instance
$router = new AltoRouter();
// // projet dans sous dossier
//chemin du projet
// $router->setBasePath('');

// echo 'coucou';

    // Page home
    $router->map('GET', '/', function () {
        \App\Home::homePage();
    });
    //Route pour l'API
    $router->map('POST', '/search', function () {
        \App\Batman::callBatman();
    });
    // $value= new \App\Batman();
    // $values = $value -> callBatman();


    //     //render template
    //     $twig = new Twig('home.html.twig');
    //     $twig->render([
    //             'values' => $values
                
    //             // 'serveur_uri' => SERVER_URI  
    //     ]);
        
    // });
    
   
// Lancer les map du routeur
$match = $router->match();
if ($match !== null) {
call_user_func_array($match['target'], $match['params']);
}