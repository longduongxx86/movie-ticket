import React, { Fragment } from 'react';
import { Tabs } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from "moment"

const { TabPane } = Tabs;

function HomeMenu(props) {

    const [tabPosition, setTabPosition] = useState('left');

    const renderHeThongRap = () => {
        return props.heThongRapChieu?.map((heThongRap, index) => {
            return (
                <TabPane key={index}
                    tab={<img src={heThongRap.logo} alt='' className="rounded-full" width="50" />}
                >
                    <Tabs tabPosition={tabPosition}>
                        {heThongRap.lstCumRap?.map((cumRap, index) => {
                            return (
                                <TabPane key={index}
                                    tab={
                                        <div style={{ width: 300, display: 'flex' }}>
                                            <img src={heThongRap.logo} alt='' className="rounded-full" width="50" />
                                            <div className='text-left ml-2'>
                                                {cumRap.tenCumRap}
                                                <p style={{ color: "red" }}>Chi tiết</p>
                                            </div>
                                        </div>
                                    }
                                >
                                    {cumRap.danhSachPhim.slice(0, 10).map((phim, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <div className="my-5">
                                                    <div style={{ display: "flex" }}>
                                                        <img style={{ width: "100px ", height: "100px " }}
                                                            src={phim.hinhAnh} alt={phim.tenPhim}
                                                            onError={(e) => {
                                                                e.target.onerror = null
                                                                e.target.src = "https://mundogenshinimpact.com/wp-content/uploads/mejor-build-hu-dps.png"
                                                            }}
                                                        />
                                                        <div className='ml-4'>
                                                            <h3 className=' text-2xl text-green-600'>{phim.tenPhim}</h3>
                                                            <p>{cumRap.diaChi}</p>
                                                            <div className='grid grid-cols-6 gap-6'>
                                                                {phim.lstLichChieuTheoPhim?.map((lichChieu, index) => {
                                                                    return (
                                                                        <NavLink key={index} to={`/checkout/${lichChieu.maLichChieu}`} className="text-fuchsia-500">
                                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                        </NavLink>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </Fragment>
                                        )
                                    })}
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </TabPane>
            )
        })
    }

    return (
        <>
            <Tabs tabPosition={tabPosition}>
                {renderHeThongRap()}
            </Tabs>
        </>
    );
}


export default HomeMenu;