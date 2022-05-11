import { memo, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

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

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'green',
});

interface IButton {
  backgroundColor?: string;
}

const Button = styled.button<IButton>(({ backgroundColor }) => ({
  width: 100,
  height: 100,
  borderRadius: 20,
  border: 0,
  outline: 0,
  margin: 5,
  backgroundColor,
}));

const StyledText = styled.h1({
  fontSize: 16,
});

const App = () => {
  const theme = useTheme();
  const [backgroundColor, setBackGroundColor] = useState('');
  const [text, setText] = useState('');

  const onClickRed = useCallback(() => {
    setBackGroundColor(theme.color.red);
    setText('Red');
  }, [theme]);

  const onClickGray = useCallback(() => {
    setBackGroundColor(theme.color.gray);
    setText('Gray');
  }, [theme]);

  const onClickOrange = useCallback(() => {
    setBackGroundColor(theme.color.orange);
    setText('Orange');
  }, [theme]);

  return (
    <Container backgroundColor={backgroundColor}>
      <ButtonContainer>
        <Button onClick={onClickRed} backgroundColor={theme.color.red} />

        <Button onClick={onClickGray} backgroundColor={theme.color.gray} />

        <Button onClick={onClickOrange} backgroundColor={theme.color.orange} />
      </ButtonContainer>

      <StyledText>{text}</StyledText>
    </Container>
  );
};

export default memo(App);
