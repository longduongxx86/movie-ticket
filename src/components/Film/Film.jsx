import React from 'react';

function Film(props) {

    const { phim } = props


    return (
        <div className="h-full bg-gray-100 bg-opacity-75 px-7 pt-16 pkb-24 rounded-lg overflow-hidden text-center relative h-100 cursor-pointer">
            <div style={{ background: `url(${phim.hinhAnh}) no-repeat`, backgroundPosition: "center", backgroundSize: "100%" }}>
                <img src={phim.hinhAnh} alt={phim.tenPhim} className="opacity-0 w-full " style={{ height: 200 }} />
            </div>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-20 pt-4">
                {phim.tenPhim.length > 30 ? <span>{phim.tenPhim.slice(0, 30)}...</span> : <span>{phim.tenPhim}</span>}
            </h1>
            <p className="leading-relaxed mb-3">
                {phim.moTa.length > 100 ? <span>{phim.moTa.slice(0, 100)}...</span> : <span>{phim.moTa}</span>}
            </p>
            <a className="text-indigo-500 inline-flex items-center">Đặt vé
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                    strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                </svg>
            </a>
        </div >
    );
}

export default Film;