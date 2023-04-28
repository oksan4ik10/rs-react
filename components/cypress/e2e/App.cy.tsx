/// <reference types="cypress" />d
describe('App E2E', () => {
  it('Start app', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'RS-Books');
  });
  it('Seacrh cards', () => {
    cy.visit('/');
    cy.get('.container input').type('Динка').type('{enter}').should('have.value', 'Динка');
    cy.get('.card').should('have.length', 2);
  });
  it('Forms empty', () => {
    cy.visit('/add');
    cy.contains('Create card').click();
    cy.get('label:first-child span').should('have.text', 'Title field is empty');
  });
  it('Forms submit', () => {
    cy.visit('/add');
    cy.get('input[name="title"]').type('Oksana').should('have.value', 'Oksana');
    cy.get('input[name="desc"]').type('TestTestTest').should('have.value', 'TestTestTest');
    cy.get('input[name="year"]').type('1999-12-31').should('have.value', '1999-12-31');
    cy.get('select[name="author"]').select('Stephen King').should('have.value', 'Stephen King');
    cy.get('[type="checkbox"]').first().check();
    cy.get('[type="radio"]').first().check();
    cy.get('input[name="file"]').selectFile({
      fileName: 'picture.png',
      contents: ['its a picture here'],
      mimeType: 'text/plain',
      lastModified: new Date('Feb 18 1989').valueOf(),
    });

    cy.contains('Create card').click();
    cy.get('.card').should('have.length', 1);
  });
});
