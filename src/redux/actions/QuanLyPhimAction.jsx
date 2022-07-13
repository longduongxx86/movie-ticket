import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_FILM } from "./types/QuanLyPhimTypes"
import { history } from "../../App"

export const LayDanhSachPhimAction = (tenPhim = "") => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim)

            //lấy data từ api đưa lên redux
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        } catch (err) {
            console.log("err", err)
        }
    }
}

export const themPhimUpLoadHinhAction = formData => {
    return async dispatch => {
        try {
            let result = await quanLyPhimService.themPhimUpLoadHinh(formData)
            alert("Thêm thành công")

            console.log("result", result.data.content)
        }
        catch (err) { console.log(err) }
    }
}

export const capNhatPhimUploadAction = formData => {
    return async dispatch => {
        try {
            let result = await quanLyPhimService.capNhatPhimUpload(formData)
            alert('Cập nhật phim thành công!')


            dispatch(LayDanhSachPhimAction())
            history.push("/admin/films")
        } catch (err) {
            console.log(err)
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async dispatch => {
        try {
            const result = await quanLyPhimService.layThongTinPhim(maPhim)

            dispatch({
                type: SET_THONG_TIN_FILM,
                thongTinFilm: result.data.content
            })
        }
        catch (err) { console.log(err) }
    }
}

export const xoaPhimAction = maPhim => {
    return async dispatch => {
        try {
            const result = await quanLyPhimService.xoaPhim(maPhim)

            alert("Xoá phim thành công!")

            dispatch(LayDanhSachPhimAction())

        } catch (err) { console.log(err.response?.data) }
    }
}