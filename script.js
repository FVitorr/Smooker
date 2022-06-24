/*Controle do carrosel*/
let count = 1
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImg();
}, 5000);

function nextImg() {
    count++;
    if (count > 5) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

function createDiv(attribute, value) {
    let div = document.createElement("div");
    div.setAttribute(attribute, value);
    return div;
}
function createImg(attribute, value) {
    let div = document.createElement("img");
    div.setAttribute(attribute, value);
    return div;
}

/* Criar produto de destaque*/
function createProdut(urlImg, description, valuer, checked = 0, votes = "(0 Avaliação)", key = 0) {
    let div_product_emphasis = createDiv('class', "product_emphasis");
    let img = createImg("src", urlImg);
    let p = document.createElement("p");
    p.innerHTML = description;
    let h6 = document.createElement("h6");
    h6.innerHTML = "R$ " + valuer.toFixed(2).toString().replace(".", ",");
    let ul = document.createElement("ul");
    /*Criar Estrelas*/
    for (let j = 0; j < 5; j++) {
        let li = document.createElement("li");
        let i = document.createElement("i");
        if (j < checked) {
            i.setAttribute('class', 'fa-solid fa-star checked');
        } else {
            i.setAttribute('class', 'fa-solid fa-star');
        }
        li.appendChild(i);
        ul.appendChild(li);
    }
    let spam = document.createElement("spam");
    spam.setAttribute("class", "qtd_aval");
    spam.innerHTML = '( ' + votes + ' Avaliações)';

    let button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn");
    button.setAttribute("key", key);
    button.setAttribute("value", "Comprar Agora");

    let emphasis = [img, p, h6, ul, spam, button]
    for (let j = 0; j < emphasis.length; j++) {
        div_product_emphasis.appendChild(emphasis[j]);
    }
    return div_product_emphasis
}

//Array Para servir como banco de dados e redenrizar arquivos na tela
let bd = [
    ['https://t4.ftcdn.net/jpg/02/57/72/69/360_F_257726951_n0gIjSVw93lpvdH8UJDooMltieeSXfcB.jpg',
        'Narguilé com base luminosa e lâmpada para barra de disco', 140.50, 4, 12, 0],

    ['https://cdn.awsli.com.br/1228/1228269/arquivos/pod-descartavel-maskking-1000-puff-0nicotina.jpg',
        'Pod descartável Maskking High Pro', 59.90, 4, 12, 1],

    ['https://http2.mlstatic.com/D_NQ_NP_741492-MLB49295311460_032022-O.webp',
        'Dichava Triturador Caveira Bronze', 28.50, 5, 14, 2],

    ['https://www.vapereletronico.com/wp-content/uploads/2020/02/vape-vaporesso-sky-solo-plus.jpg',
        'Vap lite recarregável brinde 1 essência', 110.99, 5, 41, 3],

    ['https://www.vapereletronico.com/wp-content/uploads/2021/06/vape-descartavel-vfun-com-led.jpg',
        'Pod descartáveis Vfun 1000 Puffs RGB', 79.98, 5, 100, 4],

    ['https://www.clubedovapor.com/modules/ph_simpleblog/covers/9.jpg',
        'JUICE MR. FREEZE 100ML, 10 Sabores', 35.50, 5, 34, 5],

    ['https://ae01.alicdn.com/kf/H5eb366b8751d42c58097bb01a1eec7f4g/Genu-no-zippo-leo-isqueiro-cobre-prova-de-vento-prata-3d-cr-nio-armadura-cigarro-querosene.jpg_Q90.jpg_.webp',
        'Isqueiro caveira antigo vintage a gás', 114.50, 5, 231, 6],

    ['https://ae01.alicdn.com/kf/HTB14GdHMkPoK1RjSZKbq6x1IXXaB/Camiseta-alien-gena-i-come-in-paz-camiseta-masculina-de-alta-qualidade-com-espa-onave-para.jpg_Q90.jpg_.webp',
        'Camiseta alienígena i come in paz', 72.81, 5, 12, 7],

    ['https://cdn.awsli.com.br/600x450/1373/1373609/produto/104586386/8347300587.jpg',
        'Kit narguilé anubis completo - Rose', 189.90, 5, 19, 8],

    ['https://www.pontocertotabacaria.com.br/80/narguile-el-nefos-grande-jumbo.jpg',
        'Narguile el nefos grande, trasnparente e dourado', 139.90, 4, 27, 9],

    ['https://cdn.awsli.com.br/600x450/1297/1297202/produto/138735898af2fa03fb0.jpg',
        'Pod descartável 800puffs Blz', 49.90, 4, 34, 10],

    ['https://www.royalvapebr.com/produtos/WhatsApp%20Image%202021-06-22%20at%2012.44.46.jpeg',
        'Pod descartável 1500puffs Ignite', 64.50, 5, 66, 11],

    ['https://cdn.awsli.com.br/600x450/1844/1844927/produto/131336624/992b6a4287.jpg',
        'Pod recarregável Zero', 89.90, 5, 47, 12],

    ['https://cdn.awsli.com.br/300x300/1297/1297202/produto/7824219193f059b374.jpg',
        'Vaporesso Gen s recarregável', 99.90, 5, 54, 13],

    ['https://cf.shopee.com.br/file/d022b0d0fa65e25da1778140fb941038',
        'Kit conjunto 3 capinhas para isqueiro bic', 23.90, 4, 18, 14],

    ['https://www.worldcigars.com.br/lojas/00012461/prod/6310_01.JPG',
        'Isqueiro maçarico Zengaz', 19.90, 5, 7, 15],

    ['https://cf.shopee.com.br/file/33c98702bf2e8d4cb66de5deaa7b52fd',
        'Camisa monalisa fumando', 39.90, 5, 9, 16],

    ['https://img.elo7.com.br/product/original/1BD0FA3/camisa-fuma-camiseta-engracada.jpg',
        'Camisa Puma personalizada, Fuma', 29.90, 5, 27, 17],

    ['https://loja.charutosecachimbos.com.br/fotos/extragrande/38332fe1/cinzeiro-de-resina-para-4-cigarros-caveira-cassino-mini.jpg',
        'Cinzeiro de resina, Caveira Cassino', 27.90, 5, 33, 18],

    ['https://ae01.alicdn.com/kf/H13681194a01545119221b8fd2d1a9e12T/casa-e-jardim-03.jpg',
        'Cinzeiro de astronauta branco e dourado', 34.90, 4, 14, 19],

    ['https://www.churrasqueirabarretao.pt/_images_/Astronauta-cinzeiro-criativo-cinzeiro-para-o-lar-bonito/5_60819.jpeg',
        'Cinzeiro astronauta com tampa', 44.90, 5, 37, 20],

    ['https://cdn.awsli.com.br/600x700/1004/1004168/produto/144464524aacb52c424.jpg',
        'Essência Zomo para pod, 30ml', 14.90, 4, 12, 21],

    ['https://static.cloud-boxloja.com/lojas/qm5vp/produtos/c1609f2f-ebbb-4c5f-8057-6aa808f6998f.png',
        'Essência BLVK 30ml 8 sabores', 18.90, 4, 26, 22],

    ['https://cdn.iset.io/assets/55492/produtos/9541/thumb_350-350-dichavador-de-fumo-de-metal-caveira-6724-b.jpg',
        'Dichava estampado com caveira rosa', 38.50, 4, 15, 23]];

/*renderizar produtos de destaque*/
let qtd_product = 16;
let index = 0;
let div_conteiner = createDiv('class', "container");
let father = document.getElementById("banner-emphasis")
for (let i = 0; i < qtd_product; i++) {
    if (index == 4 || index == 8) {
        father.appendChild(div_conteiner);
        div_conteiner = createDiv('class', "container");
        index = 0;
    }
    let product_emphasis = createProdut(bd[i][0], bd[i][1], bd[i][2], bd[i][3], bd[i][4], bd[i][5])
    div_conteiner.appendChild(product_emphasis);
    index++;
}
father.appendChild(div_conteiner);

function ocult_display(id) {
    document.getElementById(id).style.display = "none";
}
function active_display(id) {
    document.getElementById(id).style.display = "block";
}

/*Search*/
let search = document.getElementById("search-text");
/*let father_ = document.getElementById("banner-search")*/

let father_ = document.createElement("div");
father_.setAttribute("id", "banner-search")


let qtd_search = 0;
let entry_confirm = 1;
search.addEventListener("keyup", function (e) {
    let newPage = new Array;
    if (qtd_search >= 1 && entry_confirm == 0) {
        let container_ = document.getElementById("banner-search").childNodes
        document.getElementById("banner-search").removeChild(container_[0]);
        entry_confirm = 1;
    }
    active_display("banner-emphasis");
    let key = e.which || e.keyCode;
    if (key == 13) {
        entry_confirm = 0;
        ocult_display("banner-emphasis");
        let t = this.value;
        let r = new RegExp(t.toLowerCase(), "g");
        let index = 0;
        console.log(r);
        for (i in bd) {
            let name = bd[i][1].toLowerCase()
            if (name.match(r)) {
                console.log(bd[i])
                /*Separar pagina com a definição do search*/
                newPage[index] = bd[i];
                index++;
            }
        }
        let index_ = 0;
        let div_conteine = createDiv('class', "container");
        for (i = 0; i < newPage.length; i++) {
            if (index_ == 4 || index_ == 8 || index_ == 12) {
                father_.appendChild(div_conteine);
                div_conteine = createDiv('class', "container");
                index_ = 0;
            }
            let product_emphasis = createProdut(newPage[i][0], newPage[i][1], newPage[i][2], newPage[i][3], newPage[i][4], newPage[i][5])
            div_conteine.appendChild(product_emphasis);
            index_++;
        }
        if (newPage.length > 1) {
            father_.appendChild(div_conteine);
        }
        qtd_search++;
        search.value = '';
        document.body.insertBefore(father_, document.getElementById("banner-emphasis"));
        products_key();
    }

})
let list_cart = new Array();
let qtd_cart
let cont = 0;

let qtd_product_cart = new Array();
for (let j = 0; j < bd.length; j++) {
    qtd_product_cart[j] = 0;
}

/*list_cart[0] = [key:qtd]
/* Atualiza a lista de produtos e retorna a chave do produto*/
let cont_upg = 0
let upg;

function products_key() {
    var products = document.getElementsByClassName("btn");
    for (i = 0; i < products.length; i++) {
        products[i].addEventListener("click", function () {
            let key = this.getAttribute('key');
            list_cart[cont] = bd[key];
            qtd_product_cart[key] = parseInt((qtd_product_cart[key])) + 1;
            //console.log(qtd_product_cart)
            upg = upg_qtd_cart(qtd_product_cart);
            cont++;
            //quantidade de produto no carinho

            
            
            var spam = document.getElementsByClassName("qtd_cart");
            //atualizar tags de carrinho quantidade
            for (var j = 0; j < spam.length; j++) {
                spam[j].innerHTML = "(" + qtdIncart(upg) + ")";
            }
            //adc produtos a div cart
            upg_div_cart(key, upg);
            //console.log("carrinho qtd: " + upg.length);
            cont_upg++;
        })
    }
}
products_key();

//obter chave dos produtos adc
/*
function getkey(qtd_product_cart) {
    for (let j = 0; j < qtd_product_cart.length; j++) {
        if (qtd_product_cart[j] > 0) {
            return j;
        }
    }
}*/

function upg_qtd_cart(qtd_product_cart) {
    let qtd_product_ = new Array();
    let cont = 0;

    for (let j = 0; j < qtd_product_cart.length; j++) {
        if (qtd_product_cart[j] > 0) {
            qtd_product_[cont] = [j, qtd_product_cart[j]];
            //qtd_product_[key][qtd]
            cont++;
        }
    }
    return qtd_product_;
}
// atualizar qtd de item no carrinho
function qtdIncart(upg) {
    let soma = 0;
    for (let j = 0; j < upg.length; j++) {
        soma = soma + upg[j][1];
        console.log("Qtd Carrinho:" + soma);
    }
    //quantidade de produto no carinho
    /*
    var spam = document.getElementsByClassName("qtd_cart");
    //atualizar tags de carrinho quantidade
    for (var j = 0; j < spam.length; j++) {
        spam[j].innerHTML = "(" + qtdIncart(upg) + ")";
    }*/
    return soma;
}

