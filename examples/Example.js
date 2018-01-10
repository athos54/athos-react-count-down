import React from 'react';

import MyComponent from '../src/index';

class Example extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log('test');
    }

    render() {
        return (
            <div>
                <MyComponent  dias="0" horas="0" minutos="0" segundos="05"/>
            </div>
        )
    }
}

export default Example;
