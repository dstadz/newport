import { atom } from 'recoil'


export const hueState = atom({
  key: 'hueState',
  default: Math.floor(Math.random() * 360)
});
