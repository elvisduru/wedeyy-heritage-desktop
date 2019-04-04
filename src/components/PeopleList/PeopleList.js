import React from "react";
import styles from "./PeopleList.module.css";
import Person from "./Person/Person";

const PeopleList = props => {
  const people = [
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
  ];

  let heading;

  if (props.mostSearched) {
    heading = <h4>MOST SEARCHED</h4>;
  } else if (props.topFamilies) {
    heading = <h4>TOP FAMILIES</h4>;
  } else {
    heading = null;
  }

  return (
    <div className={styles.PeopleList}>
      {heading}
      {people.map((person, index) => {
        return (
          <Person
            username={person.username}
            avatar={person.avatar}
            relationship={person.relationship}
            key={person.username + index}
          />
        );
      })}
    </div>
  );
};

export default PeopleList;
