describe('Project & MA', () => {

    it('Close form Add Project1', () => {
        cy.fixture('data').then((dt) => {

            const j = 1;
            const compname = dt.Company[j].compname;

            cy.visit('/');
            cy.wait(3000);
            //cy.contains('tr', '0912345678')
            cy.contains('tr', compname)
                .click();
            cy.wait(10000);
            cy.get('button.chakra-button.css-wx3u2w').first().click();

            cy.get('.chakra-button.css-zp5p0c').click(); // close
        });
    });
    it('Close form Add Project2', () => {
        cy.fixture('data').then((dt) => {

            const j = 1;
            const compname = dt.Company[j].compname;

            cy.visit('/');
            cy.wait(3000);
            //cy.contains('tr', '0912345678')
            cy.contains('tr', compname)
                .click();
            cy.wait(10000);
            cy.get('button.chakra-button.css-wx3u2w').first().click();

            cy.get('.chakra-modal__close-btn.css-1ik4h6n').click(); //close

        });
    });
    it.only('Add Project', () => {
        cy.fixture('data').then((dt) => {
            const i = 1;
            const j = 1;
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


        });
    });
    
    it('Edit project', () => {
        cy.fixture('data').then((dt) => {
            const i = 0;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;
            const pjinitial = dt.Project[i].pjinitial;
            const startdate = dt.Project[i].startdate;
            const enddate = dt.Project[i].enddate;
            const price = dt.Project[i].price;

            cy.visit('/');
            cy.wait(3000);
            cy.contains('tr', compname)
                //cy.contains('tr', compphone)
                .click();
            cy.wait(10000);
            cy.contains('tr', pjname)
                .find('button.chakra-button.chakra-menu__menu-button.css-z0ulmx')
                .click();
            cy.get('[id="menu-list-:r2r:-menuitem-:r2s:"][data-index="0"]').click();

            cy.get('.chakra-button.css-z7gnns').click();
            cy.get('#field-\\:r3l\\:').clear().type('edit');

            cy.get('.chakra-button.css-rls6fp').click(); //cancel
            //cy.get('.chakra-button.css-1bvdnli').click() //save
        })
    })

    it('detail Project', () => {
        cy.fixture('data').then((dt) => {
            const i = 0;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;
            const pjinitial = dt.Project[i].pjinitial;
            const startdate = dt.Project[i].startdate;
            const enddate = dt.Project[i].enddate;
            const price = dt.Project[i].price;

            cy.visit('/');
            cy.wait(3000);
            cy.contains('tr', compname)
                //cy.contains('tr', compphone)
                .click();
            cy.wait(10000);
            cy.contains('tr', pjname)
                .find('button.chakra-button.chakra-menu__menu-button.css-z0ulmx')
                .click();
            cy.wait(3000)
            cy.get('[id="menu-list-:r2r:-menuitem-:r2s:"][data-index="0"]').click();
            cy.wait(3000)
            cy.get('.chakra-button.css-1vyilnk').should('be.visible').click();
        })
    })

    it('Search Project', () => {
        cy.fixture('data').then((dt) => {
            const i = 0;
            const j = 1;
            const compname = dt.Company[j].compname;
            const pjname = dt.Project[i].pjname;
            const pjinitial = dt.Project[i].pjinitial;
            const startdate = dt.Project[i].startdate;
            const enddate = dt.Project[i].enddate;
            const price = dt.Project[i].price;

            cy.visit('/');
            cy.wait(3000);
            //cy.contains('tr', '0912223333')
            cy.contains('tr', compname)
                .click();
            cy.wait(10000);
            const searchText = pjname;

            cy.get('#projectSearch')
                .type(searchText)
                .should('have.value', searchText);
            cy.contains('td.css-wxrlk7', searchText);

        })
    });
});
