import React, { Component } from 'react';
import { Tab, NavBarItem, Article } from 'react-weui';
import ContactsPage from './ContactsPage';

const contacts = [
  {
    name: 'Vasya P',
  },
  {
    name: 'Petya V',
  },
];

const Item = (props) => <li>{'Item'}</li>;

export default class HomePage extends Component {
    render() {
        const contactsList = contacts.map(c => <li>{c.name}</li>);
        return (
            <Tab type="navbar">
                <NavBarItem label="Nav1">
                  <ContactsPage />
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

