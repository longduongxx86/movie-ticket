import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_FILM } from "../actions/types/QuanLyPhimTypes"
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapTypes"

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "test",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
            "moTa": "The Divine Fury (tiếng Hàn: 사자; Hanja: 使者; Romaja: Saja) là một bộ phim kinh dị hành động Hàn Quốc năm 2019 do Kim Joo-hwan đồng đạo diễn và chấp bút kịch bản.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2022-05-26T00:00:00",
            "danhGia": 6,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "test",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
            "moTa": "The Divine Fury (tiếng Hàn: 사자; Hanja: 使者; Romaja: Saja) là một bộ phim kinh dị hành động Hàn Quốc năm 2019 do Kim Joo-hwan đồng đạo diễn và chấp bút kịch bản.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2022-05-26T00:00:00",
            "danhGia": 6,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        },
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    filmDetail: {},
    thongTinFilm: {}
}


export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm
            state.arrFilmDefault = state.arrFilm

            return { ...state }
        }

        case SET_FILM_DANG_CHIEU: {
            //set đang chiếu =true, nếu đấm vào đang chiếu thì sắp chiếu false và đang chiếu true
            state.sapChieu = false
            state.dangChieu = true

            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu)

            return { ...state }
        }

        case SET_FILM_SAP_CHIEU: {
            state.dangChieu = false
            state.sapChieu = true

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu)

            return { ...state }
        }

        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail

            return { ...state }
        }

        case SET_THONG_TIN_FILM: {
            state.thongTinFilm = action.thongTinFilm

            return { ...state }
        }

        default: return { ...state }
    }
}