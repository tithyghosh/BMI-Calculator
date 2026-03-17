import React from 'react'
import LeftContent from './LeftContent'

import RightContent from './RightContent'

const ContentPage = () => {
  return (
    <div className='py-3 px-16 flex items-start justify-between'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default ContentPage
