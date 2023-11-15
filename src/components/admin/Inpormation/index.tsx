import { IInformation } from '../../../interfaces/information';
import React from 'react'
import { Table, Button, Skeleton, Popconfirm, Alert, Upload, message } from "antd";
import { Link } from "react-router-dom";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { useGetInformationsQuery, useRemoveInformationMutation } from '../../../api/information';


const AdminInformation = () => {
    const { data: informationData, error, isLoading } = useGetInformationsQuery();
    const [removeInfor, { isLoading: isRemoveLoading, isSuccess: isRemoveSuccess }] = useRemoveInformationMutation();

    const confirm = (id: any) => {
        removeInfor(id);
    };
    const dataSource = informationData?.data?.map((information: IInformation) => ({
        key: information._id,
        title: information.title,
        email: information.email,
        phone: information.phone,
        image: information.image,
        logo: information.logo,
        address: information.address,
        nameStore: information.nameStore,
    }));
    const columns = [
        {
            title: "Tiêu đề",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            key: "image",
            render: (url: string) => <img src={url} alt="" style={{ width: 50 }} />,
        },
        {
            title: "Logo",
            dataIndex: "logo",
            key: "logo",
            render: (url: string) => <img src={url} alt="" style={{ width: 50 }} />,
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Tên cửa hàng",
            dataIndex: "nameStore",
            key: "nameStore",
        },
        {
            title: "",
            render: ({ key: _id }: any) => {
                return (
                    <>
                        <div className="space-x-2">
                            <Popconfirm
                                title="Bạn có muốn xóa"
                                onConfirm={() => confirm(_id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type='primary' danger className='bg-red-600'>
                                    <AiTwotoneDelete />
                                </Button>
                            </Popconfirm>

                            <Button type='primary' className='bg-blue-600'>
                                <Link to={`/admin/information/${_id}/edit`}><AiTwotoneEdit /></Link>

                            </Button>
                        </div>
                    </>
                );
            },
        },
    ];

    return (
        <div>
            <header className="mb-4 flex justify-between items-center">
                <h2 className="font-bold text-2xl">Quản lý contact</h2>
                <Button type='primary' danger className='bg-red-600'>
                    <Link to="/admin/information/add" className="flex items-center space-x-2">
                        Thêm
                    </Link>
                </Button>
            </header>
            {isRemoveSuccess && <Alert message="Xóa thành công" type="success" />}
            {isLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}
        </div>
    );
};

export default AdminInformation;