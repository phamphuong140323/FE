import { ImageList, ImageListItem, Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Carousel, IconButton } from "@material-tailwind/react";
import { TbTruckDelivery } from "react-icons/tb";
import { FcConferenceCall } from "react-icons/fc";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { Image as AntdImage, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../../../api/product";
import ImagePriview from '../../../../components/Image/ImagePriview';
import { useGetCategorysQuery } from "@/api/category";
import Item from '../../../../components/item/item';
import { IProduct } from "@/interfaces/product";
const Detail_category = () => {
    const { id } = useParams<{ id: string }>();
    const { data: productData } = useGetProductsQuery();
    const { data: categoryData } = useGetCategorysQuery();
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


                        {/* list */}
                        <div className="list_AllProducts ">
                            <div className="list-products-item mt-10">
                                <div className="content-list-new-products   grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                    {productData?.products
                                        .slice()
                                        .map((product: IProduct, index: any) => (

                                            <div className="w-full">  <Item product={product} key={index} /></div>


                                        ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </>
    );
};

export default Detail_category;
