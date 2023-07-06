![Logo de UNaHur](src/components/img/UNAHUR-logo.png)

# <center>Trabajo Final Integrador</center>
## <center>Construcción de Interfaces de Usuario</center><center>2023C1 - Imágenes Artemis de la NASA</center>

Este proyecto es el trabajo final de la materia Construcción de Interfases de Usuario de la UNaHur (Universidad Nacional de Hurlingham).
Desarrollado por Hernán M. Coniglio.

Desplegado en Netlify: [https://proyectociu-hernanconiglio.netlify.app/](https://proyectociu-hernanconiglio.netlify.app/)

## Descripción

La aplicación web desarrollada con React tiene como objetivo mostrar el catálogo de imágenes del proyecto Artemis de la NASA. Utiliza Axios para el parseo de archivos JSON y consulta la [API de la NASA](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf) para obtener los datos.

## Funcionalidades

- Mostrar imágenes del catálogo del proyecto Artemis de la NASA con título y descripción.
- Filtrar imágenes por palabra clave.
- Persistencia de las últimas palabras clave utilizadas en las búsquedas.
- Cambio entre modo claro y modo oscuro.

Para lograr estas funcionalidades, la aplicación comple con lo siguiente:
- Procesamiento de datos.
- Hooks.
- Consulta de una API.
- Creación de componentes.
- Uso de ccs y Bootstrap.
- Persistencia local.

## Secciones

### App

El componente App.jsx es el componente principal de la aplicación. Contiene el estado de la aplicación, los métodos para cambiar el estado y los componentes que conforman la aplicación. Utiliza el hook useEffect para ejecutar la función que obtiene los datos de la API de la NASA y los almacena en el estado de la aplicación. También utiliza el hook useState para cambiar el estado de la aplicación cuando se ejecuta una búsqueda por palabra clave. 
En Index.html se incluye el link a la hoja de estilos de Bootstrap y el link a la hoja de estilos personalizada.
Axios se utiliza para realizar el parseo de los datos de la API de la NASA, que se reciben en formato JSON.
A continuación, se describen el resto de los componentes que conforman la aplicación.

### Header (Navbar)

El header, desarrollado en el componente Navbar.jsx, contiene el logo de la NASA que transiciona y cambia suavemente entre los distintos logos de la institución de forma infinita con alguno infiltrado proveniente de un posible futuro. El título utiliza la tipografía de la NASA específicamente configurada para el proyecto. 
En el centro del header, podemos encontrar el campo para escribir la palabra clave de búsqueda (Filter Keyword). Pulsando "Enter" se puede ejecutar la búsqueda, también haciendo click en el botón "Apply Filter" ubicado a la derecha del campo de Keyword. En el lado derecho, se encuentra el botón para cambiar entre el modo claro y el modo oscuro.

### Sección Principal

En la sección principal se encuentran los botones de navegación para el paginado (Previous / Next) según corresponda. Luego se presentan las tarjetas de las imágenes que cumplen con la palabra clave de búsqueda (12 por página), y su configuración está desarrollada en el componente CardList.jsx. Luego de las tarjetas, se encuentran los botones de navegación para Previous / Next. Debajo de estos botones, se muestra la lista de las últimas palabras clave utilizadas en las búsquedas (12), que persiste incluso después de refrescar la página. También se incluye un botón para limpiar la lista de palabras clave.

### Footer

El footer contiene el logo de la UNaHur, los datos correspondientes a la materia, mis datos personales y enlaces a mis redes sociales.

## Responsividad

La aplicación es completamente responsive. Tiene mejor rendimiento en pantallas grandes de PC, aunque presenta un muy buen aspecto en pantallas móviles, especialmente en orientación horizontal.

## Tecnologías Utilizadas

- React
- Axios
- HTML
- CSS
- Framework Bootstrap
- JSON

## Instalación

1. Clonar el repositorio: `git clone https://github.com/hernanconiglio/proyectoCIU2023c1.git`
2. Ingresar al directorio del proyecto: `cd proyectociu-hernanconiglio`
3. Instalar las dependencias: `npm install`

## Uso

1. Iniciar la aplicación: `npm start`
2. Abre tu navegador web y visita: `http://localhost:3000`

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una rama para tu contribución: `git checkout -b feature/nueva_funcionalidad`
3. Realiza tus cambios y commitea: `git commit -m 'Agrega nueva funcionalidad'`
4. Realiza un push a tu repositorio: `git push origin feature/nueva_funcionalidad`
5. Abre una pull request en este repositorio

## Licencia

Este proyecto se distribuye bajo la Licencia Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). Puedes encontrar los términos completos de la licencia [acá]([enlace-a-licencia](https://creativecommons.org/licenses/by-sa/4.0/)).

<a rel="license" href="enlace-a-licencia"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>


## Contacto

- Nombre: Hernán M. Coniglio
- Email: hernanmarcelo.coniglio@estudiantes.unahur.edu.ar
- Redes Sociales: [LinkedIn](https://www.linkedin.com/in/hernan-coniglio/), [Twitter](https://www.twitter.com/HMConiglio), [Instagram](https://www.instagram.com/hernan.coniglio/), [YouTube](https://www.youtube.com/channel/UCQj9OjkVPHLFrpZIS4dWYyQ)
