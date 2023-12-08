import React, { useEffect, useState } from 'react';
import { Button, Space, Spin, Table, Tag, notification } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {DeleteTwoTone, EditOutlined} from 
'@ant-design/icons'; 
import { ISize } from '@/interfaces/size';
import { useGetSizesQuery, useRemoveSizeMutation } from '@/api/sizes';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
type Props = {};
const Size = (props: Props) => {
    const { data: sizeData ,refetch} = useGetSizesQuery();
    const [removeSize] = useRemoveSizeMutation()
    const handleSoftDelete = (id: string) => {
        Modal.confirm({
            title: 'Bạn có muốn xóa size này?',
            content: 'Hành động này không thể hoàn tác.',
            onOk: async () => {
                try {
                    await removeSize(id);
                    notification.success({
                        message: 'Thành công',
                        description: 'Size đã được xóa mềm thành công!',
                    });
                    refetch();
                } catch (error) {
                    notification.error({
                        message: 'Lỗi',
                        description: 'Không thể xóa mềm size',
                    });
                }
            },
        });
    };
    const dataSource = sizeData?.map((size: any) => ({
        key: size._id,
        name: size.name,
       quantity: size.quantity

    }));
    console.log(dataSource);
    

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Quanlity',
    dataIndex: 'quantity',
    key: 'quantity',
  
  },

  {
    title: 'Action',
    key: 'action',
    render: ({ key: id }: { key: number | string }) => {
        return (
            <>
                <Button>
                    <Link to={`/admin/size/update/${id}`}><EditOutlined /></Link>
                </Button>
                <Button onClick={() => handleSoftDelete(id.toString())} type="text" danger className="ml-2">
                    <DeleteTwoTone />
                </Button>
            </>
        );
    },
  },
];

return(
    <div>
       <header className="flex items-center justify-between mb-4">
            <h2 className="text-2xl">Quản lý SIZE</h2>
            <Button type="primary" danger>
                <Link to="/admin/size/add">Thêm sản SIZE</Link>
            </Button>
        </header>
      <Table dataSource={dataSource} columns={columns} />
    </div>
)
}
export default Size;