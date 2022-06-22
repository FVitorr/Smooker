/*Controle do carrosel*/
let count = 1
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImg();
},5000);

function nextImg(){
    count++;
    if (count > 5 ){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

/* Criar produto de destaque*/

let father = document.getElementById("container_");
function createDiv(attribute,value){
    let div = document.createElement("div");
    div.setAttribute(attribute,value);
    return div;
}
function createImg(attribute,value){
    let div = document.createElement("img");
    div.setAttribute(attribute,value);
    return div;
}
let valuer = 25.00
let div_conteiner = createDiv('class',"container");
function createProdut(urlImg,description,valuer,checked=''){
    let div_product_emphasis = createDiv('class',"product_emphasis");
    let img = createImg("src",urlImg);
    let p = document.createElement("p");
    p.innerHTML = description;
    let h6 = document.createElement("h6");
    h6.innerHTML = "R$" + parseFloat(valuer);
    let ul = document.createElement("ul");
    for (let j = 0 ; j < 5; j++){
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.setAttribute('class','fa-solid fa-star');
        li.appendChild(i);
        ul.appendChild(li);
    }
    let spam = document.createElement("spam");
    spam.setAttribute("class","qtd_aval");
    spam.innerHTML="(1000 votes)"
    
    let button = document.createElement("button");
    button.setAttribute("class","btn");
    button.innerHTML="Comprar Agora";
    
    let emphasis = [img,p,h6,ul,spam,button]
    for (let j = 0; j < emphasis.length ;j++){
        div_product_emphasis.appendChild(emphasis[j]);
    }
    return div_product_emphasis;
}
function layout_emphasis (urlImg,description,valuer,checked=''){
    let div_product_emphasis = createProdut(urlImg,description,valuer,checked='')
    div_conteiner.appendChild(div_product_emphasis);
    father.appendChild(div_conteiner);
}
for (let i =0 ; i < 4;i++){
    layout_emphasis('https://t4.ftcdn.net/jpg/02/57/72/69/360_F_257726951_n0gIjSVw93lpvdH8UJDooMltieeSXfcB.jpg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    valuer,'checked');
}



