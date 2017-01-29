var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;
var timer;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('.destaque img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function() {
	console.log("sndaij");
  if (controle.className == 'pause') {
    clearInterval(timer);
    controle.className = 'play';
    console.log("sndaijasdddasd");
  } else {
    timer = setInterval(trocaBanner, 4000);
    controle.className = 'pause';
    console.log("sndsdadasdadavrfeert");
  }

  return false;
};