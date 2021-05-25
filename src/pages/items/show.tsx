
import React, { useEffect, useState } from 'react';
import { Page, Navbar, Swiper, SwiperSlide} from 'framework7-react';
import { Item } from '@constants';
import { PageRouteProps } from '@constants';
import { getItem } from '@api';
import { currency } from '@js/utils';

const ItemShowPage = ({ f7route, f7router }:PageRouteProps) =>{
    const [item, setItem] = useState(null);
    const [ categoryId, setcategoryId] = useState(0);
        useEffect(() => {
        (async () => {
            const { data } = await getItem(f7route.params.id);
            setItem(data);
            setcategoryId(data.category_id);
        })();
    }, []);

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
        <h1>{item?.name}</h1>
        <h2>{currency(Number(item?.price))}원</h2>
    </Page> 
    );
};

export default ItemShowPage;