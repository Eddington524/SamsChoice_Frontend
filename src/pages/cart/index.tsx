import React, { useEffect, useState } from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import { PageRouteProps } from '@constants';
import { getPosts } from '@api';

const CartIndexPage = ({ f7route, f7router }: PageRouteProps) => {
  return (
    <Page noToolbar>
      <Navbar title="장바구니" backLink={true}></Navbar>
    </Page>
  );
};

export default React.memo(CartIndexPage);
