const items = [
    {
        id: 0,
        url: 'https://t4.ftcdn.net/jpg/02/57/72/69/360_F_257726951_n0gIjSVw93lpvdH8UJDooMltieeSXfcB.jpg',
        nome: 'Narguilé com base luminosa e lâmpada para barra de disco',
        valor: 140.50,
        qtd_start:4,
        votes:12,
        qtd:0,
    },
    {
        id: 1,
        url: 'https://cdn.awsli.com.br/1228/1228269/arquivos/pod-descartavel-maskking-1000-puff-0nicotina.jpg',
        nome: 'Pod descartável Maskking High Pro',
        valor: 59.90,
        qtd_start:4,
        votes:12,
        qtd:0,
    }
]

for (var i = 0; i < items.length;i++){
    console.log(items[i].nome);
}