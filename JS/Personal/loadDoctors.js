document.addEventListener("DOMContentLoaded", () => {
    // Ruta al archivo JSON
    const jsonPath = "JSON/medicos.json";

    // Contenedor donde se mostrarán las tarjetas de médicos
    const teamContainer = document.querySelector(".team-container");

    // Función para cargar y mostrar los datos
    fetch(jsonPath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            // Generar el contenido dinámico
            data.forEach((medico) => {
                // Crear el contenedor de la tarjeta
                const card = document.createElement("div");
                card.className = "team-card";

                // Agregar la imagen
                const img = document.createElement("img");
                img.src = `resources/images/${medico.Imagen}`;
                img.alt = medico.Nombre;

                // Agregar el nombre del médico
                const name = document.createElement("h3");
                name.textContent = medico.Nombre;

                // Agregar la especialidad
                const specialty = document.createElement("p");
                specialty.textContent = `Especialista en ${medico.Especialidad}`;

                // Agregar la experiencia y alma mater
                const details = document.createElement("p");
                details.textContent = `${medico["Años de experiencia"]} años de experiencia, egresado/a de la ${medico["Alma mater"]}.`;

                // Ensamblar la tarjeta
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(specialty);
                card.appendChild(details);

                // Agregar la tarjeta al contenedor
                teamContainer.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error al procesar el JSON:", error);
        });
});
