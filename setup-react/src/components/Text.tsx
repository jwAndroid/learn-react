import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/styled';

interface IStyledText {
  color: string;
  fontSize: number;
}

const StyledText = styled.h2<IStyledText>(({ color, fontSize }) => ({
  fontSize,
  color,
}));

interface IText {
  children: ReactNode;
  color?: string;
  fontSize?: number;
}

const Text: FC<IText> = ({ children, color = 'red', fontSize = 40 }) => {
  return (
    <StyledText color={color} fontSize={fontSize}>
      {children}
    </StyledText>
  );
};

export default memo(Text);
