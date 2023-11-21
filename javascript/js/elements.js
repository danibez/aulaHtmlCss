function adicionar() {
    var texto = document.getElementById("texto").value;
    var para = document.createElement("p");
    para.innerHTML = Date();
    para.id = texto;
    var corpo = document.getElementById("corpo");
    corpo.appendChild(para);
}

function remover() {
    var pai = document.getElementById("corpo");
    var temp = document.getElementById("texto").value;
    var filho = document.getElementById(temp);
    pai.removeChild(filho);
}
    