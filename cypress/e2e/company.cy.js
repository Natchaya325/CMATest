describe('Add Company', () => {
    it('Fill form company1', () => {
        cy.fixture('data').then((dt) => {
            const i = 0;
            const compname = dt.Company[i].compname;
            const compadds = dt.Company[i].compadds;
            const persname = dt.Company[i].persname;
            const compphone = dt.Company[i].compphone;
            const comptax = dt.Company[i].comptax;
            const comptype = dt.Company[i].comptype;

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


            cy.get('.chakra-button.css-1coszab').click(); //save
            cy.wait(3000);
            cy.get('.chakra-alert.css-qret8q').should('be.visible');

            cy.contains('tr', compname)
        });

    });
    
    // it('Fill form company3', () => {
    //     cy.fixture('data').then((dt) => {
    //         const i = 3;
    //         const compname = dt.Company[i].compname;
    //         const compadds = dt.Company[i].compadds;
    //         const persname = dt.Company[i].persname;
    //         const compphone = dt.Company[i].compphone;
    //         const comptax = dt.Company[i].comptax;
    //         const comptype = dt.Company[i].comptype;

    //         cy.visit('/');
    //         cy.wait(3000);

    //         //button to open the form
    //         cy.get('.chakra-button.css-z7r23k').click();
    //         cy.wait(2000);
    //         // Company name
    //         cy.get('#field-\\:re\\:').type(compname).should('have.value', compname);
    //         // Address
    //         cy.get('#field-\\:rf\\:').type(compadds).should('have.value', compadds);
    //         // Person name
    //         cy.get('#field-\\:rg\\:').type(persname).should('have.value', persname);
    //         // Phone number
    //         cy.get('#field-\\:rh\\:').type(compphone).should('have.value', compphone);
    //         // Taxpayer ID number
    //         cy.get('#field-\\:ri\\:').type(comptax).should('have.value', comptax);


    //         cy.get('.chakra-button.css-1coszab').click(); //save
    //         cy.wait(3000);
    //         cy.get('.chakra-alert.css-qret8q').should('be.visible');

    //         cy.contains('tr', compname)
    //     });

    // });
    it('close form', () => {
        cy.visit('/');
        cy.wait(3000);

        //button to open the form
        cy.get('.chakra-button.css-z7r23k').click();
        cy.wait(2000);
        cy.get('.chakra-modal__close-btn.css-3gumf9').click();


    });

    it('Click Clear Button', () => {
        cy.fixture('data').then((dt) => {
            const i = 1;
            const compname = dt.Company[i].compname;
            const compadds = dt.Company[i].compadds;
            const persname = dt.Company[i].persname;
            const compphone = dt.Company[i].compphone;
            const comptax = dt.Company[i].comptax;
            const comptype = dt.Company[i].comptype;

            cy.visit('/');
            cy.wait(3000);

            // this is the button to open the form
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

            cy.get('.chakra-button.css-b2dmhf').click();

            // Company name
            cy.get('#field-\\:re\\:').type(compname).should('not.have.value', '');
            // Address
            cy.get('#field-\\:rf\\:').type(compadds).should('not.have.value', '');
            // Person name
            cy.get('#field-\\:rg\\:').type(persname).should('not.have.value', '');
            // Phone number
            cy.get('#field-\\:rh\\:').type(compphone).should('not.have.value', '');
            // Taxpayer ID number
            cy.get('#field-\\:ri\\:').type(comptax).should('not.have.value', '');

            cy.get('.chakra-modal__close-btn.css-3gumf9').click();
        });
    });

    it('Edit company', () => {
        cy.fixture('data').then((dt) => {
            const i = 3;
            const compname = dt.Company[i].compname;
            const compadds = dt.Company[i].compadds;
            const persname = dt.Company[i].persname;
            const compphone = dt.Company[i].compphone;
            const comptax = dt.Company[i].comptax;
            const comptype = dt.Company[i].comptype;

            cy.visit('/');
            cy.wait(3000);
            cy.contains('tr', 'C Company')
                .find('button.chakra-button.chakra-menu__menu-button.css-z0ulmx')
                .click();

            //view company  
            cy.get('button[type="button"][id="menu-list-\\:r13\\:-menuitem-\\:r14\\:"][role="menuitem"].chakra-menu__menuitem.css-dx09s5[data-index="0"]')
                .click();
            cy.get('button.chakra-modal__close-btn.css-3gumf9').click();

            cy.contains('tr', 'C Company')
                .find('button.chakra-button.chakra-menu__menu-button.css-z0ulmx')
                .click();
            cy.get('button[type="button"][id="menu-list-\\:r13\\:-menuitem-\\:r17\\:"][role="menuitem"].chakra-menu__menuitem.css-dx09s5[data-index="1"]')
                .click();

            cy.wait(2000);

            // Company name
            cy.get('#field-\\:r27\\:').clear().type(compname).should('have.value', compname);
            // Address
            cy.get('#field-\\:r28\\:').clear().type(compadds).should('have.value', compadds);
            // Person name
            cy.get('#field-\\:r29\\:').clear().type(persname).should('have.value', persname);
            // Phone number
            cy.get('#field-\\:r2a\\:').clear().type(compphone).should('have.value', compphone);
            // Taxpayer ID number
            cy.get('#field-\\:r2b\\:').clear().type(comptax).should('have.value', comptax);

            cy.get('.chakra-button.css-1n6ifs3').click(); //save
            cy.wait(4000)
            cy.contains('tr', compname)

        })
    })

    it('Click reload button', () => {
        cy.visit('/');
        cy.wait(3000);
        cy.get('.chakra-button.css-ckzyrd').click();
    })

    it('Click company', () => {
        cy.fixture('data').then((dt) => {
            const i = 0;
            const compname = dt.Company[i].compname;
            const compadds = dt.Company[i].compadds;
            const persname = dt.Company[i].persname;
            const compphone = dt.Company[i].compphone;
            const comptax = dt.Company[i].comptax;
            const comptype = dt.Company[i].comptype;

            cy.visit('/');
            cy.wait(3000);
            cy.contains('tr', compname)
                .click();
        });
    });
    it('Search company', () => {
        cy.fixture('data').then((dt) => {
            const i = 0;
            const compname = dt.Company[i].compname;
            const compadds = dt.Company[i].compadds;
            const persname = dt.Company[i].persname;
            const compphone = dt.Company[i].compphone;
            const comptax = dt.Company[i].comptax;
            const comptype = dt.Company[i].comptype;

            cy.visit('/');
            cy.wait(3000);

            const searchText = compname;

            cy.get('input.chakra-input.css-1ns9ydh')
                .type(searchText)
                .should('have.value', searchText);
            cy.wait(5000);

            cy.contains('td.css-1hzwbx3', searchText);
        });

    });
    it('Cancel Delete company', () => {
        cy.fixture('data').then((dt) => {
            const i = 0;
            const compname = dt.Company[i].compname;
            const compadds = dt.Company[i].compadds;
            const persname = dt.Company[i].persname;
            const compphone = dt.Company[i].compphone;
            const comptax = dt.Company[i].comptax;
            const comptype = dt.Company[i].comptype;

            cy.visit('/');
            cy.wait(3000)
            cy.contains('tr', compname)
                .find('button.chakra-button.chakra-menu__menu-button.css-z0ulmx')
                .click();
            cy.get('button[type="button"][id="menu-list-\\:r1e\\:-menuitem-\\:r1l\\:"][role="menuitem"].chakra-menu__menuitem.css-dx09s5[data-index="2"]')
                .click();

            cy.get('button.chakra-button.css-1n7gabl').click(); //cancel
        });
    })
    it('Delete company', () => {
        cy.fixture('data').then((dt) => {
            const i = 0;
            const compname = dt.Company[i].compname;
            const compadds = dt.Company[i].compadds;
            const persname = dt.Company[i].persname;
            const compphone = dt.Company[i].compphone;
            const comptax = dt.Company[i].comptax;
            const comptype = dt.Company[i].comptype;

            cy.visit('/');
            cy.wait(3000)
            cy.contains('tr', compname)
                .find('button.chakra-button.chakra-menu__menu-button.css-z0ulmx')
                .click();
            cy.get('button[type="button"][id="menu-list-\\:r1e\\:-menuitem-\\:r1l\\:"][role="menuitem"].chakra-menu__menuitem.css-dx09s5[data-index="2"]')
                .click();

            cy.get('button.chakra-button.css-1b93azy').click(); //delete
            cy.wait(4000)
            cy.get('.chakra-alert__title.css-tidvy5').should('be.visible')

        });


    })
    // it('Fill form company2', () => {
    //     cy.fixture('data').then((dt) => {
    //         const i = 2;
    //         const compname = dt.Company[i].compname;
    //         const compadds = dt.Company[i].compadds;
    //         const persname = dt.Company[i].persname;
    //         const compphone = dt.Company[i].compphone;
    //         const comptax = dt.Company[i].comptax;
    //         const comptype = dt.Company[i].comptype;

    //         cy.visit('/');
    //         cy.wait(3000);

    //         //button to open the form
    //         cy.get('.chakra-button.css-z7r23k').click();
    //         cy.wait(2000);
    //         // Company name
    //         cy.get('#field-\\:re\\:').type(compname).should('have.value', compname);
    //         // Address
    //         cy.get('#field-\\:rf\\:').type(compadds).should('have.value', compadds);
    //         // Person name
    //         cy.get('#field-\\:rg\\:').type(persname).should('have.value', persname);
    //         // Phone number
    //         cy.get('#field-\\:rh\\:').type(compphone).should('have.value', compphone);
    //         // Taxpayer ID number
    //         cy.get('#field-\\:ri\\:').type(comptax).should('have.value', comptax);


    //         cy.get('.chakra-button.css-1coszab').click(); //save
    //         cy.wait(3000);
    //         cy.get('.chakra-alert.css-qret8q').should('be.visible');

    //         cy.contains('tr', compname)
    //     });

    // });

});

