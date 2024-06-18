export {};

describe('Verify component rendering for all screen sizes', () => {
    const viewports: (Cypress.ViewportPreset | [number, number])[] = [
        'iphone-5',
        'iphone-6',
        'iphone-x',
        'ipad-2',
        'ipad-mini',
        [320, 480],  // Small mobile
        [360, 640],  // Mobile
        [375, 667],  // Mobile (iPhone 8)
        [414, 736],  // Mobile (iPhone 8 Plus)
        [600, 960],  // Small tablet
        [768, 1024], // Tablet
        [800, 1280], // Large tablet
        [1024, 768], // Desktop
        [1280, 800], // Desktop
        [1366, 768], // Desktop
        [1440, 900], // Large screen
        [1600, 900], // Large screen
        [1920, 1080], // Full HD screen
        [2560, 1440], // QHD screen
        [3840, 2160], // 4K screen
    ];

    beforeEach(() => {
        cy.visit('http://localhost:9000/#/chat');
    });

    viewports.forEach((viewport) => {
        it(`should render all card components correctly at ${Array.isArray(viewport) ? `${viewport[0]}x${viewport[1]}` : viewport} viewport`, () => {
            if (Array.isArray(viewport)) {
                cy.viewport(viewport[0], viewport[1]);
            } else {
                cy.viewport(viewport);
            }

            // Check if the card is rendered
            cy.get('#chat-card').should('be.visible');

            // Check the inner components
            cy.get('#card-section').should('be.visible');
            cy.get('#title').should('be.visible');

            // Check for image or box or channel
            cy.get('.styled-image-container').then($el => {
                if ($el.length) {
                    cy.get('.styled-image').should('be.visible');
                } else {
                    cy.get('.box, .channel').should('be.visible');
                }
            });

            // Check for unread badge if present
            cy.get('.right-section').then($el => {
                if ($el.find('.unread').length) {
                    cy.get('.unread').should('be.visible');
                }
            });

            // Ensure the card has consistent margins and height
            cy.get('#chat-card').should('have.css', 'margin-bottom', '8px');
            cy.get('#chat-card').should('have.css', 'margin-right', '8px');
            cy.get('#chat-card').should('have.css', 'margin-left', '8px');
            cy.get('#chat-card').should('have.css', 'height', '48px');
        });
    });
});



