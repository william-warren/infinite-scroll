describe("First Name", function () {
    it("Finds the first name", function () {
        cy.visit("http://127.0.0.1:8000/")
        cy.wait(2000)
        cy.contains("Devin Booker")
    })
})

describe("Loads more names", function () {
    it("makes sure the site can load more names", function () {

        cy.get(".scroll-trigger").click()
        cy.wait(2000)
        cy.contains("Dylan Melton")
    })
})

function loadNames() {
    cy.get(".scroll-trigger").click()
}

describe("Loads all of names", function () {
    it("makes sure the site can load all of the names", function () {
        cy.get(".scroll-trigger").click()
        cy.wait(2000)
        cy.get(".scroll-trigger").click()
        cy.wait(2000)
        cy.get(".scroll-trigger").click()
        cy.wait(2000)
        cy.get(".scroll-trigger").click()
        cy.wait(2000)
        cy.contains("Ricky Keisling")
    })
})

