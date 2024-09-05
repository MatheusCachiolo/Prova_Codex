
import { locators } from "../support/locators";

describe('Calculator Tests', () => {
  const passageValue = '200';
  const numberOfPeople = '2';
  const numberOfDays = '5';
  const dateOfBirth = '1990-12-12';
  const WrongDateOfBirth = '2010-12-12';
  const expectedBudget = 'Orçamento total: R$ 3900.00';

  beforeEach (() => {
      cy.viewport(1280, 800);
      //visit page
      cy.visit('index.html');

  });

  it('Fill Budget Calculator and verify results', () => {
    cy.get(locators.homePage.tittle).should('have.text', 'Codex Travel'); //Verify page title
    cy.get(locators.header.calculator).click() //click on "Calculadora"
    cy.get(locators.formCalculator.verifyTitle).should('be.visible');//Verify section title
    cy.get(locators.formCalculator.labelPassageValue).should('have.text', 'Valor da passagem:') //Verify passage value label
    cy.get(locators.formCalculator.inputPassageValue).type(passageValue) //input passage value
    cy.get(locators.formCalculator.labelPeople).should('have.text', 'Número de pessoas:') //Verify number of people message
    cy.get(locators.formCalculator.inputPeople).type(numberOfPeople) //input number of people
    cy.get(locators.formCalculator.labelDays).should('have.text', 'Dias de hospedagem:') //Verify number of days label
    cy.get(locators.formCalculator.inputDays).type(numberOfDays) //input days
    cy.get(locators.formCalculator.labelDateOfBirth).should('have.text', 'Data de Nascimento:') //Verify date of birth
    cy.get(locators.formCalculator.inputDateOfBirth).type(dateOfBirth) //type on date of birth
    cy.get(locators.formCalculator.btnCalculate).click() //click on calculate button
    cy.get(locators.formCalculator.budgetResult).should('have.text' , expectedBudget) //Verify Budget

  });

  it('Fill in the budget calculation field without a minimum age', () => {
    cy.get(locators.homePage.tittle).should('have.text','Codex Travel'); //Verify page title
    cy.get(locators.header.calculator).click() //click on "Calculadora"
    cy.get(locators.formCalculator.verifyTitle).should('be.visible');//Verify section title
    cy.get(locators.formCalculator.labelPassageValue).should('have.text', 'Valor da passagem:') //Verify passage value label
    cy.get(locators.formCalculator.inputPassageValue).type(passageValue) //input passage value
    cy.get(locators.formCalculator.labelPeople).should('have.text', 'Número de pessoas:') //Verify number of people message
    cy.get(locators.formCalculator.inputPeople).type(numberOfPeople) //input number of people
    cy.get(locators.formCalculator.labelDays).should('have.text', 'Dias de hospedagem:') //Verify number of days label
    cy.get(locators.formCalculator.inputDays).type(numberOfDays) //input days
    cy.get(locators.formCalculator.labelDateOfBirth).should('have.text', 'Data de Nascimento:') //Verify date of birth
    cy.get(locators.formCalculator.inputDateOfBirth).type(WrongDateOfBirth) //type without minimum age
    cy.get(locators.formCalculator.btnCalculate).click() //click on calculate button
    //verify alert message
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Você deve ter pelo menos 18 anos para fazer uma reserva.');
    });


  });
})

