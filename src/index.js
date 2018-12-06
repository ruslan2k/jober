import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Redirect } from "react-router-dom";
import "weui";
import "react-weui/build/packages/react-weui.css";
import "./styles.css";
import StartPage from "./StartPage";
import StartPage1Phone from "./StartPage1Phone";
import AdminPage from "./AdminPage";
import * as serviceWorker from './serviceWorker';

// import VConsole from "vconsole";
// const vConsole = new VConsole();

function App() {
  return (
    <HashRouter>
      <div>
        {/*<p className="admin">
          <Link to="/admin">Admin</Link>
        </p>*/}
        <Route exact path="/" component={StartPage1Phone} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/start1" component={StartPage1Phone} />
      </div>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

