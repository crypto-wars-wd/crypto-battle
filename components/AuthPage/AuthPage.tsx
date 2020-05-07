import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import * as Styled from './styledComponent';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response: any) => {
    console.log(response);
}

const AuthPage: React.FC = () => {
  return (
        <Styled.AuthMain>
            <Styled.HeaderStyled block>
                <GoogleLogin
                    clientId="411912187634-09e2pudtp337atlucsnlfaeb13ie4ntj.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <Icon disabled name="google" size="huge"/>
                <Icon disabled name="facebook" size="huge"/>
            </Styled.HeaderStyled>
            <Styled.AuthContentWrapper>
                <Styled.AuthContent />
            </Styled.AuthContentWrapper>
        </Styled.AuthMain>
  );
};

export default AuthPage;
