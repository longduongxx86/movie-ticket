import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselActions"
import "./HomeCarousel.css"

function HomeCarousel(props) {
    const { arrImg } = useSelector((state) => state.CarouselReducer);

    const dispatch = useDispatch()

    //sau khi giao diện render sữ tự gọi hàm này
    useEffect(() => {

        //dispatch chỉ nhận 2 thứ
        //1: object: action ={type:'',data}
        //2(phải cài middleAware): callbackFunction(dispatch)
        dispatch(getCarouselAction())

    }, [])

    const renderImg = () => {
        //style của carousel
        const contentStyle = {
            height: "400px",
            textAlign: "center",
            lineHeight: "160px",
            color: "#fff",
            background: "#364d79",
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
        };

        return arrImg.map((item, index) => {
            return (
                <div key={index}>
                    <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }} >
                        <img
                            src={item.hinhAnh}
                            alt={item.hinhAnh}
                            className="w-full opacity-0"
                        />
                    </div>
                </div>
            );
        });
    };

    return (
        <Carousel effect="fade" style={{ position: "relative", zIndex: "10" }}>
            {renderImg()}
        </Carousel>
    );
}

export default HomeCarousel;
