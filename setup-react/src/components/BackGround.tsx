import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/styled';

interface IContainer {
  backgroundColor?: string;
}

const Container = styled.div<IContainer>(({ backgroundColor }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor,
}));

interface IBackGround {
  children: ReactNode;
  backgroundColor?: string;
}

const BackGround: FC<IBackGround> = ({
  children,
  backgroundColor = '#000000',
}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

export default memo(BackGround);
