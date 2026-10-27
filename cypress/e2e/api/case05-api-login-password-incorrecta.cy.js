describe('Caso de prueba 5', () => {
  it('API | Error al iniciar sesión con contraseña incorrecta | Augusto Meyer', () => {
    cy.fixture('user').then((user) => {
      cy.fixture('login-invalid').then((invalid) => {
        // POST /api/Login con un usuario existente y una contraseña incorrecta
        cy.loginRequest(user.username, invalid.wrongPassword).then((res) => {
          expect(res.status).to.eq(401);
          // El 401 viene con el body vacío: el ?. evita error si body es undefined
          expect(res.body?.token, 'no devuelve token').to.be.undefined;
        });
      });
    });
  });
});
