/// <reference types="cypress" />

describe('Llena los campos de una nueva cita y la elimina', () => {
  it('Campos nueva cita', () => {
    cy.visit('/index.html');
    cy.get('[data-cy="mascota-input"]').type('Connie');

    cy.get('[data-cy="propietario-input"]').type('Will');

    cy.get('[data-cy="telefono-input"]').type('0987014414');

    cy.get('[data-cy="fecha-input"]').type('2021-03-25');

    cy.get('[data-cy="hora-input"]').type('10:00');

    cy.get('[data-cy="sintomas-textarea"]').type('duerme mucho \nEsta triste');

    cy.get('[data-cy=submit-cita]').click();

    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'Administra tus Citas');

    cy.get('[data-cy="alerta"]')
      .invoke('text')
      .should('equal', 'Se agregó correctamente');

    cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');
  });

  it('Edita la cita', () => {
    cy.get('[data-cy="btn-editar"]').click();

    cy.get('[data-cy="mascota-input"]').clear().type('Connie');

    cy.get('[data-cy=submit-cita]').click();

    cy.get('[data-cy="alerta"]')
      .invoke('text')
      .should('equal', 'Guardado Correctamente');

    cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');
  });

  it('Elimina la cita', () => {
    cy.get('[data-cy="btn-eliminar"]').click();

    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una');

    cy.screenshot()
  });
});
