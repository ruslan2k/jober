import React, { Component } from 'react';
import axios from 'axios';
import { Tab, NavBarItem, Article } from 'react-weui';
import ContactsPage from './ContactsPage';

const Item = (props) => <li>{'Item'}</li>;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {contacts: []};
  }
  componentDidMount() {
    axios('https://randomuser.me/api/?results=10')
      .then(({ data }) => this.setState({contacts: data.results}));
  }
  render() {
        const contactsList = this.state.contacts.map(c => <li>{c.name.first}</li>);
        return (
            <Tab type="navbar">
                <NavBarItem label="Nav1">
                    <Article>
                        <h1>Page 2</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>2.1 Title</h3>
                              <ul>
                                {contactsList}
                              </ul>
                            </section>
                        </section>
                    </Article>
                </NavBarItem>
                <NavBarItem label="Nav2">
                    <Article>
                        <h1>Page 2</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>2.1 Title</h3>
                              <ul>
                                {contactsList}
                              </ul>
                            </section>
                        </section>
                    </Article>
                </NavBarItem>
                <NavBarItem label="Nav3">
                    <Article>
                        <h1>Page 3</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>3.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </NavBarItem>
            </Tab>
        );
    }
};

