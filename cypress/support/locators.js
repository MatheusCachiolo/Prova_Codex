export const locators = {
    homePage: {
        tittle: 'h1'
    },
    header: {
        calculator: ':nth-child(5) > a'

    },

    formCalculator: {
        verifyTitle: '#calculadora > h2',
        inputPassageValue: '#valorPassagem',
        inputPeople: '#numeroPessoas',
        inputDays: '#diasHospedagem',
        inputDateOfBirth: '#dataNascimento',
        btnCalculate: '#orcamentoForm > button',
        budgetResult: '#resultadoOrcamento',
        labelPassageValue: '[for="valorPassagem"]',
        labelPeople: '[for="numeroPessoas"]',
        labelDays: '[for="diasHospedagem"]',
        labelDateOfBirth: '[for="dataNascimento"]'
    }

}