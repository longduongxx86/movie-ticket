import { connection } from "../../index"
import { quanLyDatVeService } from "../../services/QuanLyDatVeService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe"
import { displayLoadingAction, hideLoadingAction, } from "./LoadingActions"
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeTypes"

export const layChiTietPhongVeAction = maLichChieu => {
    return async (dispatch) => {
        try {

            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)

            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}


export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {

            dispatch(displayLoadingAction)

            const result = await quanLyDatVeService.datVe(thongTinDatVe)

            //Dặt vé thành công, gọi API load lại phòng vé
            // dispatch bất đồng bộ, gọi api lâu nên dùng await cho đồng bộ
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))

            //vì không gọi api => không mất nhiều thời gian => nên không cần await
            await dispatch({ type: DAT_VE_HOAN_TAT })

            await dispatch(hideLoadingAction)

            await dispatch({ type: CHUYEN_TAB })

        } catch (err) {
            console.log(err.response?.data)
        }
    }
}


export const datGheAction = (ghe, maLichChieu) => {
    // redux thunk còn 1 tham số nữa là getState
    // giúp lấy dữ liệu từ các store reducer khác
    return async (dispatch, getState) => {
        //đưa thông tin ghế lên reducer
        await dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
        })

        //call api về backend
        let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat
        let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan

        console.log("danhSachGheDangDat", danhSachGheDangDat)
        console.log("taiKhoan", taiKhoan)
        console.log("maLichChieu", maLichChieu)

        //vì ở backend yêu cầu danhSachGheDangDat là string(trong khi danhSachGheDangDat ở đây là arr)
        // convert sang string
        let danhSachGheDangDatString = JSON.stringify(danhSachGheDangDat);

        //call api signalR
        // connection.invoke("datGhe", taiKhoan, danhSachGheDangDatString, maLichChieu)
    }
}