/// <reference types="cypress" />

describe("My Course", ()=> {
    beforeEach(() => { 
        cy.visit("https://8wc5wa.capedia.work/")
    })

      it("Create Course", () => {
         cy.contains("Sign In").click()
         cy.get("#id_login").type("coachaccc@gmail.com")
         cy.get("#id_password").type("Reds123!")
         cy.contains("Login").click()
         cy.contains("Coach01").should("be.visible")
         cy.contains("My Course").click()
         cy.contains("Create Course").click()
         cy.get("#id_course_name").type("automation testing from cypress")
         cy.get("#id_price").type("30000")
         cy.get("#id_category_0").uncheck()
         cy.get("#id_category_1").check({force:true})
         cy.get("#id_category_2").uncheck()
         cy.get("#id_booking_duration").select("Full day seminar")
         cy.get("#id_language_0").check({force:true})
         cy.get("#id_language_1").check({force:true})
         cy.get("#id_total_session").clear()
         cy.get("#id_total_session").type("3")
         cy.get("#id_subsidy_0").check({force:true})
         cy.get("#id_is_online").check({force:true})
         cy.get("#id_is_in_person").check({force:true})
         cy.get("#id_course_description").type("Preparation {enter} Manage the environment; project professionalism and credibility; build rapport, effectively use the technology; {enter}{enter} Virtual Selling Skills {enter} Project your presence and engage in meaningful discussions while holding the customer attention.")
         cy.get("#id_topic_covered").type("Preparation {enter} Manage the environment; project professionalism and credibility; build rapport, effectively use the technology; {enter}{enter} Virtual Selling Skills {enter} Project your presence and engage in meaningful discussions while holding the customer attention.")
         cy.get("#id_suggested_agenda").type("1:00 p.m. - Introduction ")
         cy.get("#id_suggested_agenda").type("{enter}")
         cy.get("#id_suggested_agenda").type("1:30 p.m. - Start Presentation")
         cy.get("#id_suggested_agenda").type("{enter}")
         cy.get("#id_suggested_agenda").type("3:30 p.m. - Closing Ceremony")
         cy.get("#id_material_provided").type("1. E-book on Mastering Presentation Skills, composed by Jon Brodeur")
         cy.get("#id_course_video").type("https://www.youtube.com/watch?v=Og_OJhN7UdQ")
         cy.get("#id_course_video_title").type("Room Design Interior")
         cy.contains("Preview Draft").click()
         cy.contains("Update Course").click()
         //cy.contains("save").click()
      })

     it("Validate Cretead Course", () => {
        cy.contains("Sign In").click()
        cy.get("#id_login").type("coachaccc@gmail.com")
        cy.get("#id_password").type("Reds123!")
        cy.contains("Login").click()
        cy.contains("Coach01").should("be.visible")
        cy.contains("My Course").click()
        cy.contains("automation testing from cypress").should("be.visible")
        cy.get(".sme-table-child-01").eq(37).click()
        cy.contains("View on main site").click({force:true})
     })
})