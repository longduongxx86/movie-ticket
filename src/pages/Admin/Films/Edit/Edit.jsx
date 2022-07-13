import _ from "lodash";
import moment from "moment";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import {
    capNhatPhimUploadAction,
    layThongTinPhimAction,
} from "../../../../redux/actions/QuanLyPhimAction";
import { GROUPID } from "../../../../util/settings/config";
import { useDispatch, useSelector } from "react-redux";

const Edit = (props) => {
    const [componentSize, setComponentSize] = useState("default");
    const [imgSrc, setImgSrc] = useState("");
    const { thongTinFilm } = useSelector((state) => state.QuanLyPhimReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params;

        dispatch(layThongTinPhimAction(id));
    }, []);

    const formik = useFormik({
        //enableReinitialize chỉ nên dùng cho những trang edit (mặc định false)
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinFilm.maPhim,
            tenPhim: thongTinFilm.tenPhim,
            trailer: thongTinFilm.trailer,
            moTa: thongTinFilm.moTa,
            ngayKhoiChieu: thongTinFilm.ngayKhoiChieu,
            dangChieu: thongTinFilm.dangChieu,
            sapChieu: thongTinFilm.sapChieu,
            hot: thongTinFilm.hot,
            danhGia: thongTinFilm.danhGia,
            hinhAnh: null,
            maNhom: "GP01",
        },
        onSubmit: (values) => {
            values.maNhom = GROUPID;
            console.log(values);

            //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
            let formData = new FormData();
            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append("File", values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }

            //cập nhật upload hình của phim
            dispatch(capNhatPhimUploadAction(formData));
        },
    });

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value);
        formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
    };

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeFile = async (e) => {
        //Lấy file ra từ e
        let file = e.target.files[0];
        if (
            file.type === "image/jpeg" ||
            file.type === "image/jpg" ||
            file.type === "image/gif" ||
            file.type === "image/png"
        ) {
            //Đem dữ liệu file lưu vào formik
            await formik.setFieldValue("hinhAnh", file);

            //Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result); //Hình base 64
            };
        }
    };

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3>Thêm mới phim </h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input
                        name="tenPhim"
                        onChange={formik.handleChange}
                        value={formik.values.tenPhim}
                    />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input
                        name="trailer"
                        onChange={formik.handleChange}
                        value={formik.values.trailer}
                    />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input
                        name="moTa"
                        onChange={formik.handleChange}
                        value={formik.values.moTa}
                    />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker
                        format={"DD/MM/YYYY"}
                        onChange={handleChangeDatePicker}
                        value={moment(formik.values.ngayKhoiChieu)}
                    />
                </Form.Item>
                <Form.Item label="Đang chiếu">
                    <Switch
                        onChange={handleChangeSwitch("dangChieu")}
                        checked={formik.values.dangChieu}
                    />
                </Form.Item>
                <Form.Item label="Sắp chiếu">
                    <Switch
                        onChange={handleChangeSwitch("sapChieu")}
                        checked={formik.values.sapChieu}
                    />
                </Form.Item>
                <Form.Item label="Hot">
                    <Switch
                        onChange={handleChangeSwitch("hot")}
                        checked={formik.values.hot}
                    />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber
                        onChange={handleChangeInputNumber("danhGia")}
                        min={1}
                        max={10}
                        value={formik.values.danhGia}
                    />
                </Form.Item>

                <Form.Item label="Hình ảnh">
                    <input
                        type="file"
                        onChange={handleChangeFile}
                        accept="image/png, image/jpeg, image/gif, image/png"
                    />
                    <br />
                    <img
                        style={{ width: 150, height: 150 }}
                        alt="..."
                        src={imgSrc === "" ? thongTinFilm.hinhAnh : imgSrc}
                    />
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type="submit" className="bg-blue-300 text-white p-2">
                        Cập nhật
                    </button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Edit;
