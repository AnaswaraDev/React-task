import { Input } from 'baseui/input';
import React from 'react'
//import useState from 'react-hook-form'
const onChangeHandler=(e)=>{
    console.log("current value",e.target.value);
}

function Sample()  {
    const [currentItem, setcurrentItem] = React.useState('');
    return (
      <div   className="sample">
      <Input  placeholder="Full Name" value={currentItem}
      onChange={(event) => setcurrentItem(event.target.value) }/>

       
        <button>signup</button>
      </div>
    )
  }
  
  export default Sample