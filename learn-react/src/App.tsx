import { memo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Container = styled.div({
  flex: 1,
  backgroundColor: 'gray',
});

const App = () => {
  const theme = useTheme();

  return (
    <Container>
      <div>hello world!</div>
    </Container>
  );
};

export default memo(App);
