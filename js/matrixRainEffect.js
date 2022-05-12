// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = "01100101010101101010101100110010101010110101010110寿司推薦レシピ 巻き寿司、にぎりにも挑戦作って楽しい、食べてうれしい♪おもてなしにもぴったりです寿司推薦レシピ0110010101010110101010110011001010101011010101011001100101010101101010101100110010101010110101010110れしい♪おもてなしにもぴったりです寿司推薦レシピ 1,40110010101010110101010110011001010101011010101011001100101010101101010101100110010101010110101010110011001010101011010101011001100101010101101010101100110010101010110101010110お寿司のアイデア盛りだくさんちらし寿司や巻き寿司、にぎりにも挑戦作って楽しい、食べてうれしい♪おもてなしにもぴったりです0110010101010110101010110";
letters = letters.split('');

// Setting up the columns
var fontSize = 13,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize < canvas.height * 100 && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);