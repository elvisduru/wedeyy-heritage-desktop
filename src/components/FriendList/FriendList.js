import React from "react";
import styles from "./FriendList.module.css";
import Friend from "./Friend/Friend";
import addIcon from "../../images/add-plus-button.svg";

const FriendList = () => {
  const friends = [
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
    },
    {
      username: "Susan Luisa",
      avatar: "http://i.pravatar.cc/106"
    },
    {
      username: "Tommy Vercetti",
      avatar: "http://i.pravatar.cc/107"
    },
    {
      username: "Carl Johnson",
      avatar: "http://i.pravatar.cc/108"
    },
    {
      username: "John Doe",
      avatar: "http://i.pravatar.cc/109"
    },
    {
      username: "Mike McKauley",
      avatar: "http://i.pravatar.cc/110"
    }
  ];
  return (
    <div className={styles.FriendList}>
      <div className={styles.AddFriend}>
        <img src={addIcon} alt="Add Friend" />
        <p>Add Friend</p>
      </div>
      {friends.map((friend, index) => {
        return (
          <Friend
            username={friend.username}
            avatar={friend.avatar}
            key={friend.username + index}
          />
        );
      })}
    </div>
  );
};

export default FriendList;
