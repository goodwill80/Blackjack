console.log("Start Game!");

$(document).ready(function(){

//constructor to create 52 card objects
function Card (image, suit, number) {
  this.image = image;
  this.suit = suit;
  this.number = number;
}

var diamondA = new Card("<img src='assets/Diamonds 1.png'/>", "diamond", 11); //1
var diamond2 = new Card("<img src='assets/Diamonds 2.png'/>", "diamond", 2); //2
var diamond3 = new Card("<img src='assets/Diamonds 3.png'/>", "diamond", 3); //3
var diamond4 = new Card("<img src='assets/Diamonds 4.png'/>", "diamond", 4); //4
var diamond5 = new Card("<img src='assets/Diamonds 5.png'/>", "diamond", 5); //5
var diamond6 = new Card("<img src='assets/Diamonds 6.png'/>", "diamond", 6); //6
var diamond7 = new Card("<img src='assets/Diamonds 7.png'/>", "diamond", 7); //7
var diamond8 = new Card("<img src='assets/Diamonds 8.png'/>", "diamond", 8); //8
var diamond9 = new Card("<img src='assets/Diamonds 9.png'/>", "diamond", 9); //9
var diamond10 = new Card("<img src='assets/Diamonds 10.png'/>", "diamond", 10); //10
var diamondJ = new Card("<img src='assets/Diamonds 11.png'/>", "diamond", 10); //11
var diamondQ = new Card("<img src='assets/Diamonds 12.png'/>", "diamond", 10); // 12
var diamondK = new Card("<img src='assets/Diamonds 13.png'/>", "diamond", 10); // 13
var clubA = new Card("<img src='assets/Clubs 1.png'/>", "club", 11); // 14
var club2 = new Card("<img src='assets/Clubs 2.png'/>", "club", 2); // 15
var club3 = new Card("<img src='assets/Clubs 3.png'/>", "club", 3); // 16
var club4 = new Card("<img src='assets/Clubs 4.png'/>", "club", 4); //17
var club5 = new Card("<img src='assets/Clubs 5.png'/>", "club", 5); //18
var club6 = new Card("<img src='assets/Clubs 6.png'/>", "club", 6); //19
var club7 = new Card("<img src='assets/Clubs 7.png'/>", "club", 7); //20
var club8 = new Card("<img src='assets/Clubs 8.png'/>", "club", 8); //21
var club9 = new Card("<img src='assets/Clubs 9.png'/>", "club", 9); //22
var club10 = new Card("<img src='assets/Clubs 10.png'/>", "club", 10); //23
var clubJ = new Card("<img src='assets/Clubs 11.png'/>", "club", 10); //24
var clubQ = new Card("<img src='assets/Clubs 12.png'/>", "club", 10); // 25
var clubK = new Card("<img src='assets/Clubs 13.png'/>", "club", 10); //26
var heartsA = new Card("<img src='assets/Hearts 1.png'/>", "hearts", 11); //27
var hearts2 = new Card("<img src='assets/Hearts 2.png'/>", "hearts", 2); //28
var hearts3 = new Card("<img src='assets/Hearts 3.png'/>", "hearts", 3); //29
var hearts4 = new Card("<img src='assets/Hearts 4.png'/>", "hearts", 4); //30
var hearts5 = new Card("<img src='assets/Hearts 5.png'/>", "hearts", 5); //31
var hearts6 = new Card("<img src='assets/Hearts 6.png'/>", "hearts", 6); //32
var hearts7 = new Card("<img src='assets/Hearts 7.png'/>", "hearts", 7); //33
var hearts8 = new Card("<img src='assets/Hearts 8.png'/>", "hearts", 8); //34
var hearts9 = new Card("<img src='assets/Hearts 9.png'/>", "hearts", 9); //35
var hearts10 = new Card("<img src='assets/Hearts 10.png'/>", "hearts", 10); //36
var heartsJ = new Card("<img src='assets/Hearts 11.png'/>", "hearts", 10); //37
var heartsQ = new Card("<img src='assets/Hearts 12.png'/>", "hearts", 10); //38
var heartsK = new Card("<img src='assets/Hearts 13.png'/>", "hearts", 10); //39
var spadesA = new Card("<img src='assets/Spades 1.png'/>", "spades", 11); //40
var spades2 = new Card("<img src='assets/Spades 2.png'/>", "spades", 2); //41
var spades3 = new Card("<img src='assets/Spades 3.png'/>", "spades", 3); //42
var spades4 = new Card("<img src='assets/Spades 4.png'/>", "spades", 4); //43
var spades5 = new Card("<img src='assets/Spades 5.png'/>", "spades", 5); //44
var spades6 = new Card("<img src='assets/Spades 6.png'/>", "spades", 6); //45
var spades7 = new Card("<img src='assets/Spades 7.png'/>", "spades", 7); //46
var spades8 = new Card("<img src='assets/Spades 8.png'/>", "spades", 8); //47
var spades9 = new Card("<img src='assets/Spades 9.png'/>", "spades", 9); //48
var spades10 = new Card("<img src='assets/Spades 10.png'/>", "spades", 10); //49
var spadesJ = new Card("<img src='assets/Spades 11.png'/>", "spades", 10); //50
var spadesQ = new Card("<img src='assets/Spades 12.png'/>", "spades", 10); //51
var spadesK = new Card("<img src='assets/Spades 13.png'/>", "spades", 10); //52


//Game object for the running of the game
var game = {
  player1Score: 0,
  player2Score: 0,
  firstCard: 0,
  turn: 1,
  gameOver: false,
  cards: [
          diamondA, diamond2, diamond3, diamond4, diamond5, diamond6, diamond7, diamond8, diamond9, diamond10,
          diamondJ, diamondQ, diamondK, clubA, club2, club3, club4, club5, club6, club7, club8, club9, club10,
          clubJ, clubQ, clubK, heartsA, hearts2, hearts3, hearts4, hearts5, hearts6, hearts7, hearts8, hearts9,
          hearts10, heartsJ, heartsQ, heartsK, spadesA, spades2, spades3, spades4, spades5, spades6, spades7,
          spades8, spades9, spades10, spadesJ, spadesQ, spadesK
        ],
  aces: [diamondA, clubA, heartsA, spadesA]
};

var playerTurn = 1;
var cover = "<img src='assets/Back.png'/>";

//To always pick the 1st card on deck after shuffle
function card1(){
  console.log(game.firstCard);
  return game.firstCard;
}

//Use to calculate the points each player has accumulated. To determine winners
function cardPoints(){
  console.log(game.cards[game.firstCard]);
  return game.cards[card1()].number;
}

//To pick cards at Random
function shuffle (a) {
 var j, x, i;
 var used = [];
 for (i = a.length; i; i -= 1) {
   j = Math.floor(Math.random() * i);
   x = a[i - 1];
   a[i - 1] = a[j];
   a[j] = x;
 }
}

// Cover all cards or container on reset or start of game.
function coverCards (){
  for (var i = 0; i < table.length; i++) {
  table1[i].prepend(cover);
}}


//Selectors Declaration (JQ)

//Player 1 containers
var play1 = $('.container1');
var table1a = $('#a1');
var table1b = $('#a2');
var table1c = $('#a3');
var table1d = $('#a4');
var table1e = $('#a5');

//Player 2 containers
var play2 = $('.container2');
var table2a = $('#b1');
var table2b = $('#b2');
var table2c = $('#b3');
var table2d = $('#b4');
var table2e = $('#b5');

//Container Array
var table = [table1a, table1b, table1c, table1d, table1e, table2a, table2b, table2c, table2d, table2e];

//Buttons
var start = $('#start');
var hit = $('#hit');
var stand = $('#stand');
var reset = $('#reset');
var player1Score = $('#player1Score');
var player2Score = $('#player2Score');
var instruction = $('#gametitle');


//To Cover all containers upon start or re-start of Game
for (var i = 0; i < table.length; i++) {
  table[i].prepend(cover);
}

//To trigger a end of game if any player exceeded value of 21
function busted (x , y) {
  if (x > 21) {
    instruction.text('Player 2 wins. Try harder next time!');
    alert("Player 2 wins. Player 1 busted!");
  } else if (y > 21) {
    instruction.text('Player 1 wins. Try harder next time!');
    alert("Player 1 wins. Player 2 busted!");
  } else if (x === 21) {
    instruction.text('Player 1 wins. Try harder next time!');
    alert("Player 1 wins!");
  } else if (y === 21) {
    instruction.text('Player 2 wins. Try harder next time!');
    alert("Player 2 wins!");
}
}

//To trigger a win if any player hit 21 points exactly. This will also be used to determine winners on selection of "conclude Game"
function win (x, y) {
  if (x > y || x === 21) {
    instruction.text('Try harder next time!');
    alert("Player 1 wins!");
  } else if (y > x || y === 21) {
    instruction.text('Try harder next time!');
    alert("Player 2 wins!");
  }
}

//This serve as an identifier to show current scores on the scoreboard
function checkScore (player1, player2) {
  player1Score.text('Player 1 Score: ' + player1);
  player2Score.text('Player 2 Score: ' + player2);
}


//GAMEPLAY Functions (Buttons)

shuffle (game.cards);

//Event Listener for Start Button
start.click (function(){
  var select = this.id;
  var firstCard = card1();
  var score1;
  var score2;
  $('.container1 img[src="assets/Back.png"]').remove();
  $('.container2 img[src="assets/Back.png"]').remove();


  table1a.prepend(game.cards[card1()].image); score1 = game.cards[card1()].number;
  console.log(score1);
  shuffle (game.cards);
  table2a.prepend(game.cards[card1()].image); score2 = game.cards[card1()].number;
  console.log(score2);
  shuffle (game.cards);


  instruction.text('Hit it Player 1!');
  $('#start').unbind('click');
  checkScore(score1, score2);

  $('#hit, #stand, #reset').removeClass('disabled');
});


// Event Listener for Hit Button
hit.click (function(){
  console.log($(this).attr('class'));
  if( $(this).hasClass('disabled') ) {
    return false;
  }
  var player1Scored = $('#player1Score').text().substr(15,17);
  var player2Scored = $('#player2Score').text().substr(15,17);
  var score1 = parseInt(player1Scored);
  var score2 = parseInt(player2Scored);
  var aceValue = game.cards[card1()].number;

    if(game.turn === 1){
    $('.container1 img[src="assets/Back.png"]').remove();
    table1b.prepend(game.cards[card1()].image); score1 += game.cards[card1()].number;
    console.log(game.cards[card1()].image);
    shuffle (game.cards);
    instruction.text('Hit it Player 2!');
    game.turn+= 1;

  } else if(game.turn === 2){
    $('.container2 img[src="assets/Back.png"]').remove();
    table2b.prepend(game.cards[card1()].image); score2 += game.cards[card1()].number;
    console.log(game.cards[card1()].image);
    shuffle (game.cards);
    instruction.text('Player 1....Hit or Stand?');
    game.turn+= 1;

  } else if(game.turn === 3){
    $('.container1 img[src="assets/Back.png"]').remove();
    table1c.prepend(game.cards[card1()].image); score1 += game.cards[card1()].number;
    console.log(game.cards[card1()].image);
    shuffle (game.cards);
    instruction.text('Player 2....Hit or Stand?');
    game.turn+= 1;

  } else if (game.turn === 4) {
    $('.container2 img[src="assets/Back.png"]').remove();
    table2c.prepend(game.cards[card1()].image); score2 += game.cards[card1()].number;
    console.log(game.cards[card1()].image);
    shuffle (game.cards);
    instruction.text('Player 1....Hit or Stand?');
    game.turn+= 1;

  } else if (game.turn === 5) {
    $('.container1 img[src="assets/Back.png"]').remove();
    table1d.prepend(game.cards[card1()].image); score1 += game.cards[card1()].number;
    shuffle (game.cards);
    instruction.text('Player 2....Hit or Stand?');
    game.turn+= 1;

  } else if (game.turn === 6) {
    $('.container2 img[src="assets/Back.png"]').remove();
    table2d.prepend(game.cards[card1()].image); score2 += game.cards[card1()].number;
    shuffle (game.cards);
    instruction.text('Player 1....Hit it!');
    game.turn+= 1;

  } else if (game.turn === 7) {
    $('.container1 img[src="assets/Back.png"]').remove();
    table1e.prepend(game.cards[card1()].image); score1 += game.cards[card1()].number;
    shuffle (game.cards);
    instruction.text('Player 2....Hit it');
    game.turn+= 1;

  } else if (game.turn === 8) {
    $('.container2 img[src="assets/Back.png"]').remove();
    table2e.prepend(game.cards[card1()].image); score2 += game.cards[card1()].number;
    shuffle (game.cards);
    instruction.text('Click stand for results');
    game.turn+= 1;

  } checkScore (score1, score2);
    busted (score1, score2);
  }
);

//Event Listener for "Conclude Game" button
stand.click (function(){
  var player1Scored = $('#player1Score').text().substr(15,17);
  var player2Scored = $('#player2Score').text().substr(15,17);
  var score1 = parseInt(player1Scored);
  var score2 = parseInt(player2Scored);
  win (score1, score2);
});

//Event Listener for Reset Button
reset.click(function(){
  window.location.reload();
});

});
