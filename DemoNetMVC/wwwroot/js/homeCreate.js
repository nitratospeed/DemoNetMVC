document.getElementById('btn-crear').onclick = function nuevoUsuario() {
    let form = document.getElementById("create-usuario-form");
    let formData = new FormData(form);

    if (formData.get("celular").length > 9) {
        alert("El campo Celular tiene mas de 9 digitos");     
        return;
    }

    fetch('http://localhost:5090/api/usuario', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombres: formData.get("nombres"),
            edad: parseInt(formData.get("edad")),
            ocupacion: formData.get("ocupacion"),
            celular: formData.get("celular"),
            direccion: formData.get("direccion"),
            activo: true
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = "/Home/Index/";
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById("alert-form").style.display = "block";
        });
};

document.getElementById('create-usuario-form').onclick = function () { document.getElementById("alert-form").style.display = "none";  };