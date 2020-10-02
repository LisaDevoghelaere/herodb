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
    // Page Fiche
    $router->map('GET', '/', function () {
        \App\Fiche::homePage();
    });

    // Page fiche
    // $router->map('GET', '/fiche[:ann_unique_id]', function ($ann_unique_id){
    //         //test if unique_id exists
    //     if((!\App\Annonce::Exists($ann_unique_id))||(\App\Annonce::IsValidated($ann_unique_id))){
    //         header('Location: /');
    //     }
    


//         //render template
//         $twig = new Twig('annonce.html.twig');
//         $twig->render([
//                 'variable' => $variable->data[0],
//                 'id' => $id,
//                 // 'serveur_uri' => SERVER_URI  
//         ]);
        
//     // });
    
   
// Lancer les map du routeur
$match = $router->match();
if ($match !== null) {
call_user_func_array($match['target'], $match['params']);
}