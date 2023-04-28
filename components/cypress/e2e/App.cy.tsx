describe('App E2E', () => {
  it('should have a header', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'RS-Books');
  });
});
// import App from '../../src/client/App';
// import { mount } from '@cypress/react18';

// describe('<App>', () => {
//   it('mounts', () => {
//     mount(<App />);
//   });
// });
