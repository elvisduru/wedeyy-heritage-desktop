import React from "react";
import styles from "./Notifications.module.css";
import NotificationList from "../../components/NotificationList/NotificationList";

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import SuggestionList from "../../components/SuggestionList/SuggestionList";
import HeritageHeader from "../../components/HeritageHeader/HeritageHeader";

const Notifications = () => {
  return (
    <div className={styles.Notifications}>
      <SimpleBar style={{
        width: '50%',
        height: '100vh',
        zIndex: 101
      }}>
        <HeritageHeader title="Notifications" />
        <NotificationList />
      </SimpleBar>
      <SimpleBar style={{
        flex: '1 0 50%',
        borderLeft: '1px solid #e6ecf0',
        backgroundColor: 'white',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '37%',
        height: '100%'
      }}>
        <SuggestionList />
      </SimpleBar>
    </div>
  );
};

export default Notifications;
