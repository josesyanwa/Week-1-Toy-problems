CHALLENGE 3

Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

STEPS
-First write the Constants for PAYE, NHIF, and NSSF rates:

These constants are used to store the tax rates for PAYE (income tax), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund).

-Then write the functions to Calculate Deductions:

1.calculatePAYE(grossSalary): This function calculates the PAYE deduction (income tax) based on the provided gross salary. It uses the PAYE rates defined in the constants.
2.calculateNHIF(grossPay): This function calculates the NHIF deduction based on the gross pay. It uses the NHIF rates defined in the constants.
3.calculateNSSF(pensionablePay): This function calculates the NSSF deduction based on the pensionable pay. It uses the NSSF rates defined in the constants.

- Then the function to Calculate Net Salary (calculateNetSalary):

.This function takes two parameters: basicSalary and benefits.
.It calculates the gross pay by adding the basic salary and benefits together.
.It calculates the NHIF deduction using calculateNHIF function.
.It assumes that the entire basic salary is pensionable and calculates the NSSF deduction using calculateNSSF function.
.It calculates the PAYE deduction using calculatePAYE function.
.Finally, it calculates the net salary by subtracting NHIF, NSSF, and PAYE deductions from the gross pay.

-Then you input Basic Salary and Benefits:

The program prompts the user to enter their basic salary and the value of their benefits using prompt. The entered values are converted to floating-point numbers using parseFloat.

-Calculate and Display Net Salary:

The program calculates the net salary using the calculateNetSalary function.
It then displays the net salary using console.log.
