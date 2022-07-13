import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { SET_CAROUSEL } from "./types/CarouselTypes"

export const getCarouselAction = () => {
    return async (dispatchFunc) => {
        try {
            const result = await quanLyPhimService.layDanhSachBanner()

            dispatchFunc({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        } catch (err) {
            console.log("err", err)
        }
    }
}