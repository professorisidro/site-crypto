function recuperarCotacoes() {
    fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
        .then(res => res.json())
        .then(obj => definirMoeda(obj, "BTC"));

    fetch("https://www.mercadobitcoin.net/api/ETH/ticker/")
        .then(res => res.json())
        .then(obj => definirMoeda(obj, "ETH"));
}

function definirMoeda(obj, moeda) {
    let abertura = obj.ticker.open;
    let cotacao = obj.ticker.last;
    let variacao = (cotacao - abertura) / abertura * 100;

    let valCot = parseFloat(cotacao);
    let valVar = parseFloat(variacao);

    document.getElementById("valor" + moeda).innerHTML = "R$ " + valCot.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById("var" + moeda).innerHTML = valVar.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "% <i class=\"fa-solid fa-caret-up\"></i>";
    document.getElementById("meuSpinner").style.visibility = "hidden";
}