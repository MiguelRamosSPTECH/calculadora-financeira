
function calcularBeneficio() {
    var iptCarros = Number(ipt_veiculosPreco.value); // preco medio de carro (venda)
    var percentualValorizacao = Number(ipt_percentualAumento.value) / 100; 
    //percentual em vista de pesquisas realizadas pela montadora 
    // para saber quantos % os clientes estariam dispostos a pagar a+ por mais tecnologia/segurança no veículo

    var qtdVendasVeiculos = Number(ipt_qtdVeiculos.value); //quantos veiculos por ano a empresa vende

    var valorValorizacao = iptCarros * percentualValorizacao; //quantos R$ equivale a % inserida
    var calculoEconomiaAnual = ((iptCarros + percentualValorizacao) * qtdVendasVeiculos).toLocaleString('pt-br'); //calculando renda anual com novo valor do carro * a qtd de vendas anual
    var valorVeiculoValorizado = (iptCarros + valorValorizacao).toLocaleString('pt-br'); // preco valorizado

    respostaBeneficio.innerHTML = `
    Com base nos dados inseridos, você (montadora) poderá lucrar em cima dos benefícios do sensor cerca de 
    R$${valorValorizacao.toLocaleString('pt-br')} (${percentualValorizacao*100}%) em relação ao preço médio por veículo de R$${iptCarros.toLocaleString('pt-br')}.
    <br>
    Onde você passaria a vender o mesmo veículo por R$${valorVeiculoValorizado}, pois, esse preço seria
    justificado pelo fato de ter um sensor onde os benefícios são:

    <ul>
        <li>Reduz custo de danos ao motor por falta de óleo</li>
        <li>Evita gastos inesperados com manutenção</li>
        <li>Aumenta vida útil do motor</li>
    </ul> 
    <br>
    Quando um carro tem um diferencial tecnológico que melhora sua confiabilidade, 
    segurança e reduz custos com manutenção, os consumidores podem enxergar mais valor nesse veículo, 
    aceitando pagar um pouco mais por ele.
    <br>
    <br>
    E com base nesses dados, o lucro da empresa anual seria de de R$${calculoEconomiaAnual}!
    `



}