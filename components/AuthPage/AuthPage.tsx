import * as React from 'react';
import { Icon } from 'semantic-ui-react'
import * as Styled from './styledComponent';

const AuthPage: React.FC = () => {
    return (
        <Styled.AuthMain>
            <Styled.HeaderStyled block>
                <Icon disabled name='google' size="huge"/>
                <Icon disabled name='facebook' size="huge"/>
            </Styled.HeaderStyled>
            <Styled.AuthContentWrapper>
                <Styled.AuthContent />
            </Styled.AuthContentWrapper>
        </Styled.AuthMain>
    );
};

export default AuthPage;