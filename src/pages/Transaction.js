import React from 'react'
import { Calendar } from 'antd';
function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}
export default function Transaction() {
  return (
    <div>

 
    
<Calendar onPanelChange={onPanelChange} /> </div>
  )
}
