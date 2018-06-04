import React from 'react';


class FilterString extends React.Component {
    constructor() {
        super();
        this.state = {
            names: ["Dean", "Joad", "Tanya", "Eli"],
            userInput: "",
            filteredNames: []
        }
    }
    changeUserInput(val) {
        this.setState( { userInput: val } )
    }

    filterNames(userInput) {
        let names = this.state.names;
        let filteredNames = [];

        for ( let i = 0; i < names.length; i++ ) {
            if( names[i].includes(userInput) ) {
                filteredNames.push( names[i] )
            }
        }
        this.setState( {filteredNames: filteredNames} )
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
            <input className="inputLine" onChange={ (event) => this.changeUserInput(event.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
          </div>
        );
    }
}

export default FilterString;