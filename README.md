# herodb
Une application qui permet de voir une fiche sur un super héros à partir d'un formulaire de recherche

https://superheroapi.com/?ref=public-apis


https://superheroapi.com/api/10223722812199901
https://superheroapi.com/api/10223722812199901/search/batman

tuto :
https://blog.shevarezo.fr/post/2019/10/09/superhero-api-tout-savoir-super-heros-super-vilains#:~:text=L'utilisation%20de%20Super%20Hero,pas%20d'alternatives...
user_id = 10223722812199901

<div class="row">
    <h2 class="col-12">{{ hero-name }}</h2>
  </div>
  <div class="row">
    <div class="part-left col-lg-4 col-md-4 col-sm-12 col-12">
      <div class="div-img-hero">
        <img src="{{ img-hero }}" alt="">
      </div>
      <div class="alignment">
        <h3 class="">{{ alignment }}</h3>
      </div>
    </div>
    <div class="part-right  col-lg-8 col-md-8 col-sm-12 col-12">
      <div class="powerstats">
      <!-- "powerstats": {
            "intelligence": "63",
            "strength": "32",
            "speed": "50",
            "durability": "100",
            "power": "89",
            "combat": "100"-->
          
      </div>
      <div class="hero-identity"> 
        <!--full-name": "Logan",
        "alter-egos": "No alter egos found.",
        "aliases": Weapon X
      place-of-birth": "Alberta, Canada",
            "first-appearance": "Incredible Hulk Vol. 2 #180",
            "publisher
        "work": {
            "occupation": "Adventurer, instructor, former bartender, bouncer, spy, government operative, mercenary, soldier, sailor, miner",
            "base": "Xavier Institute, Salem Center, Westchester County, New York; Avengers Tower, New York City"
          },
          "connections": {
            "group-affiliation": "X-Men, formerly Horsemen of Apocalypse, Fantastic Four, Secret Defenders, Clan Yashida, Department H, Alpha Flight, Department K, Team X, Team_Weapon_X, Devil's Brigade, Canadian Army",
            "relatives": "John Howlett Sr. (father, deceased), Elizabeth Howlett (mother, deceased), John Howlett Jr. (brother, allegedly deceased), Viper (ex-wife), Amiko (foster daughter), Erista (son), X-23 (clone)"
          }--> </div>
      <div class="hero-appearance"> 
        <!--"gender": "Male",
        "race": "Mutant",
        "height": [
          "5'3",
          "160 cm"
        ],
        "weight": [
          "300 lb",
          "135 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Black"-->
      </div>
    </div>
  </div>