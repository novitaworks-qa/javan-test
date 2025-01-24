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

// describe('Form Submission - Error Popup', () => {
//   it('should show error popup after submitting form with invalid data', () => {
//     cy.visit('https://javan.co.id/contact')
//     cy.get('input[name="name"]').type('John Doe')
//     cy.get('input[name="nickname"]').type('John')
//     cy.get('input[name="email"]').first().type('invalid@email') // Memilih elemen pertama
//     cy.get('input[name="phone"]').type('086789000111')
//     cy.get('input[name="institution"]').type('jaya abadi')
//     cy.get('select[name="subject"]').select('Ads')  // Ubah klik menjadi select
//     cy.get('textarea[name="message"]').type('johndooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')

//     // Kirimkan formulir
//     cy.get('button[type="submit"]').click()

//     // Memastikan popup muncul dengan pesan error yang sesuai
//     cy.get('.popup-message').should('be.visible').and('contain', 'Please enter a valid email address')
//   })
// })

