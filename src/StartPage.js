import React, { Component } from "react";
import {
  Article,
  Page,
  Button,
  CellsTitle,
  FormCell,
  CellHeader,
  Select,
  CellBody,
  Input
} from "react-weui";
const srcArticle = "https://picsum.photos/400/300";

const StartPage = props => (
  <Page transition={true} infiniteLoader={true} ptr={false}>
    <Article>
      <h1>Page Demo</h1>
      <section>
        <Button onClick={() => props.history.push("/start1")}>Start!</Button>
        <h2 className="title">H2 Title</h2>
        <section>
          <p>Lorem ipsum dolor sit amet...</p>
          <p>
            <img src={srcArticle} alt="random" />
          </p>
        </section>
      </section>
    </Article>
  </Page>
);

export default StartPage;
