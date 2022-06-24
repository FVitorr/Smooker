/*Div destinada a renderizar produtos do carrinho */
/*Div destinada a renderizar produtos do carrinho */
let cart_render = createDiv('id',"cart_render")

cart_render.innerHTML += `
    <div id="cart-body">
        <div class = "cart-main">
            <div class = "cart-header"> 
                <h2>Carrinho de compra <span class="qtd_cart title_"></span></h2>
                <p><input type="radio" name="product-select" value = "1">Selecionar Tudo</p>
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

function upg_div_cart(key,upg){
    let msg_body_cart = document.getElementsByClassName("cart-conteudo-erro");
    msg_body_cart[0].style.display = 'none';
    let cart_conteudo = document.getElementsByClassName("cart-conteudo");
    let cart_Cproduct = createDiv("class","cart-conteudo-product");
    cart_Cproduct.setAttribute("id","product" + key);
    let product_info = bd[key];
    for (let i = 0; i < upg.length; i++){
        console.log('Key Entry Div' + upg);
        if (key == upg[i][0]){
            if (upg[i][1] > 1){ //elemento ja adcionado spam sofre incremento
                let nameDiv = "product"+ key
                let spam = document.getElementsByClassName(nameDiv);
                spam[0].innerHTML = upg[i][1];
            }else{
                cart_Cproduct.innerHTML += `
                <img src =`+ product_info[0] + `>
                <div>
                    <p>` + product_info[1] + `</p>
                    <h6> R$` + product_info[2] + `</h6>
                    <spam class = "product`+ key + `"></spam>
                </div>
                <input type="button" class ="remove_product" onclick="remove_product(`+ key +`);" key="`+ key +`" value="X">
                `;
                cart_conteudo[0].appendChild(cart_Cproduct);
                console.log(cart_Cproduct)
            }
        }
    }
    upg_Valuetotal(upg);
    //console.log(product_info,qtd);
}

function upg_Valuetotal(upg_){
    let spam_total = document.getElementsByClassName("total_cart");
    let total = 0;
    
    for (let j = 0; j < upg_.length; j++){
        let key = upg_[j][0];
        let qtd = upg_[j][1];
        let valor_unit = bd[key][2];
        let valor = qtd * valor_unit
        total = total + valor
        console.log(valor);
    }
    spam_total[0].innerHTML = 'R$ ' + parseFloat(total).toFixed(2);
    console.log('soma_active');
}
//Remover elemento do cart

function remove_product(key){
    console.log(key)
    var id = 'product' + key;
    //selecionar elemento a ser removido
    var element_remove = document.getElementById(id)
    //verificar se elemento a ser removido tem mais de uma qtd, se sim diminuir nessa qtd
    for( i in upg){
        if (key == upg[i][0]){
            console.log ("Key: " + key + " Qtd: " + upg[i][1]);
            if (upg[i][1]>= 0){ // maior q um elemento
                upg[i][1] = upg[i][1] - 1; // remover elemento da lista
                qtd_product_cart[key] = qtd_product_cart[key] - 1;
                //atualizar preço total
                upg_Valuetotal(upg);
                //atualizar span qtd item no carrinho
                var spam = document.getElementsByClassName("qtd_cart");
                
                let cont_ = document.getElementsByClassName("product"+ key);
                cont_[0].innerHTML = upg[i][1];
                //atualizar tags de carrinho quantidade
                for (var j = 0; j < spam.length; j++) {
                    spam[j].innerHTML = "(" + qtdIncart(upg) + ")";
                }
                if (upg[i][1]== 0){
                    //remover da div
                    element_remove.remove(); 
                }
                console.log(qtd_product_cart[key]);
            }
        }
    }
    if(document.getElementsByClassName("cart-conteudo-product").length == 0){
        let msg_body_cart = document.getElementsByClassName("cart-conteudo-erro");
        msg_body_cart[0].style.display = 'block';
    }
    console.log("Remove");
    return upg;
}
