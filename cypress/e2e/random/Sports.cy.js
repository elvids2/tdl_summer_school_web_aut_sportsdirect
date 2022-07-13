import SportsDirectPage from "../../pageObjects/SportsDirectPage";

describe("visit sports direct", () => {
  beforeEach(() => {
    SportsDirectPage.visit();
  });
  

  

  it("Sports Direct",() =>{

    SportsDirectPage.openBrands.click();
    SportsDirectPage.addidas.click();
    SportsDirectPage.trainers.contains('Trainers').click();
    SportsDirectPage.trainersTypes.contains('Mens').click();
    SportsDirectPage.trainersTypes.contains('Trainers').click();
    SportsDirectPage.trainersTypes.contains('Court Trainers').click();
    SportsDirectPage.trainersTypes.contains('Leather').click();
    SportsDirectPage.trainersTypes.contains('Black').click();
    SportsDirectPage.filterValue.should('contain', '2');
    //SportsDirectPage.clickBoot.contains('adidas - Grand Court SE Trainers Mens').click();
    //Saaka crashot tapec padevos :D
    
  })
  
});