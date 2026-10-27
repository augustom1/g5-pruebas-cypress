# Resultados de la ejecución

- **Fecha**: 25/10/2026
- **Sistema bajo prueba**: https://app.bookdb.online
- **Herramienta**: Cypress 16.2.0, navegador Chrome 155
- **Comando**: `npm run test:report`
- **Reporte completo**: [`reporte.html`](reporte.html) (abrilo con doble clic en el navegador)
- **Repetibilidad**: 3 corridas seguidas de la suite completa, las 3 con 6 de 6 en verde

| Caso | Título | Tipo | Resultado esperado | Resultado obtenido |
|---|---|---|---|---|
| 1 | Comprar carrito exitosamente y visualizar orden de compra | FE | Compra creada y visible en las órdenes | Pasó |
| 2 | API \| Comprar carrito exitosamente | API | 200 | Pasó (200) |
| 3 | API \| Error al comprar carrito sin token | API | 401 | Pasó (401) |
| 4 | API \| Iniciar sesión exitosamente \| Augusto Meyer | API | 200 con token | Pasó (200) |
| 5 | API \| Error al iniciar sesión con contraseña incorrecta \| Augusto Meyer | API | 401 sin token | Pasó (401) |
| 6 | Iniciar sesión con campos vacíos muestra mensajes de validación \| Augusto Meyer | FE | "Username is required" y "Password is required" | Pasó |

## Hallazgo

Durante la prueba manual se encontró un defecto: en Chrome y Edge, al iniciar sesión con una contraseña incorrecta, la app no muestra ningún mensaje de error (la API responde 401). El detalle está en `docs/casos-de-prueba/caso-06-login-campos-vacios.md`.

Para volver a generar estos resultados: `npm run test:report`.
