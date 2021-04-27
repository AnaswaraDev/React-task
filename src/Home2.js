
//import {UserContext} from './index';

import React, { useContext } from 'react';

function Home2() {
  const value= useContext(UserContext);
  console.log("value is",value)
    return (
      //  <UserContext.Consumer>
   //   {value => }
   //   </UserContext.Consumer>
 //<div>Form data values {formData.name}</div>
      <div>Form data values  {value}</div>
    );
}

export default Home2
