
import React, { useEffect, useState, useRef } from 'react';
import { 
  Page, 
  Navbar, 
  Swiper, 
  SwiperSlide, 
  Block, 
  Button, 
  Sheet, 
  Link, 
  PageContent,
  BlockTitle,
  Row,
  Col,
  Stepper,
  Checkbox,
  List,
  ListItem,
  f7} from 'framework7-react';

import { PageRouteProps } from '@constants';
import { getItem } from '@api';
import { currency } from '@js/utils';
import items from '.';

const ItemShowPage = ({ f7route, f7router }:PageRouteProps) =>{
    const [ item, setItem ] = useState(null);
    const [ categoryId, setCategoryId] = useState(0);
    const [ quentity, setQuentity ] = useState(1);
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ isCheckOptions, setCheckOptions ] = useState({ vase: true, letter: false});
    const [ extraCost, setExtraCost ] = useState(0);

    useEffect(() => {
      (async () => {
        const { data } = await getItem(f7route.params.id);
        setItem(data);
        console.log(data);
        setCategoryId(data.category_id);
        setTotalPrice(data.price);
        })();
    }, []);

    useEffect(()=>{
      setTotalPrice(item?.price*quentity + Number(isCheckOptions.vase && item?.options[0].extra_cost) + Number(isCheckOptions.letter && item?.options[1].extra_cost))
    },[quentity,isCheckOptions])
    
    const onChange = (e) =>{
      const { value, checked } = e.target;
      setCheckOptions(
        {
        ...isCheckOptions,
        [value]: checked
        }
      );
      // addVaseExtraCost();
    }


    return( 
        <Page noToolbar>
        <Navbar title="상품상세" backLink={true}></Navbar>
        { categoryId%2 ===1 ? <img src={item?.image[0]} className=" w-full h-2/3" alt=""/> :
        <Swiper pagination navigation scrollbar className="h-2/3">
        <SwiperSlide ><img slot="media" src={item?.image[0]} alt=""/></SwiperSlide>
        <SwiperSlide><img slot="media" src={item?.image[1]} alt=""/></SwiperSlide>
        <SwiperSlide><img slot="media" src={item?.image[2]} /></SwiperSlide>
        </Swiper>
        }
        <h1 className="mx-5 mt-3 text-2xl">{item?.name}</h1>
        <h2 className="mx-5 mb-3 text-2xl">{currency(Number(item?.price))}원</h2>
        
        <Button fill sheetOpen=".demo-sheet-swipe-to-step" color="green" className="p-3 mx-5 h-10" >
            구매하기
          </Button>

        <Sheet
        className="demo-sheet-swipe-to-step"
        style={{ height: 'auto'}}
        swipeToClose
        swipeToStep
        backdrop
      >
        <div className="sheet-modal-swipe-step p-5">
          <div className="display-flex padding justify-content-space-between align-items-center">
        <div>
        <Row>
          <Col className="flex items-center">
            <small className="mr-3 display-block text-lg flex-auto">수량</small>
            <Stepper
              raised round onStepperChange={setQuentity}
              value={quentity} />
          </Col>
        </Row>
        </div>
            <div style={{ fontSize: '18px' }}>
              {item && (
                <List>
                <p className="mb-3">추가 상품 선택</p>
                  <ListItem 
                  value="vase"
                  onChange={(e) => onChange(e)}
                  checkbox title={item.options[0]?.name} 
                  after={"+"+currency(Number(item?.options[0].extra_cost))+"원"} name="demo-checkbox" />
                  <ListItem 
                  value="letter"
                  onChange={(e) => onChange(e)}
                  checkbox title={item.options[1]?.name}  
                  after={"+"+currency(Number(item?.options[1].extra_cost))+"원"}  name="demo-checkbox" />
                </List>
              )}
            </div>
            <div style={{ fontSize: '15px' }} className="mb-5 flex justify-between items-center">
              <span className="text-xl">총 주문금액</span>
              <span className="text-2xl"> {currency(Number(totalPrice))}원</span>
            </div>
          </div>
          <div className="padding-horizontal padding-bottom">
            <Button large fill>
              장바구니
            </Button>
          </div>
        </div>
        </Sheet>
    </Page> 
    );
};

export default ItemShowPage;