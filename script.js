var newsIn = JSON.parse(news);
var imagesIn = JSON.parse(images);
var musicsIn = JSON.parse(musics);

function newsFunc(){
  var t = document.getElementById('wall');
  t.innerHTML='<div class="heading"> Новости </div>';
  for (var i=0; i<newsIn.length; i++){
    t.innerHTML+= ' <div class="newsWall">'+'<span id="data">'+newsIn[i].data+'</span>'+'<span id="name">'+newsIn[i].name+'</span>'+'<br>'+'<span id="text">'+newsIn[i].text+'</span>'+'<br>'+'<img src="'+newsIn[i].image+'">'+'</div>';
  }
};

function imagesFunc(){
  var t = document.getElementById('wall');
  t.innerHTML='<div class="heading"> Изображения </div>';
  for (var i=0; i<imagesIn.length; i++){
    t.innerHTML+= '<a href="#"><div class="imagesWall" onclick="modal('+i+')"><img src="'+imagesIn[i].image+'"></div></a>';
  }
};

function musicsFunc(){
  var t = document.getElementById('wall');
  var r ='<div class="bodyMusics"><div class="heading"> Музыка </div><br><div class="musicsHead"><span class="musicsName"><a onclick="sortName()" href="#">Название</a></span><span class="musicsDate" ><a onclick="sortDate()" href="#">Дата выпуска</a></span><span class="musicsGenre"><a onclick="sortGenre()" href="#">Стиль</a></span></div>';
  for (var i=0; i<musicsIn.length; i++){
    r+= '<a class="musics_1" href="#"><div class="musicsWall" onclick="player('+i+')"><span class="musicsName">'+musicsIn[i].name+'</span><span class="musicsDate">'+musicsIn[i].dateM+'</span><span class="musicsGenre">'+musicsIn[i].genre+'</span><br><audio src="'+musicsIn[i].music+'"></audio></div><a>';
  };
  r+='</div>';
  t.innerHTML=r;
};

function modal(i){
  var modal = document.getElementById("myModal");
  var modalC = document.getElementById("modalContent");
  modalC.innerHTML = '<img class="photo" src="'+imagesIn[i].image+'">';
  modal.style.display = "block";
};

function closeModal(){
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
};

function sortName(){
  musicsIn.sort((a, b) => a.name > b.name ? 1 : -1);
  musicsFunc();
};

function sortDate(){
  musicsIn.sort((a, b) => a.dateM > b.dateM ? 1 : -1);
  musicsFunc();
};

function sortGenre(){
  musicsIn.sort((a, b) => a.genre > b.genre ? 1 : -1);
  musicsFunc();
};

function player(i){
  var t = document.getElementById('player');
  var menu = document.getElementById('menu');
  var wall = document.getElementById('wall');
  t.innerHTML = '<div class="musicsPlayer" ><span class="musicsNamePlayer">'+musicsIn[i].name+'</span><a href="#" class="close_1" onclick="closeMusics()">X<a><br><audio autoplay controls src="'+musicsIn[i].music+'" ></audio></div>';
  menu.style.height = "calc(100% - 70px)";
  menu.style.borderRadius = "15px 0 0 0";
  wall.style.height = "calc(100% - 70px)";
  wall.style.borderRadius = "0 15px 0 0";
  t.style.display = "block";
};

function closeMusics(){
  var t = document.getElementById('player');
  var menu = document.getElementById('menu');
  var wall = document.getElementById('wall');
  t.innerHTML = '';
  menu.style.height = "100%";
  menu.style.borderRadius = "15px 0 0 15px";
  wall.style.height = "100%";
  wall.style.borderRadius = "0 15px 15px 0";
  t.style.display = "none";
};
