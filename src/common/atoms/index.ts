import { atom } from 'recoil';
import { LineItem } from '@constants';
import { AuthState } from '@constants';

const initialAuthState: AuthState = {
  token: null,
  csrf: null,
  currentUser: null,
};

export const authState = atom<AuthState>({
  key: 'authState',
  default: initialAuthState,
});

export const lineItemState = atom<LineItem[]>({
  key: 'lineItem',
  default: [],
});

export const TotalPriceState = atom({
  key: 'TotalPriceState',
  default: 0,
});
