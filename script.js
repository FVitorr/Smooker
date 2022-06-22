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

let father = document.getElementById("banner-emphasis");
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
function createProdut(urlImg,description,valuer,checked = 0,votes="(0 Avaliação)"){
    let div_product_emphasis = createDiv('class',"product_emphasis");
    let img = createImg("src",urlImg);
    let p = document.createElement("p");
    p.innerHTML = description;
    let h6 = document.createElement("h6");
    h6.innerHTML = "R$ " + valuer.toFixed(2).toString().replace(".", ",");
    let ul = document.createElement("ul");
    for (let j = 0 ; j < 5; j++){
        let li = document.createElement("li");
        let i = document.createElement("i");
        if (j < checked){
            i.setAttribute('class','fa-solid fa-star checked');
        }else{
            i.setAttribute('class','fa-solid fa-star');
        }
        li.appendChild(i);
        ul.appendChild(li);
    }
    let spam = document.createElement("spam");
    spam.setAttribute("class","qtd_aval");
    spam.innerHTML='( '+ votes + ' Avaliações)';
    
    let button = document.createElement("button");
    button.setAttribute("class","btn");
    button.innerHTML="Comprar Agora";
    
    let emphasis = [img,p,h6,ul,spam,button]
    for (let j = 0; j < emphasis.length ;j++){
        div_product_emphasis.appendChild(emphasis[j]);
    }
    return div_product_emphasis

}
father = document.getElementById("banner-emphasis");


//Array Para servir como banco de dados e redenrizar arquivos na tela
let bd = [
    ['https://t4.ftcdn.net/jpg/02/57/72/69/360_F_257726951_n0gIjSVw93lpvdH8UJDooMltieeSXfcB.jpg',
    'Narguilé com base luminosa e lâmpada para barra de disco',140.50,4,12],
    ['https://cdn.awsli.com.br/1228/1228269/arquivos/pod-descartavel-maskking-1000-puff-0nicotina.jpg',
    'Pod descartável Maskking High Pro',59.90,4,12],
    ['https://http2.mlstatic.com/D_NQ_NP_741492-MLB49295311460_032022-O.webp',
    'Dichava Triturador Caveira Bronze',28.50,5,14],
    ['https://www.vapereletronico.com/wp-content/uploads/2020/02/vape-vaporesso-sky-solo-plus.jpg',
    'Vap lite recarregável brinde 1 essência',110.99,5,41],
    ['https://www.vapereletronico.com/wp-content/uploads/2021/06/vape-descartavel-vfun-com-led.jpg',
    'Pod descartáveis Vfun 1000 Puffs RGB',79.98,5,100],
    ['https://www.clubedovapor.com/modules/ph_simpleblog/covers/9.jpg',
    'JUICE MR. FREEZE 100ML, 10 Sabores',35.50,5,34],
    ['https://ae01.alicdn.com/kf/H5eb366b8751d42c58097bb01a1eec7f4g/Genu-no-zippo-leo-isqueiro-cobre-prova-de-vento-prata-3d-cr-nio-armadura-cigarro-querosene.jpg_Q90.jpg_.webp',
    'Isqueiro caveira antigo vintage a gás',114.50,5,231],
    ['https://ae01.alicdn.com/kf/HTB14GdHMkPoK1RjSZKbq6x1IXXaB/Camiseta-alien-gena-i-come-in-paz-camiseta-masculina-de-alta-qualidade-com-espa-onave-para.jpg_Q90.jpg_.webp',
    'Camiseta alienígena i come in paz',72.81,5,12]];
div_conteiner = createDiv('class',"container");
var i;
for (i = 0; i < 4; i++){
    div_product_emphasis = createProdut(bd[i][0],bd[i][1],bd[i][2],bd[i][3],bd[i][4])
    div_conteiner.appendChild(div_product_emphasis);
}
var div_conteiner2 = createDiv('class',"container");
for (i = 4; i < 8; i++){
    div_product_emphasis = createProdut(bd[i][0],bd[i][1],bd[i][2],bd[i][3],bd[i][4])
    div_conteiner2.appendChild(div_product_emphasis);
}
father.appendChild(div_conteiner);
father.appendChild(div_conteiner2);

