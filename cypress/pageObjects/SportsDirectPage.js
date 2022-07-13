import BasePage from "./Base.page"

class SportsDirectPage extends BasePage {
  static get url() {
    return "https://lv.sportsdirect.com/";
  }

  static get openBrands() {
    return cy.get('[id="lnkTopLevelMenu_2579840"]');
  }
  
  
}

export default SportsDirectPage;
