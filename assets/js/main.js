function imc() {
        const form = document.querySelector('.form');
        const resultado = document.querySelector('.resultado');

        form.addEventListener('submit', function (event) {
                event.preventDefault();

                const peso = parseFloat(document.querySelector('.peso').value);
                const altura = parseFloat(document.querySelector('.altura').value);
                const imc = peso / (altura * altura);

                let mensagem = '';

                if (imc >= 40) {
                        mensagem = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
                } else if (imc >= 35) {
                        mensagem = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
                } else if (imc >= 30) {
                        mensagem = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
                } else if (imc >= 25) {
                        mensagem = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
                } else if (imc >= 18.5) {
                        mensagem = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
                } else {
                        mensagem = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
                }

                resultado.innerHTML = `<div>${mensagem}</div>`;
        });
}

imc();