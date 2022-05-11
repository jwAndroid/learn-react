import { memo, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Button, Text } from './components';

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
  width: '100%',
  height: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'green',
});

const App = () => {
  const theme = useTheme();
  const [backgroundColor, setBackGroundColor] = useState('');
  const [text, setText] = useState('색을 선택해 주세요');

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

      <Text color={theme.color.black} fontSize={40}>
        {text}
      </Text>
    </Container>
  );
};

export default memo(App);
