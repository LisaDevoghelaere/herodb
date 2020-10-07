<?php


require '../vendor/autoload.php';
use App\Twig;
use App\Home;

// Le routeur
// créer une instance
$router = new AltoRouter();


    // Page home
    $router->map('GET', '/', function () {
        \App\Home::homePage();
    });
    //Route pour l'API
    $router->map('POST', '/search', function () {
        \App\Batman::callBatman();
    });

   
// Lancer les map du routeur
$match = $router->match();
if ($match !== null) {
call_user_func_array($match['target'], $match['params']);
}