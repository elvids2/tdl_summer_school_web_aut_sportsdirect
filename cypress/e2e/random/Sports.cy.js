import SportsDirectPage from "../../pageObjects/SportsDirectPage";

describe("visit sports direct", () => {
  beforeEach(() => {
    SportsDirectPage.visit();
  });
  

  

  it("Sports Direct",() =>{

    SportsDirectPage.openBrands.click();
    
    
  })
  
});