describe('Caso de prueba 4', () => {
  it('API | Iniciar sesión exitosamente | Augusto Meyer', () => {
    cy.fixture('user').then((user) => {
      // POST /api/Login con usuario y contraseña válidos
      cy.loginRequest(user.username, user.password).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.token, 'token JWT').to.be.a('string').and.not.be.empty;
        expect(res.body.userDetails.username).to.eq(user.username);
        expect(res.body.userDetails.userId, 'userId').to.be.a('number');
      });
    });
  });
});
