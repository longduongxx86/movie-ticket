import { Fragment, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { USER_LOGIN } from "../../util/settings/config"

//phỉa là export defaul thì mới dùng được lazy()
const CheckoutTemplate = props => {
    const { Component, ...restProps } = props   //path,exact,component

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    if (localStorage.getItem(USER_LOGIN)) { //nếu đã đăng nhập
        return <Route {...restProps} render={(propsRoute) => {  //props.location, history, match...
            return (
                <Fragment>

                    <Component {...propsRoute} />

                </Fragment>
            )
        }} />
    } else {
        return <Redirect to="/login" />
    }
}

export default CheckoutTemplate