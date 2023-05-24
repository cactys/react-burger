/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('/');
  });

  it('should open and close modal ingredients', () => {
    cy.get('[id=643d69a5c3f7b9001cfa093c]').click();
    cy.get('[class=Modal_closeIcon__KgRw5]').click();
  });

  it('should drag & drop', () => {
    cy.get('[id=643d69a5c3f7b9001cfa093c]').trigger('dragstart');
    cy.get('[data-test=constructor-container]').trigger('drop');
    cy.get('[id=643d69a5c3f7b9001cfa0946]').trigger('dragstart');
    cy.get('[data-test=constructor-container]').trigger('drop');
    cy.get('button').contains('Оформить заказ').click();
    cy.get('[type="email"]').type('cyp@ress.net');
    cy.get('[type=password]').type('QAZwsx');
    cy.get('button').contains('Войти').click();
    cy.get('button').contains('Оформить заказ').click();
    cy.get('[class=Modal_closeIcon__KgRw5]').click();
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });
});
