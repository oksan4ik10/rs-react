import React, { ChangeEvent } from 'react';
import { MyStateInput } from 'types/types';


class ClassInput extends React.Component {
    state: MyStateInput;
    constructor(props: Record<string, never>) {
        super(props);
        const date = localStorage.getItem('date') ;
        this.state= { 
            date:date ? date : ''
        };
        this.increment = this.increment.bind(this);
    }
    increment(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        this.setState({date: value}); 
        localStorage.setItem('date', value);
    }

    render() {
        return (
                <input  onInput={this.increment} value={this.state.date}/>
        )
    }
}

export default ClassInput;