import React from 'react'
import { useParams } from 'react-router-dom'

function NotFound() {
    const { pageName } = useParams()
    return (
        <h1 className='text-4xl font-bold'>{pageName} Page Not Found</h1>
    )
}

export default NotFound