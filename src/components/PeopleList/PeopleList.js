import React from "react";
import styles from "./PeopleList.module.css";
import Person from "./Person/Person";

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

const PeopleList = props => {
  let heading;

  if (props.mostSearched) {
    heading = <h4>MOST SEARCHED</h4>;
  } else if (props.topFamilies) {
    heading = <h4>TOP FAMILIES</h4>;
  } else {
    heading = null;
  }

  return (
    <SimpleBar style={{
      height: '90%',
    }}>
      <div className={styles.PeopleList}>
        {heading}
        {props.people.map((person, index) => {
          return (
            <Person
              username={person.username}
              avatar={person.avatar}
              relationship={person.relationship || person.fullname}
              key={person.username + index}
              checkbox={props.checkbox}
            />
          );
        })}
      </div>
    </SimpleBar>
  );
};

export default PeopleList;
