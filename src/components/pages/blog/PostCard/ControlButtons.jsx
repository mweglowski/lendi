import React from 'react'
import { Link } from 'react-router-dom'

const ControlButtons = ({userDoc, confirmDelete, postId}) => {
	return (
		<div>{userDoc && userDoc.role === "admin" && (
			<div className="absolute top-[-25px] left-0 gap-1 flex">
				<button
					onClick={confirmDelete}
					className="button rounded-lg px-3 py-1"
				>
					Usuń
				</button>
				<Link to={`/blog/post/edit/${postId}`} className="button px-3 py-1 rounded-lg">
					Edytuj
				</Link>
			</div>
		)}</div>
	)
}

export default ControlButtons