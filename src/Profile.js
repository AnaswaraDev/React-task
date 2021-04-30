import React, { useContext } from 'react';
import { MsgContext } from './contexts/MsgContext';
function Profile() {
  const { msg } = useContext(MsgContext);
  console.log('message is', msg);
  return (
    <div>
      <h2>message {msg}</h2>
    </div>
  );
}

export default Profile;
