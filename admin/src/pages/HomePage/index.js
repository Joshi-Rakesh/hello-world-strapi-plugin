/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos; Instep Technologies- HomePage</h1>
      <p>This is my first hello world Plugin</p>
    </div>
  );
};

export default memo(HomePage);
