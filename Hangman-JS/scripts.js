window.onload = function () {

  var name = prompt("Enter your name");
  var player = name.toUpperCase();
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var categories;
  var chosenCategory;
  var word;
  var guess;
  var guesses = [];
  var lives;
  var counter;
  var space;

  var showLives = document.getElementById("mylives");
  console.log(showLives); //show element
  var showCatagory = document.getElementById("catagory");
  console.log(showCatagory)


 buttons = function () {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };


  selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Food names";
    }
    else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is vijay Films";
    }
    else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities in tamil nadu";
    }
  };


  result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] == "-") {
        guess.innerHTML = "-";
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives == 0) {
      // alert("Oops "+player+" please follow like HANGMAN")
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        alert("CONGRATULATIONS  !!! "+player+" YOU WON...")
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);

      }
    }
  };




  check = function () {
    list.onclick = function () {
      guess = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter = counter + 1;
          console.log(counter);
        }
      }
      var j = word.indexOf(guess);
      if (j == -1) {
        lives = lives - 1;
        comments();
        show();
      } else {
        comments();
      }
    };
  };

  show = function () {
    if (lives == 6) {
      var a = document.createElement("img");
      a.src = "hangman0.png";
      var p = document.getElementById("hangImg");
      p.appendChild(a);
    }
    else if(lives==5){
      
      var b = document.createElement("img");
      b.src = "hangman1.png";
      var q = document.getElementById("hangImg1");
      q.appendChild(b);
    }
    else if(lives==3){
      
      var c = document.createElement("img");
      c.src = "hangman2.png";
      var r = document.getElementById("hangImg2");
      r.appendChild(c);
    }
    else if(lives==0){
      
      var d = document.createElement("img");
      d.src = "hangman3.png";
      var s = document.getElementById("hangImg3");
      s.appendChild(d);
    }
  }



  play = function () {
    categories = [
      ["biriyani", "pongal", "noodles", "dosa", "chapathi", "thair-vadai", "paani-poori"],
      ["master", "theari", "gilli", "kaththi", "jilla"],
      ["madurai", "vellore", "trichy", "tuticorin", "chennai", "coimbatore"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    console.log(word);
    buttons();
    guesses = [];
    lives = 7;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  };

  play();

  document.getElementById("reset").onclick = function () {
    setInterval(function () {
      document.location.reload();
    }, 100)
  };


};


