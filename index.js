//MAIN
var jatekosTomb = [];
var gepTomb = [];
var szint = 1;
var index = 0;
//$("h1").text("level " + szint);
alert("Üdvözöllek az oldalamon ez egy ritmus játék próbáld meg ugyan abban a sorrendben leütni a gombokat ahogy felvillanak(az első szint bárkinek megy :D)");
$("div").click(jatekos);
gepTombFeltoltes();
//gepGombNyomas();
jatekMenet();
//MAIN VÉGE

//FUNCTIONS
function jatekMenet()
{
  gepGombNyomas();
  $("div").click(function(){

      if (szint - 1 === index)
      {
        szint++;
        $("h1").text("level " + szint);
        jatekosTomb = [];
        gepTomb = [];
        index = 0;
        gepTombFeltoltes();
        gepGombNyomas();
      }
      else if (this.id === gepTomb[index])
      {
        //console.log("WIN" + index);
        index++;
      }
      else
      {
        console.log("lose");
        alert("Sajnos Vesztettél Próbáld meg újra :D");
        //jatekMenet();
        jatekosTomb = [];
        gepTomb = [];
        index = 0;
        szint = 1;
        $("h1").text("level " + szint);
        //gepTombFeltoltes();
        //alert("Sajnos Vesztettél Próbáld meg újra :D");
      }
  });
}
function gepGombNyomas()
{
  var i = 0;
  var interval = setInterval(function() {
    if (i <= szint - 1)
    {
      switch (gepTomb[i])
      {
        case "zold": animacio(gepTomb[i]); break;
        case "piros": animacio(gepTomb[i]); break;
        case "sarga": animacio(gepTomb[i]); break;
        case "kek": animacio(gepTomb[i]); break;
      }
      i++;
    }
    else
    {
        clearInterval(interval);
    }
  }, 1500);
}
function gepTombFeltoltes()
{
  //$("h1").text("Level " + szint++);
  for (var i = 0; i < szint; i++)
  {
    var rnd = Math.floor(Math.random() * 4) + 1;
    switch (rnd)
    {
      case 1: gepTomb.push("zold"); break;
      case 2: gepTomb.push("piros"); break;
      case 3: gepTomb.push("sarga"); break;
      case 4: gepTomb.push("kek"); break;
    }
    //console.log(gepTomb);
  }
  //console.log(gepTomb);
}
function jatekos()
{
  var ertek = this.id;

  if(ertek === "zold")
  {
    animacio(ertek);
  }
  else if(ertek === "piros")
  {
    animacio(ertek);
  }
  else if(ertek === "sarga")
  {
    animacio(ertek);
  }
  else
  {
    animacio(ertek);
  }
  jatekosTomb.push(ertek);
  //console.log(jatekosTomb);
}

function animacio(szin)
{
  $("." + szin).animate({ opacity: '0.3' }, "fast");
  $("." + szin).animate({ opacity: '1' }, "fast");
}
