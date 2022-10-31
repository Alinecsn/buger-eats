var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function(){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '3199999999',
            address: {

                postalcode: '31870560',
                street: 'Rua São Cirineu',
                number: '400',
                details:'casa',
                district: 'Ouro Minas',
                city_state: 'Belo Horizonte/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg' 
        }
        return data
    }
}