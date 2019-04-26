import React from "react";
import styles from "./Tree.module.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import infoIcon from "../../../images/round-info-button.svg";
import settingsIcon from "../../../images/settings-cogwheel-button.svg";
import PersonCard from "../../../components/PersonCard/PersonCard";
import FamilyInfo from "../../../components/FamilyInfo/FamilyInfo";
import closeIcon from "../../../images/cross.svg";
import NavHeader from "../../../components/NavHeader/NavHeader";
import Switch from "react-switch";
import ToggleSelect from "../../../containers/ToggleSelect/ToggleSelect";
import UserProfile from "../UserProfile/UserProfile";

class Tree extends React.Component {
  state = {
    familyTree: [
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
    ],
    checked: false,
    familyInfoOpen: false,
    uploadCrestOpen: false,
    treeSettingsOpen: false,
    familyName: "Omotoso",
    openUser: false,
    familyInfo: (
      <p>
        Born in a small Oklahoma farm on August 12, 1923, John Doyle began his
        journey through life. John was the youngest son of farmer Kenneth Doyle
        and his wife Mary Doyle. Kenneth, a hard working man, raised his four
        children in a very disciplined way. It was from here that John learned
        much of his punctuality. <br />
        John, after leaving home at age 18, decided to move to a city. He went
        to Chicago and became a reporter for several years. He enjoyed his job,
        but yearned to get a college education. He enrolled at the University of
        Chicago. From there he quickly realized that he loved Health Care and
        Biology. Soon he made his decision that he was going to study to become
        a biologist. <br />
        Years after he graduated, I, his wife Darlene, asked why he felt so akin
        to his biological work. He always responded "that this is something I
        enjoy doing and when I feel I am making progress, I realize how
        beneficial my work is." As you can see, John was a very hard working
        man. He ended up finishing his work and retiring at the age of 58. After
        a brief heart attack, John realized he could no longer work as hard a he
        had done in his younger years. On May 2, 1999 John passed away.
      </p>
    )
  };

  handleChange = checked => {
    this.setState({ checked });
  };

  openFamilyInfo = () => {
    this.setState({ familyInfoOpen: true });
  };

  closeFamilyInfo = () => {
    this.setState({ familyInfoOpen: false });
  };

  openUserProfile = () => {
    this.setState({ openUser: true });
  };

  closeUserProfile = () => {
    this.setState({ openUser: false });
  };

  closeUploadCrest = () => {
    this.setState({ uploadCrestOpen: false });
  };

  openUploadCrest = () => {
    this.setState({ uploadCrestOpen: true });
  };

  openTreeSettings = () => {
    this.setState({ treeSettingsOpen: true });
  };

  closeTreeSettings = () => {
    this.setState({ treeSettingsOpen: false });
  };

  render() {
    let familyInfo = this.state.familyInfoOpen ? (
      <FamilyInfo
        title={this.state.familyName}
        body={this.state.familyInfo}
        closeFamilyInfo={this.closeFamilyInfo}
        openUploadCrest={this.openUploadCrest}
      />
    ) : null;

    let uploadCrest = this.state.uploadCrestOpen ? (
      <div className={styles.uploadCrest}>
        <img src={closeIcon} alt="close" onClick={this.closeUploadCrest} />
        <h1>Upload Family Crest.</h1>
        <div className={styles.body}>
          <p>
            Family crest is a symbolic representation of a family or a
            bloodline.
          </p>
        </div>
        <div className={styles.controls}>
          <button>Select File</button>
        </div>
      </div>
    ) : null;

    let treeSettings = this.state.treeSettingsOpen ? (
      <div className={styles.treeSettings}>
        <NavHeader
          heading="Tree Configuration"
          click={this.closeTreeSettings}
        />
        <div className={styles.settings}>
          <div className={styles.setting}>
            <label>
              <span>Make Tree Publicly Visible</span>
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                height={20}
                width={40}
              />
            </label>
            <p>
              Activating this option means every public user can view your tree.
            </p>
          </div>
          <div className={styles.setting}>
            <label>
              <span>Choose Tree Type</span>
              <ToggleSelect btn1name="Family" btn2name="Corporate/Group" />
            </label>
            <p>
              Select if you want to set tree up for a family or a corporate
              body.
            </p>
          </div>
        </div>
      </div>
    ) : null;

    return (
      <div className={styles.Tree}>
        <div className={styles.header}>
          <SearchBar placeholder="Find Family" />
          <img src={infoIcon} onClick={this.openFamilyInfo} alt="info" />
          <img
            src={settingsIcon}
            onClick={this.openTreeSettings}
            alt="settings"
          />
        </div>
        <div className={styles.chart}>
          {this.state.familyTree.map((level, index) => {
            return (
              <div key={index} className={styles.level}>
                {level.map((person, index) => {
                  return (
                    <PersonCard
                      avatar={person.avatar}
                      username={person.username}
                      relationship={person.relationship}
                      key={person.username + index}
                      click={this.openUserProfile}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        {familyInfo}
        {uploadCrest}
        {treeSettings}
        {this.state.openUser ? (
          <UserProfile
            username="Kehinde Omotoso"
            occupation="Software Engineer"
            click={this.closeUserProfile}
          />
        ) : null}
      </div>
    );
  }
}

export default Tree;
