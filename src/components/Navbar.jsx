import React from 'react'

function Navbar() {
    return (
        <div className=" mt-1 navbar w-screen sticky z-0">
            <div className="navbar-start">
                <a className="btn md:mx-32 mx-6 btn-ghost text-2xl  md:text-3xl">SmartML Labs</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                        <details>
                            <summary>Resume</summary>
                            <ul className="p-2">
                                <li><a>Gen-Ai</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Cover Letter</a></li>
                    <li>
                        <details>
                            <summary>Templates</summary>
                            <ul className="p-2">
                                <li><a>Display</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Profile</summary>
                            <ul className="p-2">
                                <li><a>Details</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
            <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <button className="btn md:mx-36 mx-0  hidden lg:block">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar