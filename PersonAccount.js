class PersonAccount{
    constructor(firstName,lastName){
        this.firstName= firstName; // 
        this.lastName=lastName;
        this.incomes=[]; //ingresos 
        this.expenses=[] // gastos
    }
    //totalIngresos
    totalIncome(){
        let sum=0
        for (let income of this.incomes) {
            sum+=income.amount
        }
        return sum
    }
    //totalEgresos
    totalExpense(){
        let sum=0
        for (let expense of this.expenses) {
            sum+=expense.amount
        }
        return sum
    }
    //añdirIngresos
    addIncome(amount,description){
        this.incomes.push({amount,description});
    }    
    //añdirGastos
    addExpense(amount,description){
        this.expenses.push({amount,description})
    }
    //cuentaBalance
    accountBalance(){
        return this.totalIncome - this.totalExpense /// Ingresos menos Gastos
    }
    //cuentaInformacion
    accountInfo(){
        console.log(`Name : ${this.firstName} ${this.lastName}`); //Nombre Completo
        console.log(`Total Income : ${this.totalIncome()}`); //total Ingreso
        console.log(`Total Expense : ${this.totalExpense()}`); //total Egreso
        console.log(`Total Balance : ${this.accountBalance()}`); //total Egreso
    }
}
const persona1= new PersonAccount('Esteban','Arce')
persona1.addIncome(2000,'Salary')
persona1.addExpense(1000,'Rent')
persona1.accountInfo()