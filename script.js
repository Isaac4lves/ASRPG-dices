let cache = [];
const dice6 = {
    d1:"<img id='nada' src='source/Nada.png'>",
    d1_txt:" Nada",
    d2:"<img id='nada' src='source/Nada.png'>",
    d2_txt:" Nada",
    d3:"<img id='coruja' src='source/Coruja.png'>",
    d3_txt:" Pressão",
    d4:"<img id='coruja' src='source/Coruja.png'> <img id='cervo' src='source/Cervo.png'>",
    d4_txt:"  Pressão e Adaptação",
    d5:"<img id='coruja' src='source/Coruja.png'> <img id='cervo' src='source/Cervo.png'>",
    d5_txt:"  Pressão e Adaptação",
    d6:"<img id='joaninha' src='source/Joaninha.png'>",
    d6_txt:" Sucesso"
}

const dice10 = {
    d1:"<img id='nada' src='source/Nada.png'>",
    d1_txt:" Nada",
    d2:"<img id='nada' src='source/Nada.png'>",
    d2_txt:" Nada",
    d3:"<img id='coruja' src='source/Coruja.png'>",
    d3_txt:" Pressão",
    d4:"<img id='coruja' src='source/Coruja.png'> <img id='cervo' src='source/Cervo.png'>",
    d4_txt:"  Pressão e Adaptação",
    d5:"<img id='coruja' src='source/Coruja.png'> <img id='cervo' src='source/Cervo.png'>",
    d5_txt:"  Pressão e Adaptação",
    d6:"<img id='joaninha' src='source/Joaninha.png'>",
    d6_txt:" Sucesso",
    d7:"<img id='joaninha' src='source/Joaninha.png'> <img id='joaninha' src='source/Joaninha.png'>",
    d7_txt:" 2x Sucessos",
    d8:"<img id='joaninha' src='source/Joaninha.png'> <img id='cervo' src='source/Cervo.png'>",
    d8_txt:" Sucesso e Adptação",
    d9:"<img id='joaninha' src='source/Joaninha.png'> <img id='coruja' src='source/Coruja.png'> <img id='cervo' src='source/Cervo.png'>",
    d9_txt:" Sucesso, Pressão e Adaptação",
    d10:"<img id='coruja' src='source/Coruja.png'> <img id='coruja' src='source/Coruja.png'> <img id='coruja' src='source/Coruja.png'>",
    d10_txt:" 3x Pressões"
}

const dice12 = {
    d1:"<img id='nada' src='source/Nada.png'>",
    d1_txt:" Nada",
    d2:"<img id='nada' src='source/Nada.png'>",
    d2_txt:" Nada",
    d3:"<img id='coruja' src='source/Coruja.png'>",
    d3_txt:" Pressão",
    d4:"<img id='coruja' src='source/Coruja.png'> <img id='cervo' src='source/Cervo.png'>",
    d4_txt:"  Pressão e Adaptação",
    d5:"<img id='coruja' src='source/Coruja.png'> <img id='cervo' src='source/Cervo.png'>",
    d5_txt:"  Pressão e Adaptação",
    d6:"<img id='joaninha' src='source/Joaninha.png'>",
    d6_txt:" Sucesso",
    d7:"<img id='joaninha' src='source/Joaninha.png'> <img id='joaninha' src='source/Joaninha.png'>",
    d7_txt:" 2x Sucessos",
    d8:"<img id='joaninha' src='source/Joaninha.png'> <img id='cervo' src='source/Cervo.png'>",
    d8_txt:" Sucesso e Adptação",
    d9:"<img id='joaninha' src='source/Joaninha.png'> <img id='coruja' src='source/Coruja.png'> <img id='cervo' src='source/Cervo.png'>",
    d9_txt:" Sucesso, Pressão e Adaptação",
    d10:"<img id='coruja' src='source/Coruja.png'> <img id='coruja' src='source/Coruja.png'> <img id='coruja' src='source/Coruja.png'>",
    d10_txt:" 3x Pressões",
    d11:"<img id='coruja' src='source/Coruja.png'> <img id='cervo' src='source/Cervo.png'> <img id='cervo' src='source/Cervo.png'> <img id='coruja' src='source/Coruja.png'>",
    d11_txt:" 2x Pressões 2x Adaptações",
    d12:"<img id='coruja' src='source/Coruja.png'> <img id='coruja' src='source/Coruja.png'>",
    d12_txt:" 2x Pressões"
}

function clean(e){
    cache = [];
    document.querySelector("#cache").innerHTML = cache;
    document.querySelector(".display").innerHTML = " ";
}

function showDice(src){
    document.querySelector("#cache").innerHTML = cache;
    document.querySelector(".display").innerHTML =" ";
    document.querySelector(".display").innerHTML = src;
  
}

function dice(side){
    var face = "d"+Math.floor(Math.random() * (side - 1) + 1);
    var txt = face+"_txt";
    if(side == 6){ cache.push(dice6[txt]); showDice(dice6[face]); }
    if(side == 10){ cache.push(dice10[txt]); showDice(dice10[face]); }
    if(side == 12){ cache.push(dice12[txt]); showDice(dice12[face]); }

}