import React, { useState } from 'react'
import "./Tabs.css"

const Tabs = ({children}) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label)

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    }
  return (
    <div>
        <ul className='tabs'>
            {
                children.map((tab) => {

                    const label = tab.props.label
                    return (<li key={label} className= {label == activeTab ? "active-tab" : ""}>
                                <a href="#" onClick={(e)=>handleClick(e,label)}>{label}</a>
                            </li>)
                })
            }
        </ul>

        {
            children.map((tabbedContent) =>  {
               if(tabbedContent.props.label == activeTab) {
                return (
                     <div className='content-area' key={tabbedContent.props.label}>{tabbedContent.props.children}</div>
                )
               }
            })
        }
    </div>
  )
}

export default Tabs