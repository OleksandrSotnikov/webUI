import React from 'react';
import './App.css';

import 'antd/dist/antd.css';

import { Layout } from 'antd';
import SiteHeader from './SiteHeader';
import SideMenu from './SideMenu';
import SiteContent from './SiteContent';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <SiteHeader />
        <Layout>
          <SideMenu />
          <Layout style={{ padding: '0 24px 24px' }}>
            <SiteContent />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
