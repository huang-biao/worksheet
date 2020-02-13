import React from 'react'
import {Tag}from 'antd'

export default class Tags extends React.Component{
    
  
render(){

    function log(e) {
        console.log(e);
      }
    return(
        <Tag closable onClose={log}>
        Tag 2
      </Tag>
    )
}

}