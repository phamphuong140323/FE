import { Link, useNavigate } from "react-router-dom"
import "./Shop_Products_ListAll.css"
import Item from "../../../../components/item/item"
import { IoIosArrowDropdown } from "react-icons/io"
import { Tooltip } from "antd"
import { BsSortDown, BsSortDownAlt } from "react-icons/bs"
import { MdOutlineDiscount } from "react-icons/md"
import { RiTShirtLine } from "react-icons/ri"
import { PiStarThin } from "react-icons/pi"
import { AiOutlineEye } from "react-icons/ai"
import Loading from "../../../../components/action/Loading/Loading"
import Comment from "@/components/admin/comment/Comment"
import { useGetProductsQuery } from "@/api/product"
import { IProduct } from "@/interfaces/product"
import { useGetCategorysQuery } from '../../../../api/category';
import { ICategory } from '../../../../interfaces/category';
import React, { useEffect, useState } from 'react'
const Shop_Products = () => {
    const { data: productData } = useGetProductsQuery();
    console.log(productData);
    const { data: categoryData } = useGetCategorysQuery();
    const [sortBy, setSortBy] = useState('asc');
    const handleSortBy = (type: 'asc' | 'desc') => {
        setSortBy(type);
    };
    return (
        <>
            <div className="box-container"
            >

                <div className="box-content mt-10">
                    <div className="big-content w-full px-2 md:w-11/12  mx-auto">
                        {/* menu */}
                        <div className="breadcrumbs">
                            <ul className="flex items-center gap-2">
                                <Link to={"/"}>
                                    <li className="underline underline-offset-4 hover:text-[#17c6aa] ">
                                        Home
                                    </li>
                                </Link>
                                <li>/</li>
                                <li className=" hover:text-[#17c6aa] ">
                                    List Products All
                                </li>
                            </ul>
                        </div>
                        {/* products-sale*/}
                        <div className="banner-products-new">
                            <div className="content-banner bg-gradient-to-t from-white to-teal-500 p-4 rounded-lg my-10 ">
                                <h1 className="text-new-products uppercase text-4xl font-black text-white">Hot Sale</h1>
                                <div className="list-new-products hot-sale-scroll p-5 overflow-x-auto  ">
                                    <div className="content-list-new-products w-max flex gap-4 ">
                                        <div className="content-list-new-products   grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"> {/* Đặt kích thước cho nội dung bên trong */}
                                            {productData?.products.map((product: IProduct, index: any) => (
                                                <div className="w-full">
                                                    <Item product={product} key={index} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* list */}
                        <div className="list_AllProducts ">

                            <div className="content-list-sort">
                                <div className="sort-products-list">
                                    <h1 className="font-semibold text-lg text-[#4a4a4a]  my-3">Lọc sản phẩm theo:</h1>
                                    <div className="list-sort flex flex-col md:flex-row gap-2">
                                        <Tooltip placement="bottom" trigger={"click"} color="white"
                                            title={
                                                <div className="list-size-option">
                                                    <ul className="grid grid-cols-3  p-1">
                                                        {categoryData?.data?.map((category: ICategory) => (
                                                            <Link to={`/category/${category._id}`}>
                                                                <li key={category._id} className="cursor-pointer flex items-center justify-center gap-1 bg-blue-gray-50  m-[1px] px-2 py-1 rounded-lg border-gray-300 border text-black">
                                                                    {category.name}
                                                                </li>
                                                            </Link>
                                                        ))}


                                                    </ul>
                                                </div>
                                            }
                                        >
                                            <div className={`btn-sort-option cursor-pointer flex items-center gap-1  px-3 py-2 rounded-lg  border   `}>
                                                <button className="font-light text-sm">
                                                    Danh Mục
                                                </button>
                                                <i><IoIosArrowDropdown /></i>
                                            </div>
                                        </Tooltip>
                                        <Tooltip placement="bottomRight" trigger={"click"} color="white"
                                            title={
                                                <div className="list-size-option">
                                                    <ul className="grid grid-cols-3 p-1">
                                                        <li className="bg-teal-500 m-1 cursor-pointer flex  items-center justify-center text-white text-center w-8 h-8 rounded-full">Tên sản Phẩm</li>
                                                    </ul>
                                                </div>
                                            }
                                        >
                                            <div className={`btn-sort-option border cursor-pointer flex items-center gap-1 px-3 py-2 rounded-lg`}>
                                                <button >Size</button>
                                                <i><IoIosArrowDropdown /></i>
                                            </div>
                                        </Tooltip>
                                        <Tooltip placement="bottomRight" trigger={"click"} color="white"
                                            title={
                                                <div className="list-size-option">
                                                    <ul className="grid grid-cols-10 p-2">
                                                        <button className={`rounded-sm border-2 border-gray-400 m-1 p-2`}> nút màu</button>
                                                    </ul>
                                                </div>
                                            }
                                        >
                                            <div className={`btn-sort-option cursor-pointer flex items-center gap-1  px-3 py-2 rounded-lg border `}>
                                                <button className="font-light text-sm">Color</button>
                                                <i><IoIosArrowDropdown /></i>
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <h1 className="font-semibold text-lg text-[#4a4a4a] my-3">Sorted by</h1>

                                    <div className="sorted-by flex flex-wrap gap-3 cursor-pointer overflow-x-auto">

                                        <div className="list-sorted-by flex flex-col md:flex-row gap-2   px-3 py-2 rounded-lg border ">
                                            <div className="btn-option High-Low price flex items-center gap-1" onClick={() => handleSortBy('asc')}>
                                                <i className="text-lg"><BsSortDown /></i>
                                                <button className="text-xs">Giá sản phẩm giảm dần</button>
                                            </div>

                                        </div>
                                        {/* price */}
                                        <div className="list-sorted-by flex flex-col md:flex-row gap-2   px-3 py-2 rounded-lg border ">
                                            <div className="btn-option High-Low price flex items-center gap-1"  onClick={() => handleSortBy('desc')}>
                                                <i className="text-lg"><BsSortDownAlt /></i>
                                                <button className="text-xs">Giá sản phẩm tăng dần</button>
                                            </div>
                                        </div>
                                        {/* Hot  */}
                                        <div className="list-sorted-by flex flex-col md:flex-row gap-2   px-3 py-2 rounded-lg border "
                                        >
                                            <div className="btn-option High-Low price flex items-center gap-1">
                                                <i className="text-lg"><MdOutlineDiscount /></i>
                                                <button className="text-xs">Hot promotion</button>
                                            </div>
                                        </div>
                                        {/* New */}
                                        <div className="list-sorted-by flex flex-col md:flex-row gap-2   px-3 py-2 rounded-lg border ">
                                            <div className="btn-option High-Low price flex items-center gap-1">
                                                <i className="text-lg"><RiTShirtLine /></i>
                                                <button className="text-xs">New Products</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-products-item mt-10">
                                <div className="content-list-new-products   grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                    {productData?.products
                                        .slice()
                                        .sort((a, b) => (sortBy === 'asc' ? a.price - b.price : b.price - a.price))
                                        .sort((a, b) => (sortBy === 'asc' ? b.price - a.price : a.price - b.price))
                                        .map((product: IProduct, index: any) => (
                                            <div className="w-full">  <Item product={product} key={index} /></div>))}
                                </div>
                            </div>
                            <div className="text-viewMore w-full flex justify-center my-10">
                                <button className="text-sm text-gray-700 py-2 px-20 rounded-xl view-more-shadow" >
                                    View More Products
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}

export default Shop_Products