import React from 'react';

import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import BikeHome from './BikeHome';
import BrandHome from './BrandHome';

const { Content } = Layout;

class SiteContent extends React.Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 200,
                    }}
                >
                    <Switch>
                        <Route path="/brands">
                            <BrandHome />
                        </Route>
                        <Route path="/">
                            <BikeHome />
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export default SiteContent;