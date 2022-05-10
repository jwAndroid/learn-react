import { memo } from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  flex: 1,
  backgroundColor: 'gray',
});

const App = () => {
  return (
    <Container>
      <div>hello world!</div>
    </Container>
  );
};

export default memo(App);
