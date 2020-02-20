import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

import 'antd/dist/antd.css';

import { Layout } from 'antd';
import SiteHeader from './SiteHeader';
import SideMenu from './SideMenu';
import SiteContent from './SiteContent';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <SiteHeader />
          <Layout>
            <SideMenu />
            <SiteContent />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
