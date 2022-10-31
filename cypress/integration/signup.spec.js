/// <reference types="Cypress" />
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'


describe('Signup', ()=> {

   /* beforeEach(function(){
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })

    })*/

    it('User should be deliver', function(){
       
        var deliver = signupFactory.deliver()
   

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMenssage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMenssage)
    })

    it('Incorrect document', function() {
        var deliver = signupFactory.deliver()
        deliver.cpf = '000000141AA'
   
   
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessangeShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function() {
        var deliver = signupFactory.deliver()
        deliver.email = 'aline.com.br'
   
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessangeShouldBe('Oops! Email com formato inválido.')
    })

    context('Required filds',function(){
        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'},
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessangeShouldBe(msg.output)
            })
        })
    })

})