import { Fragment, useEffect } from "react"
import { Route } from "react-router-dom"
import Footer from "./Layout/Footer/Footer"
import Header from "./Layout/Header/Header"

export const HomeTemplate = props => {
    const { Component, ...restProps } = props   //path,exact,component

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return <Route {...restProps} render={(propsRoute) => {  //props.location, history, match...
        return <Fragment>
            <Header {...propsRoute} />

            <Component {...propsRoute} />

            <hr className="mt-10" />

            <Footer />
        </Fragment>
    }} />
}