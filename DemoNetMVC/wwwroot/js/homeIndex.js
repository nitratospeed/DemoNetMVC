window.onload = function () {
    fetch('http://localhost:5090/api/usuario', {
    })
        .then(response => response.json())
        .then(data => {
            let result = data.data;

            var tableRef = document.getElementById('lista-usuarios').getElementsByTagName('tbody')[0];

            result.forEach(function (entry) {
                var newRow = tableRef.insertRow();
                var i = 0;
                for (let [key, value] of Object.entries(entry)) {
                    var newCell = newRow.insertCell(i);

                    if (key == "activo") {
                        if (value == true) {
                            value = "Habilitado";
                        }
                        else {
                            value = "Deshabilitado";
                        }
                    }

                    var newText = document.createTextNode(value);
                    newCell.appendChild(newText);
                    i++;
                }
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};