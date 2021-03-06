class login{
    mainPage(){
        return cy.visit('http://automationpractice.com/')
    }
    clickLoginButton = () =>{
       return cy.get('.login').click()
    }
    emailForm(){
        return cy.get('#email')
    }
    createAccountButtonClick =()=>{
        cy.get('#SubmitCreate').click()
    }
    FirstNameForm(){
        cy.get('//*[@id="firstname"]')
    }
    LastNameForm(){
        cy.get('#customer_lastname')
    }
    genderRadioMr= ()=>{
        cy.get('#id_gender1').click()
    }
    genderRadioMrs=()=>{
        cy.get('#id_gender2').click()
    }
    yourAddressFirstNameForm(name){
        cy.get('#customer_firstname').type(name)
    }
    yourAddressLastNameForm(lastname){
        cy.get('#customer_lastname').last().type(lastname)
    }
    pickDay = (day)=>{
        cy.get('#days').select(day)
    }
    pickMonth = (month)=> {
        cy.get('#months').select(month)
    }
    pickYear = (year)=> {
        cy.get('#years').select(year)
    }
    enterPhone = (phone) =>{
        cy.get('#phone_mobile').type(phone)
    }
    enterAddresses = (address, zipcode, address1, state, city ) =>{
        cy.get('#alias').clear().type(address)
        cy.get('#postcode').type(zipcode)
        cy.get('#address1').type(address1)
        cy.get('#id_state').select(state)
        cy.get('#city').type(city)
    }
    pickCountry = (country) =>{
        cy.get('#id_country').select(country)
    }
    passwordForm = (password) =>{
        cy.get('#passwd').type(password)
    }
    registerAccountButtonClick = () =>{
        cy.get('#submitAccount').click()
    }
    logIntoAccount = () =>{
        cy.get('.login').click()
        cy.get('#email').type('nixed74315@bbsaili.com')
        cy.get('#passwd').type('Test123!')
        cy.get('#SubmitLogin').click()
        cy.get('#header > div.nav > div > div > nav > div:nth-child(1) > a > span').should('contain', 'TestTest TestowyTestowy')
    }
   
}
export default login