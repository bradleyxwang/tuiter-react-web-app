import Nav from "../../nav";
import React, {useState} from "react";
const ewq = ['qu','wf','eh','iu','tb']
function HelloWorld() {
  const [e, f] = useState(true)
  return(
      <div>
        {  e && <h1 onClick={() => f(false)}>G</h1>}
        { !e && <h1 onClick={() => f(true) }>H</h1>}
      </div>
  )
}
export default HelloWorld;