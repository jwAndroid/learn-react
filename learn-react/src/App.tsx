import { memo } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import { lightTheme } from './theme';

const Container = styled.div(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.gray,
}));

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <div>hello world!!</div>
      </Container>
    </ThemeProvider>
  );
};

export default memo(App);
