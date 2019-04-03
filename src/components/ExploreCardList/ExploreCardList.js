import React from "react";
import styles from "./ExploreCardList.module.css";
import ExploreCard from "./ExploreCard/ExploreCard";

const ExploreCardList = props => {
  const exploreList = [
    {
      background: "http://i.pravatar.cc/305",
      username: "Susan Luisa",
      avatar: "http://i.pravatar.cc/101",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/304",
      username: "Tommy Vercetti",
      avatar: "http://i.pravatar.cc/102",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/303",
      username: "Carl Johnson",
      avatar: "http://i.pravatar.cc/103",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/302",
      username: "John Doe",
      avatar: "http://i.pravatar.cc/104",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/301",
      username: "Mike McKauley",
      avatar: "http://i.pravatar.cc/105",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/305",
      username: "Susan Luisa",
      avatar: "http://i.pravatar.cc/101",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/304",
      username: "Tommy Vercetti",
      avatar: "http://i.pravatar.cc/102",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/303",
      username: "Carl Johnson",
      avatar: "http://i.pravatar.cc/103",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/302",
      username: "John Doe",
      avatar: "http://i.pravatar.cc/104",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/301",
      username: "Mike McKauley",
      avatar: "http://i.pravatar.cc/105",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/305",
      username: "Susan Luisa",
      avatar: "http://i.pravatar.cc/101",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/304",
      username: "Tommy Vercetti",
      avatar: "http://i.pravatar.cc/102",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/303",
      username: "Carl Johnson",
      avatar: "http://i.pravatar.cc/103",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/302",
      username: "John Doe",
      avatar: "http://i.pravatar.cc/104",
      likeCount: "200k"
    },
    {
      background: "http://i.pravatar.cc/301",
      username: "Mike McKauley",
      avatar: "http://i.pravatar.cc/105",
      likeCount: "200k"
    }
  ];
  return (
    <div className={styles.ExploreCardList}>
      {exploreList.map((item, index) => {
        return (
          <ExploreCard
            background={item.background}
            username={item.username}
            avatar={item.avatar}
            likeCount={item.likeCount}
            key={index + item.username}
          />
        );
      })}
    </div>
  );
};

export default ExploreCardList;
