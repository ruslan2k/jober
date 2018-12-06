import React, { Component } from "react";
import {
  Page,
  Article,
  Button,
  CellsTitle,
  FormCell,
  CellHeader,
  Select,
  CellBody,
  Input
} from "react-weui";
import Api from "./Api";

class StartPage1Phone extends Component {
  constructor(props) {
    super(props);
    this.state = { code: "+375", phone: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ phone: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.phone);
    let name = `plus${this.state.code}-${this.state.phone}`
    Api.registerUser(name);
  }

  render() {
    return (
      <Page>
        <Article>
          <section>
            <Button
              type="default"
              size="small"
              onClick={() => this.props.history.push("admin")}
            >
              Admin
            </Button>
            <CellsTitle>Phone</CellsTitle>
            <form onSubmit={this.handleSubmit}>
              <FormCell select selectPos="before">
                <CellHeader>
                  <Select>
                    <option value="+375">+375</option>
                  </Select>
                </CellHeader>
                <CellBody>
                  <Input
                    onChange={this.handleChange}
                    type="tel"
                    placeholder="Enter Phone"
                    required=""
                  />
                </CellBody>
              </FormCell>
            </form>
            <Button onClick={this.handleSubmit}>Next</Button>
          </section>
        </Article>
      </Page>
    );
  }
}

export default StartPage1Phone;
