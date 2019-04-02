import React from "react";
import styles from "./TrendingList.module.css";
import TrendingItem from "./TrendingItem/TrendingItem";

const TrendingList = props => {
  const trendingList = [
    {
      background: "http://i.pravatar.cc/305",
      username: "Susan Luisa",
      avatar: "http://i.pravatar.cc/101"
    },
    {
      background: "http://i.pravatar.cc/304",
      username: "Tommy Vercetti",
      avatar: "http://i.pravatar.cc/102",
      videoLength: "03:25"
    },
    {
      background: "http://i.pravatar.cc/303",
      username: "Carl Johnson",
      avatar: "http://i.pravatar.cc/103"
    },
    {
      background: "http://i.pravatar.cc/302",
      username: "John Doe",
      avatar: "http://i.pravatar.cc/104",
      videoLength: "03:25"
    },
    {
      background: "http://i.pravatar.cc/301",
      username: "Mike McKauley",
      avatar: "http://i.pravatar.cc/105",
      videoLength: "03:25"
    }
  ];
  return (
    <div className={styles.TrendingList}>
      <h4>Trending</h4>
      <div>
        {trendingList.map((trendingItem, index) => {
          return (
            <TrendingItem
              background={trendingItem.background}
              username={trendingItem.username}
              avatar={trendingItem.avatar}
              videoLength={trendingItem.videoLength}
              count={index + 1}
              key={trendingItem.username + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingList;
