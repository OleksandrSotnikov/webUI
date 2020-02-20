import React from 'react';

import { Layout } from 'antd';

const { Header } = Layout;

export default function SiteHeader() {
    return (
        <Header className="header">
            <div className="logo" />
        </Header>
    );
};
