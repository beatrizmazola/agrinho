const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
});

function mostrarMensagem(){

    alert(
        "A irrigação inteligente ajuda a economizar água e preservar a biodiversidade."
    );

}

const slider = document.getElementById("slider");
const umidade = document.getElementById("umidade");

slider.addEventListener("input", () => {
    umidade.textContent = slider.value + "%";
});

function verificarSolo(){

    let valor = Number(slider.value);
    let resultado = document.getElementById("resultado");

    if(valor < 30){

        resultado.innerHTML =
        "🔴 Solo seco. O sistema ativa a irrigação por gotejamento.";

        resultado.style.color = "red";

    }

    else if(valor < 70){

        resultado.innerHTML =
        "🟡 Umidade adequada. Monitoramento contínuo.";

        resultado.style.color = "#d98c00";

    }

    else{

        resultado.innerHTML =
        "🟢 Solo úmido. Irrigação desligada para evitar desperdício.";

        resultado.style.color = "green";

    }

}