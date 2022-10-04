import { memo } from 'react';
import styled from '@emotion/styled';
import { Text } from './components';

const Container = styled.div(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage:
    'url(https://images.mypetlife.co.kr/content/uploads/2022/01/17153551/hlh1996-tpFf5y14gBI-unsplash-edited-scaled.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  noRepeat: true,
  opacity: 0.5,
}));

const App = () => {
  return (
    <Container>
      <Text>hello world</Text>
    </Container>
  );
};

export default memo(App);
