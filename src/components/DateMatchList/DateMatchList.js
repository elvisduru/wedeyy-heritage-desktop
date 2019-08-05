import React from "react";
import styles from "./DateMatchList.module.css";
import DateMatchItem from "./DateMatchItem/DateMatchItem";

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

const DateMatchList = props => {
  const matchList = [
    {
      username: "Susan Luisa",
      avatar: "http://i.pravatar.cc/301",
      location: "Ikeja, 1.2km Away"
    },
    {
      username: "Tommy Vercetti",
      avatar: "http://i.pravatar.cc/302",
      location: "Ikeja, 1.2km Away"
    },
    {
      username: "Carl Johnson",
      avatar: "http://i.pravatar.cc/303",
      location: "Ikeja, 1.2km Away"
    },
    {
      username: "John Doe",
      avatar: "http://i.pravatar.cc/304",
      location: "Ikeja, 1.2km Away"
    },
    {
      username: "Mike McKauley",
      avatar: "http://i.pravatar.cc/305",
      location: "Ikeja, 1.2km Away"
    }
  ];
  return (
    <div className={styles.DateMatchList}>
      <h4>Date Matches</h4>
        <SimpleBar style={{ width: '100%', display: 'flex' }}>
          {matchList.map((matchItem, index) => {
            return (
              <DateMatchItem
                username={matchItem.username}
                avatar={matchItem.avatar}
                location={matchItem.location}
                key={matchItem.username + index}
              />
            );
          })}
        </SimpleBar>
    </div>
  );
};

export default DateMatchList;
