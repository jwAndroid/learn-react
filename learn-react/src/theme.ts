import { Theme } from '@emotion/react';

export const font = {
  YoonGothicRegular: require('../assets/font/YoonGothicRegular.otf'),
};

export const icon = {
  chat: require('../assets/icons/chat.png'),
};

export const lightTheme: Theme = {
  font: {
    YoonGothicBold: 'YoonGothicBold',
    YoonGothicRegular: 'YoonGothicRegular',
  },
  color: {
    gray: '#303030',
  },
  icon,
};
