import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Page, Navbar, List, ListItem, Checkbox, Button, Col, Stepper } from 'framework7-react';
import { PageRouteProps } from '@constants';
import { getLineItems } from '@api';
import { lineItemState } from '../../common/atoms/index';
import { currency } from '@js/utils';

const CartIndexPage = ({ f7route, f7router }: PageRouteProps) => {
  const [lineItem, setLineItem] = useRecoilState(lineItemState);

  useEffect(() => {
    (async () => {
      const { data } = await getLineItems();
      setLineItem(data);
    })();
  }, []);

  return (
    <Page noToolbar className="bg-gray-100">
      <Navbar title="장바구니" backLink={true}></Navbar>
      <div className="m-5 flex justify-between">
        <span>
          <Checkbox className="mr-2" name="checkbox-1" />
          전체삭제(1)
        </span>
      </div>
      <div className="bg-white mx-5">
        <List mediaList className="mt-0">
          <ListItem>
            <div className="flex justify-between">
              <span>마지막 봄 에디션</span>
              <i className="f7-icons text-base">xmark</i>
            </div>
            <span className="text-xl"></span>
            <span>
              <Stepper raised round />
            </span>
            <img
              className="mt-1"
              slot="media"
              src="https://images.unsplash.com/photo-1579198314865-955573957799?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZsb3dlcnN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              width="80"
            />
          </ListItem>
          <ul>
            <li className="flex justify-between px-5 py-2 border-0 bg-white">
              <span className="text-sm">
                추가옵션: 편지<i className="f7-icons text-sm ml-2">xmark</i>
              </span>
              <span className="text-sm">2500원</span>
            </li>
          </ul>
          <div className="flex justify-end px-5 py-2">
            <span>합계금액 &nbsp;&nbsp;{currency(lineItem[0]?.total_price)}</span>
          </div>
        </List>
      </div>
      <div className="w-full bg-white pb-5 fixed bottom-0">
        <div>
          <div className="w-full px-5 py-3 flex justify-between">
            <span>총 주문금액</span>
            <span>{currency(lineItem[0]?.total_price)}</span>
          </div>
          <div className="w-full px-5 py-3 flex justify-between border-b-2">
            <span>배송비</span>
            <span>0원</span>
          </div>
        </div>
        <div className="w-full px-5 pb-5 pt-3 flex justify-between text-xl">
          <span>총 결제금액</span>
          <span>{currency(lineItem[0]?.total_price)}</span>
        </div>
        <Button className="mx-5" large fill color="green">
          구매하기
        </Button>
      </div>
    </Page>
  );
};

export default React.memo(CartIndexPage);
