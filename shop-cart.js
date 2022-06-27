/*Div destinada a renderizar produtos do carrinho */
/*Div destinada a renderizar produtos do carrinho */
let cart_render = createDiv('id', "cart_render")

cart_render.innerHTML += `
    <div id="cart-body">
        <div class = "cart-main">
            <div class = "cart-header"> 
                <h2>Carrinho de compra <span class="qtd_cart title_"></span></h2>
            </div>
            <div class = "cart-conteudo">
                <h2 class = "cart-conteudo-erro">Nenhum produto no carrinho</h2>
            </div>
        </div>
        <div class = "cart-side">
            <div class = "cart-summary">
                <h2>Total</h2>
                <h6>Total:<spam class="total_cart"> R$ 00,00</spam></h6>
                <button>Continuar<spam class="qtd_cart spam_total">(0)</spam></button>
            </div>
            <div class = "cart-icon"> 
                <div class = "cart-icon-header">
                    <h4>Métodos de pagamento</h4>
                    <div class = "pag-icon">
                        <i class="fa-brands fa-cc-mastercard"></i>
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-solid fa-barcode"></i>
                        <i class="fa-brands fa-pix"></i>
                        <i class="fa-brands fa-bitcoin"></i>
                    </div>
                </div>
                <h4>Proteção ao consumidor</h4>
                <p><i class="fa-solid fa-user-shield"></i>Recupere o seu reembolso se o artigo não for entregue ou de acordo com a descrição.</p>
            </div>
        </div>
    </div>
`;
document.body.insertBefore(cart_render, document.getElementById("banner-emphasis"));

function upg_div_cart(key) {
    let msg_body_cart = document.getElementsByClassName("cart-conteudo-erro");
    msg_body_cart[0].style.display = 'none';
    let cart_conteudo = document.getElementsByClassName("cart-conteudo");
    let cart_Cproduct = createDiv("class", "cart-conteudo-product");
    cart_Cproduct.setAttribute("id", "product" + key);
    let product_info = bd[key];

    if (bd[key][6] > 1) { //elemento ja adcionado spam sofre incremento
        let nameDiv = "product" + key
        let spam = document.getElementsByClassName(nameDiv);
        spam[0].innerHTML = bd[key][6];
    } else {
        cart_Cproduct.innerHTML += `
                <img src =`+ product_info[0] + `>
                <div>
                    <p>` + product_info[1] + `</p>
                    <h6> R$` + product_info[2] + `</h6>
                    <spam class = "product`+ key + `"></spam>
                </div>
                <input type="button" class ="remove_product" onclick="remove_product(`+ key + `);" key="` + key + `" value="X">
                `;
        cart_conteudo[0].appendChild(cart_Cproduct);
        console.log(cart_Cproduct)
    }
    upg_Valuetotal();
    //console.log(product_info,qtd);
}

function upg_Valuetotal() {
    let spam_total = document.getElementsByClassName("total_cart");
    let total = 0;
    //bd [ url_img, descriçao, preço, estrelas, votos, key, qtd]
    for (let j = 0; j < bd.length; j++) {
        let qtd = bd[j][6];
        let valor_unit = bd[j][2];
        let valor = qtd * valor_unit
        total = total + valor
        console.log(valor);
    }
    spam_total[0].innerHTML = 'R$ ' + parseFloat(total).toFixed(2);
    console.log('soma_active');
}
//Remover elemento do cart

function remove_product(key) {
    var id = 'product' + key;
    //selecionar elemento a ser removido
    var element_remove = document.getElementById(id)
    //verificar se elemento a ser removido tem mais de uma qtd, se sim diminuir nessa qtd
    console.log("Key: " + key + " Qtd: " + bd[i][6]);
    if (bd[key][6] >= 0) { // maior q um elemento
        bd[key][6] = bd[key][6] - 1; // remover elemento da lista
        //atualizar preço total
        upg_Valuetotal();
        //atualizar span qtd item no carrinho
        var spam = document.getElementsByClassName("qtd_cart");

        let cont_ = document.getElementsByClassName("product" + key);
        cont_[0].innerHTML = bd[key][6];
        //atualizar tags de carrinho quantidade
        for (var j = 0; j < spam.length; j++) {
            spam[j].innerHTML = "(" + qtdIncart() + ")";
        }
        if (bd[key][6] == 0) {
            //remover da div
            element_remove.remove();
        }
        console.log("Key: " + key + " Qtd: " + bd[i][6])
    }


    if (document.getElementsByClassName("cart-conteudo-product").length == 0) {
        let msg_body_cart = document.getElementsByClassName("cart-conteudo-erro");
        msg_body_cart[0].style.display = 'block';
        for (i in upg) {
            upg[i][1] = 0;
        }
    }
    console.log("Remove");
    return upg;
}

let active_ = 0; // variavel de controle para o cart_render
let div_cart = document.getElementById("cart_render");
let div_product = document.getElementById("banner-emphasis");
let div_info = document.getElementsByClassName("info");
div_cart.style.display = "none"
div_product.style.display = "block"
function open_cart(reverse  = false) {
    if (active_ == 0 && !reverse) {
        div_cart.style.display = "block"
        login_register.style.display="none";
        div_product.style.display = "none"
        try{
            div_info[0].style.display="none"
            div_info[1].style.display="none"
        }catch{

        }
        active_ = 1;
    } else {
        div_cart.style.display = "none"
        //login_register.style.display="none";
        div_product.style.display = "block"
        try{
            div_info[0].style.display="block"
            div_info[1].style.display="block"
        }catch{
            
        }
        active_ = 0;
        
    }
    console.log(active_);
}