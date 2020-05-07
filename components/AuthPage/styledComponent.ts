import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

export const AuthMain = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const AuthContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: blue;
`;

export const AuthContent = styled.div`
    width: 80%;
    height: 100%;
    background: white;
`;

export const HeaderStyled = styled(Header)({
  margin: '0!important',
  display: 'flex',
  justifyContent: 'flex-end',
});
