import React from 'react';


class EmployeeDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
        }
       
    } 
    render() { 
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.props.salary}</td>
                <td>{this.props.age}</td>                
            </tr>    
        )
    }
       
}
 
export default EmployeeDetail;