describe("home page", () => {
  before(() => {
    cy.visitLoginPage();
  });
  it('should load the dashboard page successfully', () => {
    // Check that the dashboard page loads
    cy.url().should('include', '/AchievementDashboard');
  });


  it("the h1 contains the correct text", () => {
    cy.visitLoginPage();
    cy.get("h1").contains("Achievements")
  });

  it("It should navigate to Add achievement form",()=>{
    cy.visitLoginPage();
    cy.NavigatetoAddAchievementForm()
  })

  it('should load the Add achievement form page successfully', () => {
    cy.visitLoginPage();
    cy.NavigatetoAddAchievementForm()
    cy.url().should('include', '/AddAchievement');
  });

  it("the h2 contains the correct text",() =>{
    cy.visitLoginPage();
    cy.NavigatetoAddAchievementForm()
    cy.get("h2").contains("Add Achievement")
  })

  it("It should check all the relavant labels",()=>{
    cy.visitLoginPage();
    cy.NavigatetoAddAchievementForm()
    cy.CheckAllTheLabels()
  })

  it("It should select the current date",()=>{
    cy.visitLoginPage();
    cy.NavigatetoAddAchievementForm()
    cy.CurrentDateSelection()
  })

  it("It should select the past date",()=>{
    cy.visitLoginPage();
    cy.NavigatetoAddAchievementForm()
    cy.PastDateSelection()
  })

  it("It should select the future date",()=>{
    cy.visitLoginPage();
    cy.NavigatetoAddAchievementForm()
    cy.FutureDateSelection()
  })  

  it("When cancel button is clicked the popup should be closed and it should navigate to dashboard screen",()=>{
    cy.visitLoginPage();
    cy.NavigatetoAddAchievementForm()
    cy.ClickOnCancel()
    cy.NavigatedToDashBoard()
  })

})