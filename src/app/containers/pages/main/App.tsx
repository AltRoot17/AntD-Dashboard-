import React, {Component} from 'react';
import { Headers } from '../../../components/index'
import { Footers } from '../../../components/index'
import { Samslayout } from '../../../components/index'
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
            <Headers/>

            <Samslayout/>

                <Footers/>
            </div>
        );
    }
}

export default App;
