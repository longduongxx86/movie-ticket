import React, { useEffect, useState } from 'react';
import { Button, Form, DatePicker, InputNumber, Select } from 'antd';
import { quanLyRapService } from '../../../services/QuanLyRapService';
import { useFormik } from 'formik';
import moment from "moment"
import { quanLyDatVeService } from '../../../services/QuanLyDatVeService';

function Showtime(props) {

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: ''
        },
        onSubmit: async values => {
            try {
                const result = await quanLyDatVeService.taoLichChieu(values)

                alert(result.data.content)
            } catch (err) { console.log(err.response?.data) }
        }
    })

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    })

    useEffect(async () => {
        try {
            let result = await quanLyRapService.layThongTinHeThongRap()

            setState({
                ...state,
                heThongRapChieu: result.data.content
            })

        } catch (err) { console.log(err) }
    }, [])

    const convertSelectHeThongRap = () => {
        return state.heThongRapChieu?.map((htr, index) => {
            return { label: htr.tenHeThongRap, value: htr.maHeThongRap }
        })
    }

    const convertSelectCumRap = () => {
        return state.cumRapChieu?.map((cumRap, index) => {
            return { label: cumRap.tenCumRap, value: cumRap.maCumRap }
        })
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChangeHeThongRap = async values => {

        //từ hệ thống rạp call api lấy thông tin rạp
        try {
            let result = await quanLyRapService.layThongTinCumRap(values)

            //gán giá trị cụm rạp vào state.cumRap
            setState({
                ...state, cumRapChieu: result.data.content
            })
        } catch (err) { console.log(err.response?.data) }
    }

    const handleChangeCumRap = value => {
        formik.setFieldValue("maRap", value)
    }

    const onOk = values => {
        formik.setFieldValue("ngayChieuGioChieu", moment(values).format("dd/MM/yyyy hh:mm:ss"))
    }
    const onChangeDate = values => {
        formik.setFieldValue("ngayChieuGioChieu", moment(values).format("dd/MM/yyyy hh:mm:ss"))
    }

    const onChangeInputNumber = values => {
        formik.setFieldValue("giaVe", values)
    }

    //giá trị default
    let film = {}
    if (localStorage.getItem('filmParams')) {
        film = JSON.parse(localStorage.getItem("filmParams"))
    }

    return (
        <Form
            name="basic"
            autoComplete="off"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinishFailed={onFinishFailed}
            onFinish={onFinish}
            onSubmitCapture={formik.handleSubmit}
        >
            <h3>Tạo lịch chiếu - ${props.match.params.tenPhim}</h3>
            <img src={film.hinhAnh} alt="" width={200} height={100} />

            <Form.Item label="Hệ thống rạp">
                <Select placeholder="Chọn hệ thống rạp"
                    onChange={handleChangeHeThongRap}
                    options={convertSelectHeThongRap()}
                />
            </Form.Item>

            <Form.Item label="Cụm rạp">
                <Select placeholder="Chọn cụm rạp"
                    onChange={handleChangeCumRap}
                    options={convertSelectCumRap()}
                />
            </Form.Item>

            <Form.Item label="Ngày chiếu giờ chiếu">
                <DatePicker showTime format="DD?MM?YYY hh/mm/ss"
                    onChange={onChangeDate} onOk={onOk}
                />
            </Form.Item>

            <Form.Item label="Giá vé">
                <InputNumber min={75000} max={150000}
                    onChange={onChangeInputNumber}
                />
            </Form.Item>

            <Form.Item label="Chức năng">
                <Button htmlType='submit'>Tạo lịch chiếu</Button>
            </Form.Item>
        </Form>
    );
}

export default Showtime;