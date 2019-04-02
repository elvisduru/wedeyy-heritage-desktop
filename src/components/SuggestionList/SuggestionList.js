import React from "react";
import styles from "./SuggestionList.module.css";
import SuggestionItem from "./SuggestionItem/SuggestionItem";

const SuggestionList = props => {
  const suggestionList = [
    {
      username: "Susan Luisa",
      avatar: "http://i.pravatar.cc/101"
    },
    {
      username: "Tommy Vercetti",
      avatar: "http://i.pravatar.cc/102"
    },
    {
      username: "Carl Johnson",
      avatar: "http://i.pravatar.cc/103"
    },
    {
      username: "John Doe",
      avatar: "http://i.pravatar.cc/104"
    },
    {
      username: "Mike McKauley",
      avatar: "http://i.pravatar.cc/105"
    }
  ];
  return (
    <div className={styles.SuggestionList}>
      <h4>BECAUSE YOU FOLLOWED {props.followedUser}</h4>
      <div>
        {suggestionList.map((user, index) => {
          return (
            <SuggestionItem
              avatar={user.avatar}
              username={user.username}
              key={user.username + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SuggestionList;
