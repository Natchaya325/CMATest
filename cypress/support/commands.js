Cypress.Commands.add('signin', (email, password) => {
    cy.visit('/login');
    cy.get('input[type="email"]').type(email).should('have.value', email);
    cy.get('input[type="password"]').type(password).should('have.value', password);
    cy.get('button[type="submit"]').click();
   // cy.get('.chakra-alert.css-qret8q').should('be.visible');
    cy.wait(5000);
});
Cypress.Commands.add('logout',()=>{
    cy.get('.chakra-button.css-1o2h9ii').click();
    cy.wait(2000);
    cy.get('p.chakra-text.css-rvp98e').click();
    cy.wait(2000);
    cy.get('button.chakra-button.css-41aesz').click();
});

import 'cypress-file-upload';