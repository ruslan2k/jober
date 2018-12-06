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
  Input,
  Label
} from "react-weui";
import Api from "./Api";

const BackButton = props => <button> &lt; </button>;

class AdminPage extends Component {
  constructor(props) {
    super(props);
    const server = localStorage.getItem("server") || "";
    const admin = localStorage.getItem("admin") || "";
    const password = localStorage.getItem("password") || "";
    this.state = { server, admin, password };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("server", this.state.server);
    localStorage.setItem("admin", this.state.admin);
    localStorage.setItem("password", this.state.password);
    console.log(this.state);
    Api.save(this.state.server, this.state.admin, this.state.password);
    Api.test();
  }

  render() {
    return (
      <Page>
        <Article>
          <section>
            <button onClick={this.props.history.goBack}>&lt;</button>
            <h1>Acces to CouchDB</h1>
            <form onSubmit={this.handleSubmit}>
              <FormCell select selectPos="before">
                <CellBody>
                  <Input
                    type="text"
                    name="server"
                    placeholder="Server Name"
                    defaultValue={this.state.server}
                    onChange={this.handleChange}
                  />
                </CellBody>
              </FormCell>
              <FormCell>
                <CellBody>
                  <Input
                    type="text"
                    name="admin"
                    placeholder="Admin Login"
                    defaultValue={this.state.admin}
                    onChange={this.handleChange}
                  />
                </CellBody>
              </FormCell>
              <FormCell>
                <CellBody>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    defaultValue={this.state.password}
                    onChange={this.handleChange}
                  />
                </CellBody>
              </FormCell>
            </form>
            <Button onClick={this.handleSubmit}>Save</Button>
          </section>
        </Article>
      </Page>
    );
  }
}

export default AdminPage;
