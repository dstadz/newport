import React from 'react'
import {
  atom,
  useRecoilState
} from 'recoil'


export const hueState = atom({
  key: 'hueState',
  default: Math.floor(Math.random() * 360)
});