import React, { useEffect, useState,} from 'react'
import "./tab.css"


function Tab({label, message, click, active, activeState, tabNumber }) {

  const handleClick = () => {
        click(message, tabNumber)
    }

    useEffect(() => {

        if(active){
            handleClick()
        }

    }, [active])


  return (
    <div className= {`tab-wrapper }`}>
     <div onClick={handleClick}>{label}</div>
     {activeState === tabNumber && <div className='active-line'/>}
    </div>
  )
}

export default Tab