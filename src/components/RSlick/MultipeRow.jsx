import React, { } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimTypes";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from "./MultipleRow.module.css"

function MultipeRow(props) {

    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

    const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer)

    let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film"
    let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film"

    const dispatch = useDispatch()

    const renderFilm = () => {
        return props.arrFilm.slice(0, 12).map((item, index) => {
            return (
                <div key={index}>
                    <Film_Flip item={item} />
                </div>
            )
        })
    }

    return (
        <div>
            <button type="button"
                className={`${styleSlick[activeClassDC]} mr-1 px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100`}
                onClick={() => {
                    const action = {
                        type: SET_FILM_DANG_CHIEU
                    }

                    dispatch(action)
                }}
            >
                Phim đang chiếu
            </button>
            <button type="button"
                className={`${styleSlick[activeClassSC]} mr-1 px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100`}
                onClick={() => {
                    const action = {
                        type: SET_FILM_SAP_CHIEU
                    }

                    dispatch(action)
                }}
            >
                Phim sắp chiếu
            </button>
            <Slider {...settings}>
                {renderFilm()}
            </Slider>
        </div >
    );
}

export default MultipeRow;
