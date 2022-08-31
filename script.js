var cards = document.querySelectorAll('.card');
let cardName1 = '';
let started = false;
let startDate = new Date;
let gameOver = false;
let pictures = [
  'cat.jpg',
  'cat.jpg',
  'dog.jpg',
  'dog.jpg',
  'monkey.jpg',
  'monkey.jpg',
  'horse.jpg',
  'horse.jpg'
];
let cardCount = 8;


[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    if (!started) {
      started = true;
      startDate = new Date;
    }
    card.classList.toggle('is-flipped');
    if (cardName1 == '') {
    cardName1 = card.getElementsByClassName('card__face--back')[0].getAttribute('src');
    } else if (cardName1 == card.getElementsByClassName('card__face--back')[0].getAttribute('src')) {
       [...document.getElementsByClassName('is-flipped')].forEach((element)=> {
        setTimeout(() => {
          element.classList.add('hidden');
          if (document.getElementsByClassName('hidden').length == document.getElementsByClassName('card').length) {
            let endDate = new Date;
            let seconds = parseInt(((endDate - startDate) / 1000) % 60);
            if (!gameOver) {
            gameOver = true;
            alert('You win! Result is ' + seconds + ' seconds');
            }
         }
        }, 1000);   
       });
       cardName1 = ''; 
       
    } else {
        [...document.getElementsByClassName('is-flipped')].forEach((element)=> {
          setTimeout(() => {
            element.classList.toggle('is-flipped');
          }, 1000);
            
           }) ;
           cardName1 = '';
    }

  });
  let i = getRandomInt(cardCount);
  card.getElementsByClassName('card__face--back')[0].setAttribute('src', pictures[i]); 
  pictures.splice(i, 1);
  cardCount -= 1;
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}