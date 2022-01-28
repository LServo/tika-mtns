class Employee {
    constructor(salary, discount) {
        this.salary = salary
        this.discount = discount
    }
    
    calculateRealSalary() {
        return this.salary * this.discount;
    }
}


const employee = function (salary, discount) {
    return {
        calculateRealSalary(){
            return salary * discount
        }
    }
}

function mult2(x) {
    return x * 2
}
mult2(10)


const employee = new Employee(1000, 0.1)
console.log(employee.calculateRealSalary())

const functionalEmployee = employee(1000, 0.1)
console.log(functionalEmployee.calculateRealSalary())


