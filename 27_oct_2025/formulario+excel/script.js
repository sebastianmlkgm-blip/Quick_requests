document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("dataForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener datos del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Crear datos en formato de hoja
    const data = [
      ["Nombre", "Correo", "Mensaje"],
      [nombre, correo, mensaje]
    ];

    // Crear hoja y libro
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Datos");

    // Descargar archivo
    XLSX.writeFile(wb, "formulario_datos.xlsx");

    // Limpiar formulario
    form.reset();
  });
});
