## Ejercicio Práctico: Sistema de Gestión de Tareas

En este ejercicio, te desafío a crear un sistema de gestión de tareas utilizando React que interactúe con una API RESTful. La aplicación constará de dos componentes principales: un formulario para agregar una nueva tarea y una lista para visualizar y marcar tareas como completadas.

### Requisitos del Proyecto

1. **Configuración del Proyecto**

   - Crea el proyecto utilizando Create React App o cualquier otra herramienta que prefieras.
   - Instala todas las dependencias necesarias utilizando npm o yarn.

2. **Componente de Formulario**

   - Crea un componente de formulario llamado `TaskForm`.
   - Este formulario debe incluir campos para ingresar el nombre de la tarea, la descripción y la fecha de vencimiento.
   - Utiliza las rutas proporcionadas por la API para enviar una solicitud POST al servidor y agregar una nueva tarea cuando el formulario se envíe correctamente.

3. **Componente de Lista de Tareas**

   - Crea un componente de lista de tareas llamado `TaskList`.
   - Esta lista debe mostrar todas las tareas existentes recuperadas de la API.
   - La lista debe incluir elementos que muestren el nombre de la tarea, la descripción, la fecha de vencimiento y un botón para marcar la tarea como completada.
   - Implementa la capacidad de marcar una tarea como completada haciendo clic en un botón asociado a cada tarea.
   - Utiliza las rutas proporcionadas por la API para enviar una solicitud PATCH al servidor y actualizar el estado de la tarea correspondiente.

4. **Integración con la API**

   - Utiliza las siguientes rutas proporcionadas por la API para interactuar con las tareas:
     - `GET /tasks` - para obtener todas las tareas.
     - `POST /tasks` - para agregar una nueva tarea.
     - `PATCH /tasks/:id` - para marcar una tarea como completada.

5. **Estilo y Diseño**

   - Diseña tu aplicación de manera que sea fácil de usar para los usuarios.
   - Utiliza CSS o alguna biblioteca de estilos como Material-UI para mejorar la apariencia de tu aplicación.