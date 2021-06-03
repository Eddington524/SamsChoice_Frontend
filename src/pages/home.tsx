import React, { useEffect } from 'react';
import Categories from '@components/Categories';
import { useRecoilState } from 'recoil';
import { lineItemState } from '../common/atoms/index';
import { getLineItems } from '@api';
import { Link, Navbar, NavLeft, NavRight, NavTitle, Page } from 'framework7-react';

const HomePage = () => {
  const [lineItem, setLineItem] = useRecoilState(lineItemState);

  useEffect(() => {
    (async () => {
      const { data } = await getLineItems();
      setLineItem(data);
      // console.log(data);
    })();
  }, []);

  return (
    <Page name="home">
      <Navbar>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
        <NavTitle>SAM'S CHOICE</NavTitle>
        <NavRight>
          <Link href="/line_items" iconF7="cart" iconBadge={lineItem.length} badgeColor="red" />
        </NavRight>
      </Navbar>
      <Categories />
      <img
        alt="메인페이지 이미지"
        src="https://media.vlpt.us/images/sammy1101/post/bbea9510-d755-46b1-8db4-1714e0cae6ac/%EC%A0%9C%EB%AA%A9%EC%9D%84%20%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94.-001.png"
      />
    </Page>
  );
};
export default React.memo(HomePage);
