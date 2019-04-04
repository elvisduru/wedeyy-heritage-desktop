import React, { Fragment } from "react";
import PeopleList from "../../../components/PeopleList/PeopleList";

const People = props => (
  <Fragment>
    <PeopleList />
    <PeopleList mostSearched />
  </Fragment>
);

export default People;
