import _ from 'lodash';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from "../../../../App"
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';

function Header(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return (
                <Fragment>
                    <button className="self-center px-8 py-3 rounded"
                        // chuyển tới trang login 
                        onClick={() => {
                            history.push("/login")
                        }}
                    >
                        Sign in
                    </button>
                    <button
                        className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                        onClick={() => {
                            history.push('/register')
                        }}
                    >
                        Sign up
                    </button>
                </Fragment>

            )
        }

        return (
            <Fragment>
                <button className='self-center px=8 py-3 rounded text-white text-2xl'
                    onClick={() => {
                        history.push('/login')
                    }}
                >
                    Hello {userLogin.taiKhoan} !
                </button>

                <button className='text-white mr-5 text-2xl bg-red-500 py-1 px-2 rounded-sm'
                    onClick={() => {
                        localStorage.removeItem(USER_LOGIN)
                        localStorage.removeItem(TOKEN)
                        history.push('/home')
                        window.location.reload()
                    }}
                >
                    Đăng xuất
                </button>
            </Fragment>
        )
    }

    return (
        <header className="p-4 bg-opacity-40 bg-black text-white fixed w-full z-50">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to={`/`} rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/home" activeClassName='border-b-2 border-teal-400' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  text-white">
                            Home
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/contact" activeClassName='border-b-2 border-teal-400' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white">
                            Contact
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/news" activeClassName='border-b-2 border-teal-400' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white">
                            News
                        </NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {renderLogin()}
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    );
}

export default Header;