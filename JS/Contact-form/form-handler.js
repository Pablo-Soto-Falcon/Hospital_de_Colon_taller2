export function handleFormSubmission(e) {
    e.preventDefault(); // Evita que el formulario se envíe

    const form = document.getElementById("contact-form");

    // Obtener valores del formulario
    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("phone").value.trim();
    const mensaje = document.getElementById("message").value.trim();

    // Validar datos
    if (!nombre || !email || !telefono || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Validación de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Validación de teléfono (solo números)
    const telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El número de teléfono debe ser solo numérico.");
        return;
    }

    // Crear el contenido del modal
    const resumen = `
        Nombre: ${nombre}<br>
        Correo: ${email}<br>
        Teléfono: ${telefono}<br>
        Mensaje: ${mensaje}
    `;

    const modalContent = document.getElementById("modal-content");
    if (modalContent) {
        modalContent.innerHTML = `
            <span class="close">&times;</span>
            <h3>Resumen de tu mensaje</h3>
            ${resumen}
        `;

        // Mostrar modal
        const modal = document.getElementById("modal");
        modal.style.display = "block";

        // Mostrar resumen en consola
        console.log("Datos ingresados:");
        console.log(`Nombre: ${nombre}`);
        console.log(`Correo: ${email}`);
        console.log(`Teléfono: ${telefono}`);
        console.log(`Mensaje: ${mensaje}`);

        // Agregar funcionalidad al botón de cierre
        const closeButton = document.querySelector(".close");
        if (closeButton) {
            closeButton.onclick = function () {
                modal.style.display = "none";
                form.reset();
            };
        }

        // Cerrar modal al hacer clic fuera del contenido
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                form.reset();
            }
        };
    }
}
