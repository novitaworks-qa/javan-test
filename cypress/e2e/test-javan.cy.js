describe('Website Homepage', () => {
  it('should load the homepage successfully', () => {
    cy.visit('https://javan.co.id')
    cy.title().should('include', 'Javan') 
    cy.url().should('eq', 'https://javan.co.id/') 
  })
})

describe('Check Broken Links', () => {
  it('should not have broken links', () => {
    cy.visit('https://javan.co.id')
    cy.get('a').each(($link) => {
      const href = $link.prop('href')
      if (href&& !href.includes('facebook.com/javancs')) { // Ditambahkan spesifik untuk Facebook karena tanpa ini, otomatisasi ke Facebook gagal akibat proteksi anti-bot
        cy.request(href).its('status').should('eq', 200)
      }
    })
  })
})

