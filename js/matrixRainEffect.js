// Selecionar o Canvas e criar a variável de contexto
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Setar a width e a height do canvas de acordo com o tamanho da janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Letras que serão exibidas
const letters = `01100101010101101010101100110010101010110101010110寿司推薦レシピ 巻き寿司、
にぎりにも挑戦作って楽しい、食べてうれしい♪おもてなしにもぴったりです寿司推薦レシピ
011001010101011010101011001100101010101101010101100110010101010110101010110011001010
1010110101010110れしい♪おもてなしにもぴったりです寿司推薦レシピ 1,401100101010101101010101
100110010101010110101010110011001010101011010101011001100101010101101010101100110010101
01011010101011001100101010101101010101100110010101010110101010110お寿司のアイデア盛りだく
さんちらし寿司や巻き寿司、にぎりにも挑戦作って楽しい、食べてうれしい♪おもてなしにもぴったりです
0110010101010110101010110`;

letters = letters.split("");

// Setar o tamanho da fonte e as colunas, que vão ser o tamanho da width do canvas divido pelo tamanho da fonte
const fontSize = 13;
const columns = canvas.width / fontSize;

// Função "for" que vai setar a quantidade de drops de acordo com o número de colunas
let drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Função responsável por realizar a animação do canvas
const draw = () => {
  ctx.fillStyle = "rgba(0, 0, 0, .1)"; //Seta a cor do background do canvas
  ctx.fillRect(0, 0, canvas.width, canvas.height); //Desenha um retângulo no canvas de acordo com as dimensões da janela

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)]; //Seleciona as letras aleatoriamente
    ctx.fillStyle = "#0f0"; //Seta a cor da fonte das letras
    ctx.fillText(text, i * fontSize, drops[i] * fontSize); //Preenche o canvas de acordo com o valor do texto inserido
    drops[i]++; //Aumenta 1 no valor atual do drops para continuar a execução do programa

    //Multiplicando o valor do canvas por 100 criará um looping "infinito" na função
    if (drops[i] * fontSize < canvas.height * 100 && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
};

// Faz um loop na animação
setInterval(draw, 33);
