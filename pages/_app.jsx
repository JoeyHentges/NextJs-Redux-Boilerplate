import App from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../src/redux/reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: AdelleSans,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
    color: #33334F;
    font-size: 16px;
    margin: 0px;
  }
`;

class Init extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    // Anything returned here can be access by the client
    return { pageProps };
  }

  render() {
    // Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

// withRedux wrapper that passes the store to the App Component
export default Init;
