import React from 'react'
import PageContent from './PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
function ErrorPage() {
    const error = useRouteError()

    let title = "An Error Occured!"
    let message = "Something Went Wrong!"

    if (error.status === 500) {
        message = JSON.parse(error.data).message
    }

    if (error.status === 404) {
        title = "Not found!"
        message = "Couldn't fetch content! O_O"
    }
    return (
        // <h1 style={{textAlign: 'center', color: "red", paddingTop: "10px"}}>An Error Occured, Please Try Again Later! O.o</h1>
        <>
                <PageContent title={title}>
                    <p>{message}</p>
                </PageContent>
        </>


    )
}

export default ErrorPage