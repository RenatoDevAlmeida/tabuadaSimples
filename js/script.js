


function calcularTabuada(ev) {
    let txtTab =  document.querySelector('#txt-tab');
    let txtQtdTab = document.querySelector("#txt-qtd-tab");
    let btnCalc = document.querySelector("#btn-calc");
    let mostrarResultado = document.querySelector(".p-resultado");
    let res = 1;
    

    
    for (let i = 0;   i <= txtQtdTab.value; i++) {
        
        res = txtTab.value * i; 
        mostrarResultado.style.border = "1px solid #C4C5C7";    
        mostrarResultado.style.padding = "10px 85px 10px 85px";
        mostrarResultado.innerHTML += `${txtTab.value} X ${i} = ${res} <br>`;
        
    }

    txtQtdTab.value = "";
    txtTab.value = "";
}
