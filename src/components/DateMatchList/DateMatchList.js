import React from "react";
import styles from "./DateMatchList.module.css";
import DateMatchItem from "./DateMatchItem/DateMatchItem";

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
      <div>
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
      </div>
    </div>
  );
};

export default DateMatchList;
