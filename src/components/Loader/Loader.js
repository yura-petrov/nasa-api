import React from 'react';
import './Loader.css';

import CircularProgress from "@material-ui/core/CircularProgress";

export default () => {

  return (
    <div className="loader">
      <CircularProgress />
    </div>
  )
}
