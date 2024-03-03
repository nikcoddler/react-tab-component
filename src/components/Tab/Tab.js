import React from 'react'
import Tabs from '../Tabs/Tabs'

const Tab = () => {
  return (
    <Tabs>
        <div label="Tab 1">
            <h2>Tab 1</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
        </div>
        <div label="Tab 2">
            <h2>Tab 2</h2>
            <p>Tab 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
        </div>
        <div label="Tab 3">
            <h2>Tab 3</h2>
            <p>Tab 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
        </div>
    </Tabs>
  )
}

export default Tab