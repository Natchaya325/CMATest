describe('E2E', () => {
    it('Login', () => {
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
    it('Add company', () => {
        cy.fixture('data').then((dt) => {
            const i = 9;
            const compname = dt.Company[i].compname;
            const compadds = dt.Company[i].compadds;
            const persname = dt.Company[i].persname;
            const compphone = dt.Company[i].compphone;
            const comptax = dt.Company[i].comptax;


            cy.visit('/');
            cy.wait(3000);

            //button to open the form
            cy.get('.chakra-button.css-z7r23k').click();
            cy.wait(2000);
            // Company name
            cy.get('#field-\\:re\\:').type(compname).should('have.value', compname);
            // Address
            cy.get('#field-\\:rf\\:').type(compadds).should('have.value', compadds);
            // Person name
            cy.get('#field-\\:rg\\:').type(persname).should('have.value', persname);
            // Phone number
            cy.get('#field-\\:rh\\:').type(compphone).should('have.value', compphone);
            // Taxpayer ID number
            cy.get('#field-\\:ri\\:').type(comptax).should('have.value', comptax);

            // cy.get('.chakra-button.css-1coszab').click(); //save
            // cy.wait(3000);
            // cy.get('.chakra-alert.css-qret8q').should('be.visible');

            // cy.contains('tr', compname)
        });
        
    });
    it('Add Project', () => {
        cy.fixture('data').then((dt) => {
            const i = 4;
            const j = 9;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;
            const pjinitial = dt.Project[i].pjinitial;
            const startdate = dt.Project[i].startdate;
            const enddate = dt.Project[i].enddate;
            const price = dt.Project[i].price;

            cy.visit('/');
            cy.wait(3000);
            //cy.contains('tr', '0912345678')
            cy.contains('tr', compname)
                .click();
            cy.wait(10000);
            cy.get('button.chakra-button.css-wx3u2w').first().click();


            cy.get('input[name="projectName"]').type(pjname).should('have.value', pjname);
            cy.get('input[name="shortName"]').type(pjinitial).should('have.value', pjinitial);

            cy.get('input[name="startMA"]').type(startdate).should('have.value', startdate);
            cy.get('input[name="endMA"]').type(enddate).should('have.value', enddate);
            cy.get('input[name="cost"]').type(price).should('have.value', price);
            // cy.get('.chakra-button.css-1coszab').click();

        });
    });
    it('Add report', () => {
        cy.fixture('data').then((dt) => {
            const i = 1;
            const j = 9;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[4].pjname;

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
            cy.get('#field-\\:r2s\\:').type(title).should('have.value', title);
            cy.get('#field-\\:r2t\\:').type(detail).should('have.value', detail);
            cy.get('#field-\\:r2u\\:').type(name).should('have.value', name);
            cy.get('#field-\\:r2v\\:').type(phonenumber).should('have.value', phonenumber);
            cy.get('#field-\\:r30\\:').type(lineid).should('have.value', lineid);
            cy.get('#field-\\:r31\\:').type(email).should('have.value', email);


            //cy.get('.chakra-button.css-oeqjjt').click();
            // cy.get('.chakra-button.css-mk2142').click(); //save
            // cy.wait(3000)
            // cy.get('.chakra-alert__title.css-tidvy5').should('be.visible');
        });
    })
    it('Add report2', () => {
        cy.fixture('data').then((dt) => {
            const i = 2;
            const j = 9;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[4].pjname;

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
            cy.get('#field-\\:r2s\\:').type(title).should('have.value', title);
            cy.get('#field-\\:r2t\\:').type(detail).should('have.value', detail);
            cy.get('#field-\\:r2u\\:').type(name).should('have.value', name);
            cy.get('#field-\\:r2v\\:').type(phonenumber).should('have.value', phonenumber);
            cy.get('#field-\\:r30\\:').type(lineid).should('have.value', lineid);
            cy.get('#field-\\:r31\\:').type(email).should('have.value', email);


            //cy.get('.chakra-button.css-oeqjjt').click();
            // cy.get('.chakra-button.css-mk2142').click(); //save
            // cy.wait(3000)
            // cy.get('.chakra-alert__title.css-tidvy5').should('be.visible');
        });
    })
    it('Add report3', () => {
        cy.fixture('data').then((dt) => {
            const i = 3;
            const j = 9;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[4].pjname;

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
            cy.get('#field-\\:r2s\\:').type(title).should('have.value', title);
            cy.get('#field-\\:r2t\\:').type(detail).should('have.value', detail);
            cy.get('#field-\\:r2u\\:').type(name).should('have.value', name);
            cy.get('#field-\\:r2v\\:').type(phonenumber).should('have.value', phonenumber);
            cy.get('#field-\\:r30\\:').type(lineid).should('have.value', lineid);
            cy.get('#field-\\:r31\\:').type(email).should('have.value', email);


            //cy.get('.chakra-button.css-oeqjjt').click();
            // cy.get('.chakra-button.css-mk2142').click(); //save
            // cy.wait(3000)
            // cy.get('.chakra-alert__title.css-tidvy5').should('be.visible');
        });
    })
    it('Change Status to in progress', () => {
        cy.fixture('data').then((dt) => {
            const i = 1;
            const j = 9;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[4].pjname;

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

            cy.get('#field-\\:r3k\\:').select('กำลังดำเนินการ');
            // cy.get('#field-\\:r3m\\:').type('1');
            cy.get('#field-\\:r3m\\:').type('in progress');
            // cy.get('.chakra-button.css-10qgkhf').click() //close
            cy.get('.chakra-button.css-1qgojui').click() //save
        })
    });
    it('Change Status to done', () => {
        cy.fixture('data').then((dt) => {
            const i = 2;
            const j = 9;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[4].pjname;

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

            cy.get('#field-\\:r3k\\:').select('เสร็จสิ้น');
            cy.get('#field-\\:r3m\\:').type('Bug');
            cy.get('#field-\\:r3n\\:').type('fix bug is done');
            // cy.get('.chakra-button.css-10qgkhf').click() //close
            cy.get('.chakra-button.css-1qgojui').click() //save
        
        })
    });
    it('Change Status to cancel', () => {
        cy.fixture('data').then((dt) => {
            const i = 3;
            const j = 9;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[4].pjname;

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

            cy.get('#field-\\:r3k\\:').select('ยกเลิก');
            cy.get('#field-\\:r3m\\:').type('Cancel');
            cy.get('#field-\\:r3n\\:').type('Cancel');
            // cy.get('.chakra-button.css-10qgkhf').click() //close
            cy.get('.chakra-button.css-1qgojui').click() //save
        })
    });
});