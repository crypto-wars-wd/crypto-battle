import * as React from 'react';
import * as Styled from './styledComponent';
import GoogleLogin from 'react-google-login';
import FacebookLoginWithButton from 'react-facebook-login';
import { connect } from "react-redux";

const responseGoogle = (response: any) => {
    console.log(response);
};

const responseFacebook = (response: any) => {
    console.log(response);
};



const AuthPage: React.FC = (props: any) => {
    return (
        <Styled.AuthMain>
            <Styled.HeaderStyled block>
                <GoogleLogin
                    clientId="411912187634-09e2pudtp337atlucsnlfaeb13ie4ntj.apps.googleusercontent.com"
                    buttonText=""
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <FacebookLoginWithButton
                    appId="263020944839635"
                    autoLoad={false}
                    textButton=""
                    fields="name,email,picture"
                    onClick={responseFacebook}
                    callback={responseFacebook}
                    icon="fa-facebook" />
                <button onClick={props.sayHello}/>
            </Styled.HeaderStyled>
            <Styled.AuthContentWrapper>
                <Styled.AuthContent />
            </Styled.AuthContentWrapper>
        </Styled.AuthMain>
    );
};


const mapDispatchToProps = (dispatch: any) => ({
    sayHello: () => dispatch({
        type: "HELLO",
    }),
    // onClear: () => dispatch(setLyrics("")),
});

export default connect(
    null,
    mapDispatchToProps
)(AuthPage);
