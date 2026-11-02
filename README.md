# Giantucchi · Web y prueba con Canarytokens

Se creó una web de servicios tecnológicos y se probó un documento Word con Canarytoken. El archivo se descargó desde la web, se abrió en Microsoft Word y llegó la alerta al correo configurado.

## Lo que se hizo

- Se creó el proyecto en WebStorm con HTML, CSS y JavaScript.
- Se diseñó una página de servicios de desarrollo web, automatización, inteligencia artificial y CRM.
- Se usaron fondo blanco, tonos azules y la tipografía Inter guardada en el proyecto.
- Se añadió la fecha y hora de Lima en la parte superior, con actualización automática.
- Se generó un Canarytoken de tipo Microsoft Word document.
- Se colocó el archivo como `documentos/accesos-respaldo.docx`, sin un enlace visible en la portada.
- Se accedió al documento desde el servidor de WebStorm y se descargó el archivo.
- Se abrió el Word descargado y se recibió el correo de activación del token.

## Resultado

La alerta recibida corresponde al 2 de noviembre de 2026 a las 17:05 UTC, equivalentes a las 12:05 p. m. en Lima. Indica un token de tipo MS Word y un cliente identificado como MSOffice 16.

La prueba confirmó la descarga reportada y la activación del documento. Se accedió usando una ruta conocida; no se realizó una búsqueda a ciegas ni se recopilaron registros del servidor. La ubicación indicada en el recordatorio fue escrita al configurar el token.

## Archivos del proyecto

```text
index.html                          Página principal
css/styles.css                      Diseño de la web
js/app.js                           Fecha y hora de Lima
fonts/                              Tipografía Inter y licencia
documentos/accesos-respaldo.docx     Word con Canarytoken
README.md                           Resumen de la actividad
```

## Cómo se ejecutó

Se abrió `index.html` desde WebStorm con **Open in Browser**. Para descargar el documento se conservó la dirección base del proyecto y se cambió `index.html` por `documentos/accesos-respaldo.docx`.


## Informe y evidencia

- [Informe de la actividad en Word](informe/Informe_Canarytokens_Giantucchi.docx).
- [Captura de la alerta recibida](informe/alerta-canarytokens.png).
