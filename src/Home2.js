
import UserContext from './Home1'

import React, { useContext } from 'react';

function Home2() {
  const value = useContext(UserContext);
  console.log("value is",value);
    return (
      //  <UserContext.Consumer>
   //   {value => }
   //   </UserContext.Consumer>
 
      <div>Copy this url {value}</div>
    );
}

export default Home2
