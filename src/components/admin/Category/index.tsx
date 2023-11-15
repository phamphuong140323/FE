import { ICategory } from '../../../interfaces/category'; 
import React from 'react'
import { Table, Button, Skeleton, Popconfirm, Alert } from "antd";
import { Link } from "react-router-dom";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { useGetCategorysQuery, useRemoveCategoryMutation } from "../../../api/category"


const AdminCategory = () => {
    const { data: categorytData, error, isLoading } = useGetCategorysQuery();
    const [removeCategory, { isLoading: isRemoveLoading, isSuccess: isRemoveSuccess }] = useRemoveCategoryMutation();

    const confirm = (id: any) => {
        removeCategory(id);
    };
    const dataSource = categorytData?.data.map(({ _id, name, desciption }: ICategory) => ({
        key: _id,
        name,
        desciption
    }));
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Mô tả",
            dataIndex: "desciption",
            key: "desciption",
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
                                <Link to={`/admin/category/${_id}/edit`}><AiTwotoneEdit /></Link>
                                
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
                <h2 className="font-bold text-2xl">Quản lý danh mục</h2>
                <Button type='primary' danger className='bg-red-600'>
                    <Link to="/admin/category/add" className="flex items-center space-x-2">
                        Thêm
                    </Link>
                </Button>
            </header>
            {isRemoveSuccess && <Alert message="Xóa thành công" type="success" />}
            {isLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}
        </div>
    );
};

export default AdminCategory;