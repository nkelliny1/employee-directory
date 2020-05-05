import React, { Component } from "react";

class Employee extends Component {
    constructor(props) {
      super(props);
      this.state = { data: [] };
      this.onSort = this.onSort.bind(this)
    }
  
    componentDidMount() {
        this.setState({data: [
            {
            employee: "Mary Smith",
            title:"Manager",
            salary:"$90,000"
            },
            {
            employee: "John Appleseed",
            title:"Tech Lead",
            salary:"$80,000"
            },
            {
            employee: "Anthony Patrick",
            title:"Developer",
            salary:"$70,000"
            },
            {
            employee: "George Baker",
            title:"Executive Manager",
            salary:"$100,000"
            },
            {
            employee: "Harry Fitzsimmons",
            title:"Product Manager",
            salary:"$95,000"
            },
            {
            employee: "Justin Coleson",
            title:"Software Engineer",
            salary:"$85,000"
            },
    
    ]});
    }
  
    onSort(event, sortKey){
      const data = this.state.data;
      data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      this.setState({data})
    }
  
    render() {
      var newdata = this.state.data;
  
      return (
      <div>
        <h4>Click on "Employee Name", "Employee Title", or "Employee Salary" to sort table</h4>
        <table className="table">
          <thead>
            <tr>
              <th onClick={e => this.onSort(e, 'employee')} style={{cursor: "pointer"}}>Employee Name</th>
              <th onClick={e => this.onSort(e, 'title')} style={{cursor: "pointer"}}>Employee Title</th>
              <th onClick={e => this.onSort(e, 'salary')} style={{cursor: "pointer"}}>Employee Salary</th>
            </tr>
          </thead>
          <tbody>
            {newdata.map(function(employee, index) {
              return (
                <tr key={index} data-item={employee}>
                  <td data-title="empname">{employee.employee}</td>
                  <td data-title="emptitle">{employee.title}</td>
                  <td data-title="empsal">{employee.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      );
    }
  }
  
  export default Employee;