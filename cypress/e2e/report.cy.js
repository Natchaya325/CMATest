describe('Add report', () => {
    it('Add report', () => {
        cy.fixture('data').then((dt) => {
            const i = 1;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;

            const title = dt.Report[i].title;
            const detail = dt.Report[i].detail;
            const name = dt.Report[i].name;
            const phonenumber = dt.Report[i].phonenumber;
            const lineid = dt.Report[i].lineid;
            const email = dt.Report[i].email;


            cy.visit('/');
            cy.wait(3000);
            cy.contains('tr', compname)
                //cy.contains('tr', compphone)
                .click();
            cy.wait(10000);
            cy.contains('tr', pjname)
                .find('.chakra-button.css-ufm2bu')
                .click();

            cy.get('button.chakra-button.css-11mxzrk').click();
            cy.get('#field-\\:r38\\:').type(title).should('have.value', title);
            cy.get('#field-\\:r39\\:').type(detail).should('have.value', detail);
            cy.get('#field-\\:r3a\\:').type(name).should('have.value', name);
            cy.get('#field-\\:r3b\\:').type(phonenumber).should('have.value', phonenumber);
            cy.get('#field-\\:r3c\\:').type(lineid).should('have.value', lineid);
            cy.get('#field-\\:r3d\\:').type(email).should('have.value', email);


            //cy.get('.chakra-button.css-oeqjjt').click();
            cy.get('.chakra-button.css-mk2142').click(); //save
            cy.wait(3000)
            cy.get('.chakra-alert__title.css-tidvy5').should('be.visible');
        });
    })
    it('Add report2', () => {
        cy.fixture('data').then((dt) => {
            const i = 2;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;

            const title = dt.Report[i].title;
            const detail = dt.Report[i].detail;
            const name = dt.Report[i].name;
            const phonenumber = dt.Report[i].phonenumber;
            const lineid = dt.Report[i].lineid;
            const email = dt.Report[i].email;


            cy.visit('/');
            cy.wait(3000);
            cy.contains('tr', compname)
                //cy.contains('tr', compphone)
                .click();
            cy.wait(10000);
            cy.contains('tr', pjname)
                .find('.chakra-button.css-ufm2bu')
                .click();

            cy.get('button.chakra-button.css-11mxzrk').click();
            cy.get('#field-\\:r38\\:').type(title).should('have.value', title);
            cy.get('#field-\\:r39\\:').type(detail).should('have.value', detail);
            cy.get('#field-\\:r3a\\:').type(name).should('have.value', name);
            cy.get('#field-\\:r3b\\:').type(phonenumber).should('have.value', phonenumber);
            cy.get('#field-\\:r3c\\:').type(lineid).should('have.value', lineid);
            cy.get('#field-\\:r3d\\:').type(email).should('have.value', email);


            //cy.get('.chakra-button.css-oeqjjt').click();
            cy.get('.chakra-button.css-mk2142').click(); //save
            cy.wait(3000)
            cy.get('.chakra-alert__title.css-tidvy5').should('be.visible');
        });
    })
    it('Add report3', () => {
        cy.fixture('data').then((dt) => {
            const i = 3;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;

            const title = dt.Report[i].title;
            const detail = dt.Report[i].detail;
            const name = dt.Report[i].name;
            const phonenumber = dt.Report[i].phonenumber;
            const lineid = dt.Report[i].lineid;
            const email = dt.Report[i].email;


            cy.visit('/');
            cy.wait(3000);
            cy.contains('tr', compname)
                //cy.contains('tr', compphone)
                .click();
            cy.wait(10000);
            cy.contains('tr', pjname)
                .find('.chakra-button.css-ufm2bu')
                .click();

            cy.get('button.chakra-button.css-11mxzrk').click();
            cy.get('#field-\\:r38\\:').type(title).should('have.value', title);
            cy.get('#field-\\:r39\\:').type(detail).should('have.value', detail);
            cy.get('#field-\\:r3a\\:').type(name).should('have.value', name);
            cy.get('#field-\\:r3b\\:').type(phonenumber).should('have.value', phonenumber);
            cy.get('#field-\\:r3c\\:').type(lineid).should('have.value', lineid);
            cy.get('#field-\\:r3d\\:').type(email).should('have.value', email);


            //cy.get('.chakra-button.css-oeqjjt').click();
            cy.get('.chakra-button.css-mk2142').click(); //save
            cy.wait(3000)
            cy.get('.chakra-alert__title.css-tidvy5').should('be.visible');
        });
    })
    it('Edit Report', () => {
        cy.fixture('data').then((dt) => {
            const i = 5;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;

            const title1 = dt.Report[0].title;
            const title2 = dt.Report[i].title;
            const detail = dt.Report[i].detail;
            const name = dt.Report[i].name;
            const phonenumber = dt.Report[i].phonenumber;
            const lineid = dt.Report[i].lineid;
            const email = dt.Report[i].email;

            cy.visit('/');
            cy.wait(3000);
            cy.contains('tr', compname)
                //cy.contains('tr', compphone)
                .click();
            cy.wait(10000);
            cy.contains('tr', pjname)
                .find('.chakra-button.css-ufm2bu')
                .click();
            //cy.contains('tr', title)
            cy.contains('tr', title1)
                .click();

            cy.get('.chakra-button.css-khxrjt').click();
          
            cy.get('#field-\\:r3q\\:').clear().type(title2).should('have.value', title2);
            cy.get('#field-\\:r3r\\:').clear().type(detail).should('have.value', detail); //name
           
       
            cy.get('.chakra-button.css-ts9s1a').click //save
            // cy.get('.chakra-modal__close-btn.css-1ik4h6n').click() //close
        })
    });

    it('Change Status to in progress', () => {
        cy.fixture('data').then((dt) => {
            const i = 1;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;

            const title = dt.Report[i].title;
            const detail = dt.Report[i].detail;
            const name = dt.Report[i].name;
            const phonenumber = dt.Report[i].phonenumber;
            const lineid = dt.Report[i].lineid;
            const email = dt.Report[i].email;

            cy.visit('/');
            cy.wait(3000);
            //cy.contains('tr', '0912223333')
            cy.contains('tr', compname)
                .click();
            cy.wait(10000);
            cy.contains('tr', pjname)
                .find('.chakra-button.css-ufm2bu')
                .click();
            cy.contains('tr', title)
                // cy.contains('tr', 'test')
                .click();

            cy.get('#field-\\:r3m\\:').select('กำลังดำเนินการ');
            // cy.get('#field-\\:r3m\\:').type('1');
            cy.get('#field-\\:r3o\\:').type('in progress');
            cy.get('.chakra-button.css-10qgkhf').click() //close
            // cy.get('.chakra-button.css-1qgojui').click() //save
        })
    });
    it('Change Status to done', () => {
        cy.fixture('data').then((dt) => {
            const i = 2;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;

            const title = dt.Report[i].title;
            const detail = dt.Report[i].detail;
            const name = dt.Report[i].name;
            const phonenumber = dt.Report[i].phonenumber;
            const lineid = dt.Report[i].lineid;
            const email = dt.Report[i].email;

            cy.visit('/');
            cy.wait(3000);
            //cy.contains('tr', '0912223333')
            cy.contains('tr', compname)
                .click();
            cy.wait(10000);
            cy.contains('tr', pjname)
                .find('.chakra-button.css-ufm2bu')
                .click();
            cy.contains('tr', title)
                // cy.contains('tr', 'test')
                .click();

            cy.get('#field-\\:r3m\\:').select('เสร็จสิ้น');
            cy.get('#field-\\:r3o\\:').type('Bug');
            cy.get('#field-\\:r3p\\:').type('fix bug is done');
            cy.get('.chakra-button.css-10qgkhf').click() //close
            // cy.get('.chakra-button.css-1qgojui').click() //save
        
        })
    });
    it('Change Status to cancel', () => {
        cy.fixture('data').then((dt) => {
            const i = 3;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;

            const title = dt.Report[i].title;
            const detail = dt.Report[i].detail;
            const name = dt.Report[i].name;
            const phonenumber = dt.Report[i].phonenumber;
            const lineid = dt.Report[i].lineid;
            const email = dt.Report[i].email;

            cy.visit('/');
            cy.wait(3000);
            //cy.contains('tr', '0912223333')
            cy.contains('tr', compname)
                .click();
            cy.wait(10000);
            cy.contains('tr', pjname)
                .find('.chakra-button.css-ufm2bu')
                .click();
            cy.contains('tr', title)
                // cy.contains('tr', 'test')
                .click();

            cy.get('#field-\\:r3m\\:').select('ยกเลิก');
            cy.get('#field-\\:r3o\\:').type('Cancel');
            cy.get('#field-\\:r3p\\:').type('Cancel');
            cy.get('.chakra-button.css-10qgkhf').click() //close
            //cy.get('.chakra-button.css-1qgojui').click() //save
        })
    });
});
