import React, { useState, useEffect } from 'react';

import "./CurrentIssue.css";

function CurrentIssue() {
const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="current-issues">
       <div className="indv-issue">
           <p className="close-issue">Close Issue</p>
           <p>
               Assigned: <span> Username</span>
           </p>
           <p>
               Priority: <span> PANIC</span>
           </p>
           <p>Description: </p>
           <p className="description-text">
               Short description of the project describing the issue. Honestly I hate seeing Lorem Ipsum Text and I am sure you are also tired of seeing the same. This is a minor league bugger tracker/issue tracker. 
           </p>
           <hr/>
       </div>
       <div className="indv-issue">
           <p className="close-issue">Close Issue</p>
           <p>
               Assigned: <span> Username</span>
           </p>
           <p>
               Priority: <span> PANIC</span>
           </p>
           <p>Description: </p>
           <p className="description-text">
               Short description of the project describing the issue. Honestly I hate seeing Lorem Ipsum Text and I am sure you are also tired of seeing the same. This is a minor league bugger tracker/issue tracker. 
           </p>
           <hr/>
       </div>
       <div className="indv-issue">
           <p className="close-issue">Close Issue</p>
           <p>
               Assigned: <span> Username</span>
           </p>
           <p>
               Priority: <span> PANIC</span>
           </p>
           <p>Description: </p>
           <p className="description-text">
               Short description of the project describing the issue. Honestly I hate seeing Lorem Ipsum Text and I am sure you are also tired of seeing the same. This is a minor league bugger tracker/issue tracker. 
           </p>
           <hr/>
       </div>
    </div>
        
    
   );
}

export default CurrentIssue;
