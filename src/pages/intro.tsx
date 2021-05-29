import { Button, f7ready, Navbar, Page, Swiper, SwiperSlide, Toolbar } from 'framework7-react';
import { sampleSize, zip } from 'lodash';
import React, { useEffect, useState } from 'react';
import sanitizeHtml from '../js/utils/sanitizeHtml';

const IntroPage = props => {
  return (
    <Page>
      <Navbar title="SAM'S CHOICE" />
      <Toolbar bottom className="p-0" inner={false}>
        <div className="w-full flex">
          <Button className="w-full rounded-none" large href="/users/sign_in">
            로그인
          </Button>
          <Button className="w-full rounded-none" large href="/users/sign_up" fill>
            회원가입
          </Button>
        </div>
      </Toolbar>
      <Swiper
        className="h-full"
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides
        pagination={{ clickable: true }}
        observer
      >
        <SwiperSlide>
          <div className="flex justify-center p-0 ">
            <img
              src={`https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80`}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center p-0 ">
            <img
              src={`https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80`}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center p-0 ">
            <img
              src={`https://images.unsplash.com/photo-1500994802273-2dd2df834939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80`}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </Page>
  );
};
export default React.memo(IntroPage);
