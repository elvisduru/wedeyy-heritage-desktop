import React from "react";
import styles from "./Feeds.module.css";
import HeritageHeader from "../../components/HeritageHeader/HeritageHeader";
import PostBar from "../../components/PostBar/PostBar";
import TrendingList from "../../components/TrendingList/TrendingList";
import FeedNotification from "../../components/FeedNotification/FeedNotification";
import Feed from "../../components/Feed/Feed";
import starIcon from "../../images/star.svg";
import tetheringIcon from "../../images/tethering.svg";
import collectionsIcon from "../../images/collections.svg";
import SuggestionList from "../../components/SuggestionList/SuggestionList";
import DateMatchList from "../../components/DateMatchList/DateMatchList";

const Feeds = () => {
  return (
    <div className={styles.Feeds}>
      <HeritageHeader />
      <PostBar avatar="http://i.pravatar.cc/100" />
      <TrendingList />
      <FeedNotification
        image={starIcon}
        heading="You just earned a Star."
        text="Start Family Tree to earn another."
        btnText="Go to Tree"
        target="/profile/tree"
      />
      <Feed
        avatar="http://i.pravatar.cc/100"
        user="John Doe"
        created="Feb 10 at 01:11 PM"
        tags={8}
        content={
          <div>
            <h2>
              The best way to eat an elephant in your path is cut him up into
              little pieces.|
            </h2>
            <p>Says: Swetaleena Dash.</p>
          </div>
        }
        reachCount="15k"
        likeCount={77}
        shareCount={5}
        commentCount={10}
      />
      <DateMatchList />
      <Feed
        avatar="http://i.pravatar.cc/101"
        user="John Doe"
        created="Feb 10 at 01:11 PM"
        tags={8}
        content={
          <div>
            <h2>
              The best way to eat an elephant in your path is cut him up into
              little pieces.|
            </h2>
            <p>Says: Swetaleena Dash.</p>
          </div>
        }
        reachCount="15k"
        likeCount={77}
        shareCount={5}
        commentCount={10}
      />
      <SuggestionList />
      <Feed
        avatar="http://i.pravatar.cc/102"
        user="John Doe"
        created="Feb 10 at 01:11 PM"
        tags={8}
        content={
          <div>
            <h2>
              The best way to eat an elephant in your path is cut him up into
              little pieces.|
            </h2>
            <p>Says: Swetaleena Dash.</p>
          </div>
        }
        reachCount="15k"
        likeCount={77}
        shareCount={5}
        commentCount={10}
      />
      <Feed
        avatar="http://i.pravatar.cc/102"
        user="John Doe"
        created="Feb 10 at 01:11 PM"
        tags={8}
        content={
          <div>
            <h2>
              The best way to eat an elephant in your path is cut him up into
              little pieces.|
            </h2>
            <p>Says: Swetaleena Dash.</p>
          </div>
        }
        reachCount="15k"
        likeCount={77}
        shareCount={5}
        commentCount={10}
      />
      <FeedNotification
        image={collectionsIcon}
        heading="Your Memories on Wedeyy."
        text="Femi, we care about you and others do too. We thought you might look back on today with your family friend, Kehinde Omotoso."
        btnText="View Memories."
      />
      <Feed
        avatar="http://i.pravatar.cc/103"
        user="John Doe"
        created="Feb 10 at 01:11 PM"
        tags={8}
        content={
          <div>
            <h2>
              The best way to eat an elephant in your path is cut him up into
              little pieces.|
            </h2>
            <p>Says: Swetaleena Dash.</p>
          </div>
        }
        reachCount="15k"
        likeCount={77}
        shareCount={5}
        commentCount={10}
      />
      <FeedNotification
        image={tetheringIcon}
        heading="Kehinde is LIVE."
        text="Join Kehinde and 200 others on his live broadcast. Make live contribution to the ongoing event."
        btnText="Join Broadcast"
        btnColor="#C44F4F"
        target="/broadcast"
      />
    </div>
  );
};

export default Feeds;
