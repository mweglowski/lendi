import React from 'react'

const Section = ({children, classNames}) => {
	return (
		<div className={"flex flex-col relative h-full " + classNames}>{children}</div>
	)
}

export default Section