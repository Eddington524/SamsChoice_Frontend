
import React, { useEffect, useState } from 'react';
import { Page, Navbar, Swiper, SwiperSlide} from 'framework7-react';
import { Item } from '@constants';
import { PageRouteProps } from '@constants';
import { getItems } from '@api';

const ItemShowPage = ({ f7route, f7router }:PageRouteProps) =>{
    const onClickBack =()=>{
        f7router.back();
    }
    const [items, setItems] = useState([]);
        useEffect(() => {
        (async () => {
            const { data } = await getItems({ q: { s: ['name asc'] } });
            setItems(data);
        })();
    }, []);

    return( 
        <Page noToolbar>
        <Navbar title="상품상세" backLink={true}></Navbar>

        <Swiper pagination navigation scrollbar>
        <SwiperSlide><img slot="media" src="https://images.unsplash.com/photo-1596576703684-4a6515d0a547?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/></SwiperSlide>
        <SwiperSlide><img slot="media" src="https://images.unsplash.com/photo-1592685751131-f8f4de837224?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/></SwiperSlide>
        <SwiperSlide><img slot="media" src="https://images.unsplash.com/photo-1591090209449-065d8d6b42e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/></SwiperSlide>
    </Swiper>
    <a href="#" onClick={onClickBack}>뒤로가기</a> 
    </Page> 
    );
};

export default ItemShowPage;