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
                <div class="cart-conteudo-product">
                    <input type="radio" name="product-select" value = "2">
                    <img src ="logo.png">
                    <div>
                        <p>Nome Produto<p>
                        <h6>R$ 00,00</h6>
                    </div>
                </div>
                <div class="cart-conteudo-product">
                    <input type="radio" name="product-select" value = "3">
                    <img src ="logo.png">
                    <div>
                        <p>Nome Produto<p>
                        <h6>R$ 00,00</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class = "cart-side">
            <div class = "cart-summary">
                <h2>Total</h2>
                <h6>Total:<spam> R$ 00,00</spam></h6>
                <button>Continuar<spam>(0)</spam></button>
            </div>
            <div class = "cart-icon"> 
                <div class = "cart-icon-header">
                    <h4>Métodos de pagamento</h4>
                    <div class = "pag-icon">
                        <i class="fa-brands fa-cc-mastercard"></i>
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-solid fa-barcode"></i>
                        <i class="fa-brands fa-pix"></i>
                    </div>
                </div>
                <h4>Proteção ao consumidor</h4>
                <p><i class="fa-solid fa-user-shield"></i>Recupere o seu reembolso se o artigo não for entregue ou de acordo com a descrição.</p>
            </div>
        </div>
    </div>
`;
document.body.insertBefore(cart_render, document.getElementById("banner-emphasis"));

function upg_div_cart(key){
    let cart_conteudo = document.getElementsByClassName("cart-conteudo");
    let cart_Cproduct = createDiv("class","cart-conteudo-product");
    let product_info = bd[key[0]];
    let qtd = key[1];
    console.log(product_info,qtd);

    cart_Cproduct.innerHTML += `
        <input type="radio" name="test" value = "3">
        <img src =`+ product_info[0] + `>
        <div>
            <p>` + product_info[1] + `<p>
            <h6> R$` + product_info[2] + `</h6>
            <p>`+ qtd + `<p>
        </div>
        `;
    cart_conteudo[0].appendChild(cart_Cproduct);
    console.log(cart_Cproduct)
}
