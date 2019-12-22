import React from 'react';

const MyAppContext = React.createContext({
  tweetz: ['test'],
  addTweet: (tweetz) => {console.log("tweetz")}
})

export default MyAppContext

