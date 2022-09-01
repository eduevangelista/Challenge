function dadostable(nomeCLiente, PesoEntrega, EndereçoCliente,Latitude, Longitude){

    let tab = document.getElementById("table")
    let quantdidadeDeLinhas = tb.rows.length
    let linha = tab.insertRow(quantdidadeDeLinhas)

    let cellNomeCliente = linha.insertCell(0);
    let cellPesoEntrega = linha.insertCell(1);
    let cellEndereçoCliente = linha.insertCell(2);
    let cellLatitude = linha.insertCell(3);
    let cellLongitude = linha.insertCell(4);
}