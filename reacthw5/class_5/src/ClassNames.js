import React from 'react'

import classNames from 'classnames'

const ClassNames = () => {
  return (
    <div className={classNames('foo', { bar: true, bazz: true })}>
      Hello
    </div>
  )
}

export default ClassNames
