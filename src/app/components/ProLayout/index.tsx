import React, {Component} from 'react';
import { Layout } from 'antd';




import './style.css';


const {  Content } = Layout;


export class Prolayout extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">


                    <Content style={{ padding: '0 50px' }}>

                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                    </Content>
                </Layout>,

            </div>
        );
    }
}

export default Prolayout;
