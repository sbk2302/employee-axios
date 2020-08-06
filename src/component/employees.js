import React from 'react';
import axios from "axios";

import EmployeeDetail from './employeedetail'

class Employees extends React.Component {

    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
    }

    getAllEmployees=()=>{
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
                .then(response=>{
                    console.log(response);
                    console.log(response.data.data)
                    this.setState({employees: response.data.data})
                    console.log(this.state.friends);
                }, error=>{
                    console.error(error);
                })
    }
     componentWillMount(){
        this.getAllEmployees()
    }
    
    renderAllEmployees=()=>{
        return this.state.employees.map(employee=>{
            return(
              
                    <EmployeeDetail
                        key={employee.id}
                        id={employee.id}
                        name={employee.employee_name}
                        salary={employee.employee_salary}
                        age={employee.employee_age}
                    ></EmployeeDetail>
                
            )
        })
    }
    render() { 
        return ( 
                <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Age</th>
                            <th colSpan='4'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                                {this.renderAllEmployees()}
                        
                        </tbody>

                    </table>
                    {this.state.deleteSuccess &&
                    <div>
                          <h3>Friend deleted success!!!!</h3>  
                    </div>
                    }
                </div>
         );
    }
}
 
export default Employees;