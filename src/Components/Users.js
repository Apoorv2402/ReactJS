import React from 'react';
import {withRouter} from 'react-router-dom';


function Users(props){
    console.log(props)
    return(
      <div>
        <h3>user component</h3>
        <h4>This is {props.match.params.name} with UID: {props.match.params.id}</h4>
      </div>
    )
  }
//   Using User as high order function
  export default withRouter(Users);