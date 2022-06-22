bd = [['https://t4.ftcdn.net/jpg/02/57/72/69/360_F_257726951_n0gIjSVw93lpvdH8UJDooMltieeSXfcB.jpg',
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


let search = document.getElementById("search-text");
search.onkeyup = function(e){
    let t = this.value;
    let r = new RegExp(t.toLowerCase(),"g");
    console.log(r);
    for (i in bd){
        let name = bd[i][1].toLowerCase()
        if (name.match(r)){
            console.log(bd[i][1]);
        }
    }
}