import React,{Component} from 'react';

class PersonCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            clickAge: this.props.age
        }
    }
    clickHandler = () => {
        this.setState({
            clickAge: this.state.clickAge + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{ this.props.lastName}, {this.props.firstName }</h1>
                <h4>Age { this.state.clickAge}</h4>
                <h4>{ this.props.hairColor}</h4>
                <button onClick={this.clickHandler}>Birthday button for {this.props.lastName}, {this.props.firstName}</button>
                 </div>
)
    }
}
export default PersonCard;
