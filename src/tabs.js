import React, { useState } from 'react'
import Tab from './tab'
import "./tabs.css";

function Tabs() {

    const [tabContent, setTabContent] = useState(null);
    const [activeState, setActiveState] = useState(1);

    const handleContent = (content, tn) => {
        setTabContent(content)
        setActiveState(tn)
    }

  return (
    <div className='wrapper'>
        <div className='tabs-container'>

            <Tab label={"one"} message={"Tab-Content-1"} click={handleContent} active={true} tabNumber={1} activeState={activeState} />
            <Tab label={"two"} message={"Tab-Content-2"} click={handleContent}  tabNumber={2} activeState={activeState} />
            <Tab label={"three"} message={"Tab-Content-3"} click={handleContent} tabNumber={3} activeState={activeState}/>
        </div>
        <div className='content-wrapper'>
            {tabContent}
        </div>
    </div>
    
  )
}

export default Tabs