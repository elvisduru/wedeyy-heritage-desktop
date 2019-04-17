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
import video from "../../videos/live.mp4";

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
        image="http://i.pravatar.cc/400"
        reachCount="15k"
        contentType="image"
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
        quote="The best way to eat an elephant in your path is cut him up into
              little pieces.|"
        author="Says: Swetaleena Dash."
        reachCount="15k"
        contentType="textBackground"
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
        text="The new Apple Pro Laptop core i8 9th Generation."
        brand="Apple Inc."
        btnText="BUY NOW"
        reachCount="15k"
        contentType="imageAd"
        image="http://i.pravatar.cc/401"
        likeCount={77}
        shareCount={5}
        commentCount={10}
      />
      <Feed
        avatar="http://i.pravatar.cc/102"
        user="John Doe"
        created="Feb 10 at 01:11 PM"
        tags={8}
        video={video}
        reachCount="15k"
        contentType="video"
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
        image="http://i.pravatar.cc/403"
        caption="Pellentesque tincidunt tristique neque, eget venenatis enim gravida quis. Fusce at egestas libero. Cras convallis egestas ullamcorper. Suspendisse sed ultricies nisl, pharetra rutrum mauris. Vestibulum at massa dui. Morbi et purus velit. Etiam tristique, justo eu condimentum efficitur, purus velit facilisis sem, id fringilla tortor quam quis dolor. Praesent ultricies dignissim ex, at volutpat sapien ullamcorper rhoncus. Curabitur quam velit, ullamcorper ut congue eget, convallis et velit. Donec placerat, magna eu venenatis tempus, dui sapien aliquam libero, sit amet maximus erat massa quis nisi. Integer pharetra auctor arcu, non tincidunt dui fermentum ut. Nullam interdum sapien id mauris dapibus, a pharetra purus rhoncus. Nullam viverra iaculis tristique. Donec quis mauris ipsum. Nunc vehicula magna at erat tristique rutrum."
        reachCount="15k"
        contentType="imageText"
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
