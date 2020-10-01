<?php

namespace App;

class Home{
    public static function homePage(){

        $loader = new \Twig\Loader\FilesystemLoader('../application/template');
        $twig = new \Twig\Environment($loader, [
            'cache'=> false,
            //'../application/cache'
            'debug' => true,
        ]);
        $twig->addExtension(new \Twig\Extension\DebugExtension());

        
        // render template
        $template = $twig->load('home.html.twig');
        echo $template->render();
    
    }

}
