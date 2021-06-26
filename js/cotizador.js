var btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function getInputValue() {

    var pase_dia = document.getElementById('pase_dia').value;
    var value_pase_dia = document.getElementById('value_pase_dia').value;

    var pase_completo = document.getElementById('pase_completo').value;
    var value_completo = document.getElementById('value_completo').value;

    var pase_dosdias = document.getElementById('pase_dosdias').value;
    var value_dosdias = document.getElementById('value_dos_dias').value;

    var camisa_evento = document.getElementById('camisa_evento').value;
    var value_camisa = document.getElementById('value_camisa').value;

    var etiquetas = document.getElementById('etiquetas').value;
    var value_etiquetas = document.getElementById('value_etiquetas').value;

    var regalo = document.getElementById('regalo');

    var paseDia = (calcular(pase_dia, value_pase_dia));
    var pasecompleto = (calcular(pase_completo, value_completo));
    var paseDosDias = (calcular(pase_dosdias, value_dosdias));
    var camisaSinDesc = (calcular(camisa_evento, value_camisa));
    var camisaEvento = camisaSinDesc - (camisaSinDesc * 0.07);
    var etiqueta = (calcular(etiquetas, value_etiquetas));

    var listRegalo = regalo.options[regalo.selectedIndex].text;

    var total = paseDia + pasecompleto +
        paseDosDias + camisaEvento +
        etiqueta;

    var sumaTotal = document.getElementById('suma-total');
    sumaTotal.innerHTML = `$ ${total}`;

    var listaResumen = document.getElementById('lista-productos');
    listaResumen.style.display = "block";
    listaResumen.innerHTML = `
                                <ul>
                                    <li>${pase_dia} PASES POR DÍA (VIERNES) $ ${paseDia} </li>
                                    <li>${pase_completo} PASES POR TODOS LOS DÍAS $ ${pasecompleto}</li>
                                    <li>${pase_dosdias} PASES POR 2 DÍAS (VIERNES Y SÁBADO) $ ${paseDosDias}</li>
                                    <li>${camisa_evento} CAMISA DEL EVENTO $ ${camisaEvento}</li>
                                    <li>${etiquetas} PAQUETE DE 10 ETIQUETAS $ ${etiqueta}</li>
                                    <li>REGALO: ${listRegalo.toUpperCase()}</li>
                                </ul>`;

});



function calcular(valorItem, price) {
    let newValue = valorItem * price;
    return newValue;

}

/*var pagar = document.getElementById('btnRegistro');

pagar.addEventListener('click', function cleanFields() {
    location.reload();
})*/





















