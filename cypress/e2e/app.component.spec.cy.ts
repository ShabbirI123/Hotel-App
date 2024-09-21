describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/bookings');
  });

  it('should load the homepage and display the title', () => {
    cy.get('.display-4').should('contain.text', 'Hotel Buchungen');
  });

  it('should have navigation links', () => {
    cy.get('a[routerLink="/bookings"]').should('contain.text', 'Overview');
    cy.get('a[routerLink="/create"]').should('contain.text', 'Create');
    cy.get('a[routerLink="/events"]').should('contain.text', 'Events');
  });

  it('should navigate to bookings page when Overview is clicked', () => {
    cy.get('a[routerLink="/bookings"]').click();
    cy.url().should('include', '/bookings');
  });

  it('should navigate to create page when Create is clicked', () => {
    cy.get('a[routerLink="/create"]').click();
    cy.url().should('include', '/create');
    cy.get('h5').should('contain.text', 'Create new Booking');
  });

  it('should navigate to events page when Events is clicked', () => {
    cy.get('a[routerLink="/events"]').click();
    cy.url().should('include', '/events');
    cy.get('h5').should('contain.text', 'Event Benachrichtigung');
  });
})

