import React, { Fragment } from "react";
import PeopleList from "../../../components/PeopleList/PeopleList";

const Family = props => (
  <Fragment>
    <PeopleList />
    <PeopleList topFamilies />
  </Fragment>
);

export default Family;
