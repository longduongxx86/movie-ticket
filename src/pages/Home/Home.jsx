import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultipleRows from '../../components/RSlick/MultipeRow';
import HomeMenu from './HomeMenu/HomeMenu';
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel"
import { LayDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction';

function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer)
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const action = LayDanhSachPhimAction()
        dispatch(action)

        dispatch(layDanhSachHeThongRapAction())
    }, [])

    return (
        <div className='container m-auto '>
            <HomeCarousel />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <MultipleRows arrFilm={arrFilm} />
                </div>
            </section>


            <div className="mx-36">
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>
        </div>
    );
}

export default Home;