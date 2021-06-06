/// <reference types="cypress" />

describe('Carga la página princippal 🔃', () => {
  it('Carga la página principal', () => {
    cy.visit('http://127.0.0.1:5500/index.html')

    // Verifica elemento y texto
    cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria')

    // Verifica que exista
    cy.get('[data-cy="titulo-proyecto"]').should('exist')

    //Verfica que exista y contenga un texto
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria')

    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una')

    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('not.equal', 'Will')
  })
})
