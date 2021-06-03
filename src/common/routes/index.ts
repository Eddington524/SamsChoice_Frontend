import NotFoundPage from '@pages/404';
import HomePage from '@pages/home';
import IntroPage from '@pages/intro';
import ItemIndexPage from '@pages/items';
import ItemShowPage from '@pages/items/show';
import CartIndexPage from '@pages/cart/index';
import MyPage from '@pages/mypage';
import SignUpPage from '@pages/users/registrations/new';
import LoginPage from '@pages/users/sessions/new';
import PostIndexPage from '@pages/posts';
import PostShowPage from '@pages/posts/show';
import CategoryItemIndexPage from '@components/categoryitem';

const routes = [
  { path: '/', component: HomePage },
  { path: '/users/sign_in', component: LoginPage },
  { path: '/users/sign_up', component: SignUpPage },
  { path: '/intro', component: IntroPage },
  { path: '/mypage', component: MyPage },
  { path: '/items', component: ItemIndexPage },
  { path: '/items/:id', component: ItemShowPage },
  { path: '/items/category/:id', component: CategoryItemIndexPage },
  { path: '/line_items', component: CartIndexPage },
  { path: '/posts', component: PostIndexPage },
  { path: '/posts/:id', component: PostShowPage },
  { path: '(.*)', component: NotFoundPage },
];

export default routes;
