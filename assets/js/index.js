/* ejercicio 1 */
function toggleBorder() {
    const img = document.getElementById('gato');
    img.classList.toggle('bordeRojo');
}

/* ejercicio 2 */
function validaSuma(){
    const input1 = parseInt(document.getElementById('input1').value) || 0;
    const input2 = parseInt(document.getElementById('input2').value) || 0;
    const input3 = parseInt(document.getElementById('input3').value) || 0;
    const total = input1 + input2 + input3;
    const mensaje = document.getElementById('mensaje');
    if(total > 10){
        mensaje.textContent = 'Llevas muchos Sticker';
    }
    else{
        mensaje.textContent = 'Todo bien'
    }
}
/* ejercicio 3 */
function validarPassword(){
    const selector1 = document.getElementById('selector1').value;
    const selector2 = document.getElementById('selector2').value;
    const selector3 = document.getElementById('selector3').value;
    const password = selector1 + selector2 + selector3;

    const confirmacion = document.getElementById('confirmacion');
    if(password === '911'){
        confirmacion.textContent = 'Password 1 correcta';
        confirmacion.style.color = 'green';
    }
    else if(password === '714'){
        confirmacion.textContent = 'Password 2 correcta';
        confirmacion.style.color = 'green';
    }
    else{
        confirmacion.textContent = 'Password Incorrecta';
        confirmacion.style.color = 'red';
    }
}