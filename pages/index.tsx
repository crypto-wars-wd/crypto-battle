// import * as React from 'react';
// import ListComponent from './List';
// import styled from 'styled-components';
//
// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
//
// const App: React.FC = () => (
//     <Container>
//         <ListComponent />
//     </Container>
// );
//
// export default App;

import * as React from 'react';
import { Provider } from 'react-redux';

import Auth from './auth';
import configureStore from '../redux/configureStore';

const store = configureStore();

const App: React.FC = () => <Provider store={store}><Auth /></Provider>;

export default App;
