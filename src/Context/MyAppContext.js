import React from 'react';

const MyAppContext = React.createContext({
  tweets: [],
  addTweet: (tweets) => { },

})

export default MyAppContext

