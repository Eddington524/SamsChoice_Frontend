import { LineItem, Category, Item, Token } from '@constants';
import { getToken } from '@store';
import { AxiosResponse } from 'axios';
import { PlainAPI, API, VERSION, API_URL } from './api.config';
import { ApiService } from './api.service';

export const refresh = (): Promise<{ data: Token }> =>
  PlainAPI.post(
    '/token',
    {},
    {
      headers: { 'X-CSRF-TOKEN': getToken().csrf, Authorization: `Bearer ${getToken().token}` },
    },
  );

export const get = (url: string, params: any) => PlainAPI.get(url, params);
export const loginAPI = (params: any) => PlainAPI.post('/login', { user: params });
export const signupAPI = (params: any) => PlainAPI.post('/signup', { user: params });
export const logoutAPI = () => API.delete('/logout');

// export const {
//   query: getItems,
//   get: getItem,
//   create: createItem,
//   update: updateItem,
//   destroy: destroyItem,
// } = ApiService('items');

// export const { query: getUsers, get: getUser } = ApiService('users');
// export const { query: getCategories, get: getCategory } = ApiService('categories');

export const getItems = (params = null) => API.get<any>('/items', { params });
export const getItem = itemId => API.get<Item>(`/items/${itemId}`);
export const getCategories = (params = null) => API.get<Category[]>('/categories', { params });
export const getCategory = (id, params = null) => API.get<Category>(`/categories/${id}`, { params });

export const getPosts = (params = null) => API.get<any>('/posts', { params });
export const getPost = postId => API.get<any>(`/posts/${postId}`);
export const getItemFromCategory = (id, params = null): Promise<AxiosResponse> =>
  API.get<any>(`/items/category/${id}`, { params });

export const getLineItems = (params = null): Promise<AxiosResponse> => API.get<LineItem>('/line_items', { params });
export { API_URL, VERSION };
