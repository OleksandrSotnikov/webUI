import React from 'react';

import { Layout } from 'antd';

const { Content } = Layout;

class SiteContent extends React.Component {
    render() {
        return (
            <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 200,
                }}
            >
                Content
          </Content>

        );
    }
}

export default SiteContent;