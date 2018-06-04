import React from 'react';

class FilterObject extends React.Component {

  constructor() {
    super();

    this.state = {
        employees: [
            {
                name: "Dean",
                title: "Web Developer",
                age: 31
            },
            {
                name: "Joad",
                title: "Dr",
                age: 37
            },
            {
                name: "Eli",
                title: "Network Engineer"
            },
        ],
        userInput: "",
        filteredEmployees: []
    }
  }

  changeUserInput(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(prop) {
    var employees = this.state.employees;
    console.log(employees)
    var filteredEmployees = [];
    
    for ( var i = 0; i < employees.length; i++ ) {
      if ( employees[i].hasOwnProperty(prop) ) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (event) => this.changeUserInput(event.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
}
export default FilterObject;