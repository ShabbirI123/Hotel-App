describe('AppComponent UI Tests', () => {
  beforeEach(() => {
    // Bevor jeder Test ausgeführt wird, besuche die Homepage
    cy.visit('/');
  });

  it('should load the homepage and display the title', () => {
    // Überprüfen, ob der Titel korrekt angezeigt wird
    cy.get('.display-4').should('contain.text', 'Hotel Buchungen');
  });

  it('should have navigation links', () => {
    // Überprüfen, ob die Navigationslinks korrekt angezeigt werden
    cy.get('a[routerLink="/bookings"]').should('contain.text', 'Overview');
    cy.get('a[routerLink="/create"]').should('contain.text', 'Create');
    cy.get('a[routerLink="/events"]').should('contain.text', 'Events');
  });

  it('should navigate to bookings page when Overview is clicked', () => {
    // Klicken auf den "Overview"-Link und überprüfen, ob die URL korrekt ist
    cy.get('a[routerLink="/bookings"]').click();
    cy.url().should('include', '/bookings');
  });

  it('should navigate to create page when Create is clicked', () => {
    // Klicken auf den "Create"-Link und überprüfen, ob die URL korrekt ist
    cy.get('a[routerLink="/create"]').click();
    cy.url().should('include', '/create');
    cy.get('h5').should('contain.text', 'Create new Booking');
  });

  it('should navigate to events page when Events is clicked', () => {
    // Klicken auf den "Events"-Link und überprüfen, ob die URL korrekt ist
    cy.get('a[routerLink="/events"]').click();
    cy.url().should('include', '/events');
    // Überprüfe, ob ein spezifisches UI-Element auf der Seite vorhanden ist
    // Dies muss angepasst werden, basierend darauf, was auf der Events-Seite angezeigt wird
    cy.get('h5').should('contain.text', 'Events');
  });
});
