export{};

describe('Verify chat routing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000/#/chat');
    });

    it('should navigate to the correct route when clicked', () => {
        // Select all card components
        cy.get('.q-card').then((cards) => {
            if (cards.length > 0) {
                cy.wrap(cards).first().click();

                // Verify navigation to the expected route with the correct path
                cy.location('pathname').should('eq', '/');
            }
        });
    });
});
