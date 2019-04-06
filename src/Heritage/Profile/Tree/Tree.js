import React from "react";
import styles from "./Tree.module.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import infoIcon from "../../../images/round-info-button.svg";
import settingsIcon from "../../../images/settings-cogwheel-button.svg";

const Tree = () => {
  const familyTree = [
    [
      {
        username: "Susan Luisa",
        avatar: "http://i.pravatar.cc/101",
        relationship: "Grand Father"
      },
      {
        username: "Tommy Vercetti",
        avatar: "http://i.pravatar.cc/102",
        relationship: "Grand Mother"
      }
    ],
    [
      {
        username: "Susan Luisa",
        avatar: "http://i.pravatar.cc/103",
        relationship: "Brother"
      },
      {
        username: "Tommy Vercetti",
        avatar: "http://i.pravatar.cc/104",
        relationship: "Cousin"
      },
      {
        username: "Tommy Vercetti",
        avatar: "http://i.pravatar.cc/105",
        relationship: "Sister"
      }
    ],
    [
      {
        username: "Tommy Vercetti",
        avatar: "http://i.pravatar.cc/106",
        relationship: "Daughter"
      }
    ]
  ];

  const PersonCard = props => {
    return (
      <div className={styles.personCard}>
        <img src={props.avatar} alt="avatar" />
        <p>{props.relationship}</p>
        <p>{props.username}</p>
      </div>
    );
  };

  return (
    <div className={styles.Tree}>
      <div className={styles.header}>
        <SearchBar placeholder="Find Family" />
        <img src={infoIcon} alt="info" />
        <img src={settingsIcon} alt="settings" />
      </div>
      <div className={styles.chart}>
        {familyTree.map((level, index) => {
          return (
            <div key={index} className={styles.level}>
              {level.map((person, index) => {
                return (
                  <PersonCard
                    avatar={person.avatar}
                    username={person.username}
                    relationship={person.relationship}
                    key={person.username + index}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tree;
