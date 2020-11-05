const mysql = require("mysql2");
const inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "2017hi!",
    database: "employee_tracker_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    employment();
  });

  function employment() {
    inquirer.prompt([
        {
            type: "",
            name: "",
            message: "",
            choices: [""]
        }

        //Build a command-line application that at a minimum allows the user to:


        function addEmployees() {
          inquirer
              .prompt([
                  {
                      name: "",
                      type: "",
                      message: ""
                  }
              ])
      };
      
      function addRole() {
          inquirer
              .prompt([
                  {
                      name: "",
                      type: "",
                      message: "",
                  }
              ])
      };
      
      function addDepartment() {
          inquirer
              .prompt([
                  {
                      name: "",
                      type: "",
                      message: "",
                  }
              ])
      };
      
      
      function viewEmployees() {};
      
      function viewRole() {};
      
      function viewDepartments() {};
      



      // Bonus points using the ice_creamCRUD activity for help
      
      

 // function updateProduct() {
 //   console.log("Updating all Rocky Road quantities...\n");
//    var query = connection.query(
 //     "UPDATE products SET ? WHERE ?",
 //     [
 //       {
 //         quantity: 100
 //       },
 //       {
 //         flavor: "Rocky Road"
 //       }
 //     ],
 //     function(err, res) {
 //       if (err) throw err;
 //       console.log(res.affectedRows + " products updated!\n");
 //       // Call deleteProduct AFTER the UPDATE completes
  //      deleteProduct();
 //     }
 //   );
  
    // logs the actual query being run
  //  console.log(query.sql);
 // }


 // function deleteProduct() {
   // console.log("Deleting all strawberry icecream...\n");
    //connection.query(
     // "DELETE FROM products WHERE ?",
     // {
     //   flavor: "strawberry"
     // },
     // function(err, res) {
      //  if (err) throw err;
      //  console.log(res.affectedRows + " products deleted!\n");
        // Call readProducts AFTER the DELETE completes
      //  readProducts();
     // }
    //);
 // }