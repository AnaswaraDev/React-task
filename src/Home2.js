import React from 'react'
import UserContext from './Home1'
function Home2() {
    return (
        <UserContext.Consumer>
        {value => <div>The answer is {value}.</div>}
      </UserContext.Consumer>
    );
}

export default Home2
