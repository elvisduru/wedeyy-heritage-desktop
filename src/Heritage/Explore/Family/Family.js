import React, { Component, Fragment } from "react";
import PeopleList from "../../../components/PeopleList/PeopleList";

class Family extends Component {
  state = {
    people: [
      {
        username: "Susan Luisa",
        avatar: "http://i.pravatar.cc/101",
        relationship: "family friend"
      },
      {
        username: "Tommy Vercetti",
        avatar: "http://i.pravatar.cc/102",
        relationship: "family friend"
      },
      {
        username: "Carl Johnson",
        avatar: "http://i.pravatar.cc/103",
        relationship: "family friend"
      },
      {
        username: "John Doe",
        avatar: "http://i.pravatar.cc/104",
        relationship: "family friend"
      },
      {
        username: "Mike McKauley",
        avatar: "http://i.pravatar.cc/105",
        relationship: "family friend"
      }
    ]
  }
  render() {
    return (
      <Fragment>
        <PeopleList people={this.state.people} />
        <PeopleList people={this.state.people} topFamilies />
      </Fragment>
    )
  }

};

export default Family;
