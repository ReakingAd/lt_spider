import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class CustomTextInput extends Component{
    constructor( props ){
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus(){
        this.textInput.focus();
    }

    render(){
        return (
            <div>
                <input 
                    type="text"
                    ref={ input => { this.textInput = input; } } />
                
            </div>
        )
    }
}

class AutoFocusTextInput extends Component{
    componentDidMount(){
        this.textInput.focus();
    }
    render(){
        return (
            <CustomTextInput
                ref={ input => {this.textInput = input} } />
        )
    }
}

ReactDOM.render(
    <CustomTextInput person='xxxxxxxx1' />,
    document.getElementById('foo')
);


