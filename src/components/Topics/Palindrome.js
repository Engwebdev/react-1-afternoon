import React from 'react';


class Palindrome extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            Palindrome: ""
        }
    }

    changeUserInput(val) {
        this.setState( { userInput: val } )
    }

    isPalindrome(userInput) {
        let forwards = userInput;
        let backwords = userInput;
        backwords = backwords.split('');
        backwords = backwords.reverse();
        backwords = backwords.join('');
        

        if( forwards === backwords ) {
            this.setState({ Palindrome: 'true' })
        } else {
            this.setState({ Palindrome: " false" })
        }
    }

    render() {
        return(
            <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={ (event)=> this.changeUserInput(event.target.value) } ></input>
            <button className="confirmationButton" onClick={ ()=> this.isPalindrome(this.state.userInput) } > Check </button>
            <span className="resultsBox"> Palindrome: { this.state.Palindrome } </span>
          </div>
        );
    }
}

export default Palindrome;