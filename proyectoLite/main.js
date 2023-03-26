class Curso {
    constructor(precio){

    this.nombre = document.getElementById(product);
    this.precio = precio;
    
}}

const basico = new Curso ( 300)
const medio = new Curso (600)
const avanzado = new Curso (900)

const select = document.getElementById('product');

		
		select.addEventListener('change', () => {
			
			const selectedValue = select.value;
			
			document.querySelector('.price').textContent = `U$${selectedValue}`;
		});






const botonComprar = document.getElementById ("botonComprar")
botonComprar.addEventListener('click', () => {
formulario.innerHTML = ' <form id="form-checkout" action="/process_payment" class="col" method="post"> <div><div>  <label for="payerFirstName">Nombre</label> <input id="form-checkout__payerFirstName" name="payerFirstName" type="text"> </div> <div> <label for="payerLastName">Appelido</label> <input id="form-checkout__payerLastName" name="payerLastName" type="text"> </div> <div> <label for="email">E-mail</label> <input id="form-checkout__email" name="email" type="text"> </div> <div> <label for="identificationType">Tipo de documento</label> <select id="form-checkout__identificationType" name="identificationType" type="text"></select> </div> <div> <label for="identificationNumber">Número del documento</label> <input id="form-checkout__identificationNumber" name="identificationNumber" type="text"> </div> </div> <div> <div> <input type="hidden" name="transactionAmount" id="transactionAmount" value="100"> <input type="hidden" name="description" id="description" value="Nome do Produto"> <br> <button type="submit" class="btn botonMio" id="pagarBoton">Pagar</button> </div> </div> </form> '
});


const pagarBoton = document.getElementById("pagarBoton");
 pagarBoton.addEventListener ('click', () => {
        Swal.fire("Su pago ha sido realizado, En breve nos comunicaremos con usted");

        const nombre = document.getElementById("form-checkout__payerFirstName");
        const apellido = document.getElementById("form-checkout__payerLastName");
        const email = document.getElementById("form-checkout__email");

        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
        }

        localStorage.setItem("datos", JSON.stringify(datos)); 
});



    let valorDolar; 

const dolar = document.getElementById("dolar");

const url = "https://criptoya.com/api/dolar";

setInterval( () => {
    fetch(url)
        .then((response) => response.json())
        .then(({blue, oficial, solidario,}) => {
            dolar.innerHTML = `<p>Dolar Blue $${blue} - Dolar Oficial $${oficial} - Dolar Solidario $${solidario} </p>`
            valorDolar = blue;
        })
}, 2000);





