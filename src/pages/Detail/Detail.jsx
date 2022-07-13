import React, { useEffect } from 'react';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import "../../assets/styles/circle.scss"
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import moment from "moment"
import { NavLink } from 'react-router-dom';


const { TabPane } = Tabs;

function Detail(props) {

    const { filmDetail } = useSelector(state => state.QuanLyPhimReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        //lay thong tin param tu url
        let { id } = props.match.params

        dispatch(layThongTinChiTietPhim(id))
    }, [])

    return (
        <div style={{
            backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundSize: "100%", backgroundPosition: "center", minHeight: '100vh'
        }}>
            <CustomCard color="white" blur={20} borderRadius={0}
                style={{ paddingTop: 150, minHeight: '100vh' }} effectColor='white'
            >
                <div className="grid grid-cols-12">
                    <div className="col-span-5 col-start-3">
                        <div className="grid grid-cols-3">
                            <img className='col-span-1' src={filmDetail.hinhAnh} style={{ width: "100%", height: 300 }} alt={filmDetail.tenPhim} />
                            <div className='col-span-2 ml-10' style={{ marginTop: "10%" }}>
                                <p className="text-sm">{`Ngày chiếu: ${moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}`}</p>
                                <p className='text-3xl'>{filmDetail.tenPhim}</p>
                                {filmDetail.moTa?.length > 300 ? <span>{filmDetail.moTa.slice(0, 300)}...</span> : <span>{filmDetail.moTa}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 col-start-9">
                        <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                            <span>{filmDetail.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container m-auto">
                    <Tabs defaultActiveKey="1" className='container'
                        onChange={() => {

                        }}
                    >
                        <TabPane tab="Lịch chiếu" key="1">
                            <div className="mt-20 container m-auto">
                                <Tabs tabPosition={'left'} className="bg-white px-5">
                                    {filmDetail.heThongRapChieu?.map((heThongRap, index) => {
                                        return (
                                            <TabPane key={index}
                                                tab={
                                                    <div className='flex flex-row items-center justify-center py-2'>
                                                        <img src={heThongRap.logo} className="rounded-full" width={50} height={50} alt="" />
                                                        <div className="text-center ml-2">
                                                            {heThongRap.tenHeThongRap}
                                                        </div>
                                                    </div>
                                                }
                                            >
                                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="flex flex-row mt-5">
                                                                <img style={{ width: 50, height: 50 }}
                                                                    src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" alt="" /
                                                                >
                                                                <div>
                                                                    <p className='ml-2 text-1xl'>{cumRap.tenCumRap}</p>
                                                                </div>
                                                            </div>
                                                            <div className="thong-tin-lich-chieu grid grid-cols-4 text-center">
                                                                {cumRap.lichChieuPhim?.slice(0, 16).map((lichChieu, index) => {
                                                                    return (
                                                                        <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="col-span-1 text-green-800 font-bold mt-2" key={index}>
                                                                            {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                                                        </NavLink>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </TabPane>
                                        )
                                    })}
                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông tin" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Đánh giá" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>

            </CustomCard>
        </div>
    );
}

export default Detail;