function findEmployeesRole(name) {
  // employees array preloaded 
  var employees = [
  {firstName:"phani", lastName:"kumar", role:"sme"},
  {firstName:"Dipper", lastName:"John", role:"sme"},
  {firstName:"Morty", lastName:"Smith", role:"Truck Driver"},
  {firstName:"Anna", lastName:"Bell", role:"Admin"},
  ];
  
  var empName = name.split('');
  var role = "";
  for(var i=0;i<employees.length;i++){
     if(name === employees[i].firstName + ' ' +  employees[i].lastName){
        return employees[i].role;
     }
  
  } 
  return "Does not work here!" ;
  // Passed employees role
}

var res = findEmployeesRole("Receptionist");

console.log(res);