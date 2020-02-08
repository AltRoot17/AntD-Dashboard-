import React, {Component} from 'react';
import { Layout} from 'antd';


import './style.css';


const { Footer } = Layout;


export class Footers extends Component {
    render() {
        return (
            <div>



                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>


            </div>
        );
    }
}

export default Footers;
