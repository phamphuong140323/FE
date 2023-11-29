import { Pagination, notification } from 'antd'
import { EditOutlined } from "@ant-design/icons"
import { Switch, Popconfirm, Button } from "antd"
import { BsFillTrash3Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import Message from "../../action/Message/Message"
import Loading from '../../action/Loading/Loading'
import ImagePriview from '../../Image/ImagePriview'
import { useGetTintucQuery, useRemoveTintucMutation } from '@/api/tintuc'
const DanhSachTinTuc = () => {
    const { data: tintucData, error, isLoading } = useGetTintucQuery();
    const [removeTintuc] = useRemoveTintucMutation()
    const handleSoftDelete = async (id: string) => {
        try {
            await removeTintuc(id);
            notification.success({
                message: 'Success',
                description: 'Xóa tin tức thành công',
            })
        } catch (error) {
            notification.error({
                message: 'Error',
                description: 'Xóa tin tức không thành công',
            });
        }
    };
    return (<>
        {isLoading ? (
            <Loading />
        ) : error ? (
            "Error"
        ) : (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
                    <h2 className="font-bold text-xl mt-5">Tin Tức </h2>
                    <div className="ml-auto mb-5">
                        <input
                            className="h-10 w-60 px-4 rounded-xl border-2 mx-2"
                            id="search"
                            type="search"
                            placeholder="Search website..."
                        />
                        <Link to={'/admin/tintuc/add'} className="my-2 border rounded p-2 bg-blue-500 hover:bg-red-700 font-bold py-2 px-4 text-white w-full lg:w-40 ">Add Tin Tức </Link>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Tiêu đề
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Nội Dung
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Trạng Thái
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {tintucData?.length ? (
                                tintucData.map((tintuc, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap px-4 py-2">
                                            <div className="flex items-center">
                                                <ImagePriview width={12} listImage={tintuc.image} />
                                                <Link to={`detailtintuc/${tintuc._id}`} >
                                                    <p className="text-xs lg:text-base md:text-xl mx-4">{tintuc.tieude}
                                                    </p>
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            <p className="text-xs lg:text-base md:text-xl max-w-[300px] truncate">
                                                {tintuc.noidung}
                                            </p>
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            <p className="text-xs lg:text-base md:text-xl mx-10">{tintuc.trang_thai}</p>
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2">
                                            <div className="flex items-center">
                                                <Popconfirm
                                                    placement="topRight"
                                                    title={`Delete the news "${tintuc.tieude}"?`}
                                                    onConfirm={() => handleSoftDelete(tintuc._id)}
                                                    okText="Yes"
                                                    cancelText="No"
                                                    okButtonProps={{ style: { background: "red" } }}
                                                >
                                                    <Button icon={<BsFillTrash3Fill />} />
                                                </Popconfirm>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4}>No tintuc found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div >
        )}
    </>
    );
}


export default DanhSachTinTuc