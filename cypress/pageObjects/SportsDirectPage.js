import BasePage from "./Base.page"

class SportsDirectPage extends BasePage {
  static get url() {
    return "https://lv.sportsdirect.com/";
  }

  static get openBrands() {
    return cy.get('[id="lnkTopLevelMenu_2579840"]');
  }
  static get addidas() {
    return cy.get('[class="Adidas"]');
  }
  static get trainers() {
    return cy.get('[class="slideName"]');
  }
  static get trainersTypes() {
    return cy.get('[class="FilterName"]');
  }
  static get filterValue() {
    return cy.get('[class="FilterValue"]');
  }
  static get clickBoot() {
    return cy.get('[title="adidas - Grand Court SE Trainers Mens"]');
  }
  

  

  
  
  
  
  
}

export default SportsDirectPage;
