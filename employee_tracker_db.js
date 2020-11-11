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
            type: "list",
            name: "work",
            message: "choose one of the following",
            choices: ["Add Employee", "Add Role", "Add Department", "View Employees", "View Employee Role", "View Departments", "Update Employee", "Delete Employee", "Delete Employee Role", "Delete Department"]
        }

        //Build a command-line application that at a minimum allows the user to:


        function addEmployees() {
            connection.query("SELECT * FROM role", function (err, data) {
                if (err) throw err;
                console.log(data)
                let role = data.map(role => {
                    return { name: role.title, value: role.id }
                })
        inquirer
            .prompt([
                {
                    name: "input",
                    type: "first_name",
                    message: "Name of employee your add."
                },
                {
                type: "input",
                name: "last_name",
                message: "Last name of the employee your add:"
            },
            {
                type: "list",
                name: "role_id",
                message: "Add employee role:",
                choices: role
            },
            {
                type: "list",
                name: "manager_id",
                message: "Add manager for employee:",
                choices: manager
            }
            ]).then(answers => {
                connection.query("INSERT INTO department (name) VALUES (?)", [answers.name], function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    employment();
                })
            })
    };
    
    function addRole() {
        connection.query("SELECT * FROM department", function (err, data) {
            if (err) throw err;
            console.log(data)
            let department = data.map(dept => {
                return { name: name, value: dept.id }
            })
        inquirer
            .prompt([
                {
                    name: "input",
                    type: "title",
                    message: "What Title would you like to add",
                },
                {
                    name: "input",
                    type: "department_id",
                    message: "what role will department take?",
                },
                {
                    name: "input",
                    type: "salary",
                    message: "Salary or each title",
                }
            ]).then(answers => {
                connection.query("INSERT INTO role (title, salary, department_id) VALUES ", function (err, data) {
                    if (err) throw err;
                    console.log(data);
                    employment();
                })
            })
    }
      
    function addDepartment() {
        inquirer
            .prompt(
                {
                    name: "input",
                    type: "department_name",
                    message: "Name of the department you would like to add",
                }
            ).then(answers => {
                connection.query("INSERT INTO department (department_name) VALUES ()", [answers.department_name], function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    employment();
    }
    
    function viewDepartments() {
        connection.query("SELECT * FROM department", function (err, data) {
            if (err) throw err;
            console.table(data);
            employment()
        })
    }
      
    function viewEmployees() {
        connection.query("SELECT * FROM employee", function (err, data) {
            if (err) throw err;
            console.table(data)
            employment();
        })
    }
    
    function viewRoles() {
        connection.query("SELECT * FROM role", function (err, data) {
            if (err) throw err;
            console.table(data)
            employment();
        })
    
    }



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