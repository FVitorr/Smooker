//Localizar elemento de busca na pagina
let search = document.getElementById("search-text");
/*let father_ = document.getElementById("banner-search")*/

//Adicionar no corpo do html a div banner-search para renderizar os produtos da busca
let father_ = document.createElement("div");
father_.setAttribute("id", "banner-search")



function infoSeachDiv(Search_entry = 'nome_product',qtd_product = 0){
    var info_search_div = createDiv("id","info-search");
    if (qtd_product > 1){
        info_search_div.innerHTML += `
        <div class="info-search info">
            <div class= "header_search">
                <h2 id="name_search">Busca: "<spam>` + Search_entry + `</spam>"</h2>
                <p>Quantidade: <spam>`+ qtd_product + ` produtos</spam><p>
            </div>

        </div>
        <div class="info-button info">
            <button  onclick="return_();"><i class="fa-solid fa-backward"></i>  Voltar</button>
        </div>`
    }else {
        info_search_div.innerHTML += `<div class="info-search info">
            <h2 id="name_search info">Busca: "<spam>` + Search_entry + `</spam>"</h2>
            <p id= "page_erro"> <i class="fa-solid fa-face-meh"></i> Produto não encontrado<p>
        </div>
        <div class="info-button info">
            <button onclick="return_();"><i class="fa-solid fa-backward"></i>  Voltar</button>
        </div>`
    }
    //css para a div
    info_search_div.style.width = "80%";
    info_search_div.style.margin = "20px auto";
    info_search_div.style.overflow = "hidden";

    document.body.insertBefore(info_search_div, document.getElementById("banner-emphasis"));
}


let qtd_search = 0; // quantidade de busca efetuada - valor usado para resetar a div banner-search

let entry_confirm = 1; //se enter foi presionado valor 0

search.addEventListener("keyup", function (e) {
    let newPage = new Array;
    //quando um caracter é informado no search a div banner-search tera seu conteudo limpo
    if (qtd_search >= 1) {
        /*
        let container_ = document.getElementById("banner-search").childNodes;
        for (var i = 0; i < container_.length;i++){
            console.log(container_[i]);
            try{
                document.getElementById("banner-search").removeChild(container_[i]);
            }catch{
                console.log("Elemento não existe");
            }
        }*/
        let container_ 
    }
    try{
        let info = document.getElementById("info-search");
        info.remove();
        let button = document.getElementsByClassName("info-button");
        for (var i = 0; i < info.length;i++){
            button[i].remove();
        }
        console.log("elemento-Removdo")
    }catch{
        console.log("Not Found div info-search");
    }

    //active_display("banner-emphasis");
    let key = e.which || e.keyCode;
    if (key == 13) {
        //ocult_display("banner-emphasis");
        open_cart(reverse  = true);
        let container_ = document.getElementById("banner-emphasis").innerHTML ='';
        let t = this.value;
        let r = new RegExp(t.toLowerCase(), "g");
        let index = 0;
        //console.log(r);
        for (i in bd) {
            let name = bd[i][1].toLowerCase()
            if (name.match(r)) {
                console.log(bd[i])
                /*Separar pagina com a definição do search*/
                newPage[index] = bd[i];
                index++;
            }
        }
        let qtd_prd = newPage.length;
        console.log(qtd_prd)
        infoSeachDiv(t,qtd_prd);
        let index_ = 0;
        let div_conteine = createDiv('class', "container");
        for (i = 0; i < qtd_prd; i++) {
            if (index_ == 4 || index_ == 8 || index_ == 12) {
                father_.appendChild(div_conteine);
                div_conteine = createDiv('class', "container");
                index_ = 0;
            }
            let product_emphasis = createProdut(newPage[i][0], newPage[i][1], newPage[i][2], newPage[i][3], newPage[i][4], newPage[i][5])
            div_conteine.appendChild(product_emphasis);
            console.log(i);
            index_++;
        }
        if (qtd_prd > 1) {
            father_ = document.getElementById("banner-emphasis");
            father_.appendChild(div_conteine);
        }
        qtd_search++;
        search.value = '';
        //document.body.insertBefore(father_, document.getElementById("banner-emphasis"));
    }
    var products = document.getElementsByClassName("btn");
    products_key(products);
})

function return_(){
    document.getElementById("banner-emphasis").innerHTML =''
    try{
        document.getElementById("info-search").innerHTML =''
        document.getElementsByClassName("info-button").innerHTML =''
    }catch{
        console.log("Not Found div info-search");
    }
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
    products_key() ;
}