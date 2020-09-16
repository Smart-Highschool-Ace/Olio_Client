import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import React from "react";
import { Box, Flex } from "rebass";


import Popup from "components/Popup";
import {
  PopupProvider,
  PopupConsumer,
} from "utils/contexts";
import PopupInfo from "utils/models/PopupInfo";
import { defaultTheme } from "utils/styled";

class MyApp extends App {
  readonly state = {
    backgroundColor: undefined,
  };

  renderProviders(children: React.ReactNode) {
    return (
      <PopupProvider>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </PopupProvider>
    );
  }

  renderPopups() {
    return (
      <PopupConsumer>
        {state =>
          (state[0].popupList as PopupInfo[]).map(popup => (
            <Popup key={popup.id} info={popup} />
          ))
        }
      </PopupConsumer>
    );
  }

  render() {
    const { Component, pageProps } = this.props as any;
    return this.renderProviders(
      <>
        <Head>
          <title>Olio</title>
          <link
            href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          style={{ height: "100vh" }}
        >
          <div>
            <Box mx="auto" bg={this.state.backgroundColor}>
              <Component {...pageProps} />
            </Box>
          </div>
        </Flex>
        {this.renderPopups()}
      </>,
    );
  }
}

export default MyApp;
