import React, { useState, useEffect } from 'react';

import "./Addissue.css";

function AddIssue() {
const [addIssue, setAddIssue] = useState(true);

  return (
   <div className="add-issue">
       <form>
           <label>
               Description
               <input type="text" placeholder= "Description of Issue ..." />
           </label>
        <label>
               Assign To

          <select name="forDev" id="forDev">
            <option value="Steve">Steve</option>
            <option value="Liza">Liza</option>
            <option value="Sal">Sal</option>
            <option value="Ron">Ron</option>
          </select>
        </label>
        <label>
               Priority Level

          <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Panic">PANIC</option>
          </select>
        </label>
        <button type="submit">Add</button>
       </form>
   </div>
  );
}

export default AddIssue;
