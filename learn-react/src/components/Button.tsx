import React, { FC, memo } from 'react';
import styled from '@emotion/styled';

interface IStyledButton {
  backgroundColor?: string;
}

const Container = styled.div({
  display: 'felx',
});

const StyledButton = styled.button<IStyledButton>(({ backgroundColor }) => ({
  width: 100,
  height: 100,
  borderRadius: 20,
  border: 0,
  outline: 0,
  margin: 5,
  backgroundColor,
}));

interface IButton {
  backgroundColor?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FC<IButton> = ({ onClick, backgroundColor = '#000000' }) => {
  return (
    <Container>
      <StyledButton onClick={onClick} backgroundColor={backgroundColor} />
    </Container>
  );
};

export default memo(Button);
