// Constants for PAYE, NHIF, and NSSF rates
const PAYE_RATES = [
    { minMonthly: 0, maxMonthly: 24000, rate: 10 },
    { minMonthly: 24001, maxMonthly: 32333, rate: 25 },
    { minMonthly: 32334, maxMonthly: 500000, rate: 30 },
    { minMonthly: 500001, maxMonthly: 800000, rate: 32.5 },
    { minMonthly: 800001, maxMonthly: Infinity, rate: 35 },
  ];
  
  const NHIF_RATES = [
    { minGrossPay: 0, maxGrossPay: 5999, deduction: 150 },
    { minGrossPay: 6000, maxGrossPay: 7999, deduction: 300 },
    { minGrossPay: 8000, maxGrossPay: 11999, deduction: 400 },
    { minGrossPay: 12000, maxGrossPay: 14999, deduction: 500 },
    { minGrossPay: 15000, maxGrossPay: 19999, deduction: 600 },
    { minGrossPay: 20000, maxGrossPay: 24999, deduction: 750 },
    { minGrossPay: 25000, maxGrossPay: 29999, deduction: 850 },
    { minGrossPay: 30000, maxGrossPay: 34999, deduction: 900 },
    { minGrossPay: 35000, maxGrossPay: 39999, deduction: 950 },
    { minGrossPay: 40000, maxGrossPay: 44999, deduction: 1000 },
    { minGrossPay: 45000, maxGrossPay: 49999, deduction: 1100 },
    { minGrossPay: 50000, maxGrossPay: 59999, deduction: 1200 },
    { minGrossPay: 60000, maxGrossPay: 69999, deduction: 1300 },
    { minGrossPay: 70000, maxGrossPay: 79999, deduction: 1400 },
    { minGrossPay: 80000, maxGrossPay: 89999, deduction: 1500 },
    { minGrossPay: 90000, maxGrossPay: 99999, deduction: 1600 },
    { minGrossPay: 100000, maxGrossPay: Infinity, deduction: 1700 },
  ];
  
  const NSSF_RATES = [
    { minPensionablePay: 0, maxPensionablePay: 6000, employeeContribution: 0.06, employerContribution: 0.06 },
    { minPensionablePay: 6001, maxPensionablePay: 18000, employeeContribution: 0.06, employerContribution: 0.06 },
  ];
  
  // Function to calculate PAYE deduction
  function calculatePAYE(grossSalary) {
    for (const rate of PAYE_RATES) {
      if (grossSalary >= rate.minMonthly && grossSalary <= rate.maxMonthly) {
        return (grossSalary * (rate.rate / 100)).toFixed(2);
      }
    }
    return 0;
  }
  
  // Function to calculate NHIF deduction
  function calculateNHIF(grossPay) {
    for (const rate of NHIF_RATES) {
      if (grossPay >= rate.minGrossPay && grossPay <= rate.maxGrossPay) {
        return rate.deduction;
      }
    }
    return 0;
  }
  
  // Function to calculate NSSF deduction
  function calculateNSSF(pensionablePay) {
    for (const rate of NSSF_RATES) {
      if (pensionablePay >= rate.minPensionablePay && pensionablePay <= rate.maxPensionablePay) {
        return (pensionablePay * rate.employeeContribution).toFixed(2);
      }
    }
    return 0;
  }
  
  // Function to calculate net salary
  function calculateNetSalary(basicSalary, benefits) {
    const grossPay = basicSalary + benefits;
    const nhifDeduction = calculateNHIF(grossPay);
    const pensionablePay = basicSalary; // Assuming the entire basic salary is pensionable
    const nssfDeduction = calculateNSSF(pensionablePay);
    const payeDeduction = calculatePAYE(grossPay);
  
    const netSalary = grossPay - (nhifDeduction + nssfDeduction + payeDeduction);
    return netSalary.toFixed(2);
  }
  
  // Input basic salary and benefits
  const basicSalary = parseFloat(prompt("Enter your basic salary: "));
  const benefits = parseFloat(prompt("Enter the value of your benefits: "));
  
  // Calculate and display net salary
  const netSalary = calculateNetSalary(basicSalary, benefits);
  console.log(`Net Salary: ${netSalary} KES`);
  