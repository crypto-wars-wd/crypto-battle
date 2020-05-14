import * as React from "react";
import 'semantic-ui-css/semantic.min.css';
import {Provider} from "react-redux";
import storeConfiguration from '../constans/storeConfiguration';

const store = storeConfiguration();

function MyApp({ Component, pageProps }) {
    return  <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
}

export default MyApp;