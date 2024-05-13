describe('Fail Login', () => {
  it('fail login', () => {
    cy.fixture('data').then((dt) => {
      const email1 = dt.LogIn[0].email1;
      const password1 = dt.LogIn[0].password1;

      cy.visit('/login');

      cy.get('input[type="email"]').type(email1).should('have.value', email1);
      cy.get('input[type="password"]').type(password1).should('have.value', password1);
      cy.get('button[type="submit"]').click();
      cy.get('.chakra-alert.css-mu48c4').should('be.visible');

      
    });
  });
});

describe('Pass Login', () => {
  it('pass login', () => {
    cy.fixture('data').then((dt) => {
      const email2 = dt.LogIn[1].email2;
      const password2 = dt.LogIn[1].password2;

      cy.visit('/login');

      cy.get('input[type="email"]').type(email2).should('have.value', email2);
      cy.get('input[type="password"]').type(password2).should('have.value', password2);
      cy.get('button[type="submit"]').click();
      cy.get('.chakra-alert.css-qret8q').should('be.visible');

      
    });
  });
});

