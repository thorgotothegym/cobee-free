import React from "react";
import { Layout as Theme } from "antd";

import { Outlet } from "react-router-dom";

const { Header, Footer, Content } = Theme;

const Layout = (): JSX.Element => {
  return (
    <>
      <Theme>
        <Header>Header</Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Theme>
    </>
  );
};

export default Layout;
