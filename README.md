# bookdb-cypress-final

Proyecto final de Diseño y Prueba de Software (IFTS N°11). Automatización con Cypress (UI + API) sobre https://app.bookdb.online.

## Requisitos
- Node.js (LTS)
- Google Chrome

## Instalación
```bash
npm install
```

## Cómo ejecutar
```bash
npm run cy:open       # modo visual: E2E Testing > Chrome > elegís cada test
npm test              # corre todos los tests en Chrome, en la terminal
npm run test:ui       # solo Front-End
npm run test:api      # solo API
npm run test:report   # corre todo y genera resultados/reporte.html
```

## Estructura
```
cypress/e2e/ui                tests de Front-End (casos 1 y 6)
cypress/e2e/api               tests de API (casos 2 a 5)
cypress/support/pages         Page Objects (POM): selectores + acciones de cada pantalla
cypress/support/api           API Objects (mismo patrón que POM): un cy.request por endpoint
cypress/support/commands.js   comandos personalizados (cy.login, cy.loginRequest, cy.apiLogin, cy.resetCart)
cypress/fixtures              datos de prueba
docs/casos-de-prueba          casos documentados
resultados                    reporte de la última ejecución (RESULTADOS.md y reporte.html)
```

## Datos de prueba
`cypress/fixtures/user.json` tiene una cuenta **de prueba** registrada en la app, creada solo para este proyecto. No es una cuenta personal.

## Casos
| Caso | Título | Responsable |
|---|---|---|
| 1 | Comprar carrito exitosamente y visualizar orden de compra | Grupo (profesora) |
| 2 | API \| Comprar carrito exitosamente | Grupo (profesora) |
| 3 | API \| Error al comprar carrito sin token | Grupo (profesora) |
| 4 | API \| Iniciar sesión exitosamente \| Augusto Meyer | Augusto Meyer |
| 5 | API \| Error al iniciar sesión con contraseña incorrecta \| Augusto Meyer | Augusto Meyer |
| 6 | Iniciar sesión con campos vacíos muestra mensajes de validación \| Augusto Meyer | Augusto Meyer |
| 7-9 | Pendiente | Compañera 2 |
| 10-12 | Pendiente | Compañera 3 |
