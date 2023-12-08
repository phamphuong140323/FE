import { Rating, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../Image/ImagePriview";
import { AiFillEye } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
// import Icon from "../Icon/icon";
// import { Tooltip } from "antd";
import { IProduct } from "../../interfaces/product";
// import FormatterPrice from "../FormatterPrice/FormatterPrice";
import { useState } from "react";
import { useGetProductsQuery } from "@/api/product";
import ImagePriview from '../Image/ImagePriview';
import { useGetColorsQuery } from "@/api/color";
import { IColor } from "@/interfaces/color";
import { Option } from "antd/lib/mentions";
type Props = {
    buttonAdd?: string;
    product?: IProduct;
    icon?: string;
    infoProduct?: boolean
}
interface ColorSize {
    color: string;
    sizes: string;
    _id: string;
}

const Item = ({ buttonAdd, product, icon, infoProduct = true }: Props) => {
    const { data: color } = useGetColorsQuery();

    const [imageHover, setImage] = useState(product?.image[0]);
    const handleClickThumbnail = (image: string) => {
        setImage(image);
    };
    // if (!product) {
    //     return null
    // }

    return (<>
        <div className="w-full md:w-64 m-auto content shadow-2xl rounded-lg overflow-hidden">
            <div className="w-full">
                <div className="w-full relative overflow-hidden ">
                    <td className="whitespace-nowrap  text-gray-700 ">
                        <div className="items-center h-70 ">
                            <ImagePriview width={70} listImage={product?.image} />
                        </div>
                    </td>
                    <div className="prd-sale absolute top-2 left-1 min-w-[60px]">
                        <div className="py-[2px] mb-1 bg-pink-600">
                            <span className=" m-1 block  rounded-full text-center text-sm font-medium text-white">
                                {product?.sale} SALE
                            </span>   </div>
                        <div className="py-[2px] bg-[#33c7fd]">
                            <span className=" m-1 block  rounded-full text-center text-sm font-medium text-white">
                                Mới
                            </span>     </div>

                    </div>
                    <div className="prd-circle-labels absolute flex flex-col top-1 right-1 ">
                        <span className="eye bg-white flex justify-center items-center rounded-full shadow-md mt-2  cursor-pointer">
                            <i className="icon-eye text-2xl p-1   ">
                                <span>
                                    <AiFillEye  />
                                    
                                </span>
                            </i>
                        </span>
                        <div className="color-palette bg-white flex flex-col justify-center items-center w-8 rounded-full shadow-md mt-2 cursor-pointer">
                            <i className="icon-palette  ">
                                <img
                                    src="https://play-lh.googleusercontent.com/fn03mcSzK10OdPq_eio_Buh7BXiN8TNOGZPHHCnjtPyynK9kJhkdlbqDd0o_vZrIIw=w240-h480-rw"
                                    className="w-full rounded-full"
                                    alt=""
                                />
                            </i>
                            <div className="list-color">
                                <ul className="flex flex-col gap-3">
                                    <li>
                                    <select name="color" id="color">
                                                {product?.colorSizes.map((colorSize) =>
                                                    <option className={`text-${colorSize.color}-500`}></option>
                                                )}
                                            </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="list-options color-swatch absolute bottom-1 left-1 ">
                        <li className=" w-10 h-10 mt-1 rounded-full hover:outline-2 hover:outline-teal-400 outline outline-1 cursor-pointer overflow-hidden  ">
                            <img
                                src="https://play-lh.googleusercontent.com/fn03mcSzK10OdPq_eio_Buh7BXiN8TNOGZPHHCnjtPyynK9kJhkdlbqDd0o_vZrIIw=w240-h480-rw"
                                className="w-full h-full object-contain p-1"
                                alt="Color Name"
                            />
                        </li>
                    </ul>
                </div>
                <div className="prd-tag ">
                    <div className="prd-info">
                        <div className="prd-info-wrap bg-white">
                            <div className="prd-rating text-center pt-5 cursor-pointer">
                            </div>
                            <div className="text-center mt-1 cursor-pointer">
                                <span className="text-[#9e9e9e] font-normal text-sm">
                                    SneakerStore
                                </span>
                            </div>
                            <h2 className="prd-title text-center mt-1 cursor-pointer min-h-[50px] flex items-center justify-center">
                                <span className="text-[#282828] font-medium text-base hover:text-[#17c6aa] ">
                                    <Link to={`/products/${product?._id}`}>
                                        {product?.name}
                                    </Link>
                                </span>
                            </h2>
                            <h2 className=" price  flex justify-center gap-5 text-center mt-1 cursor-pointer">
                                <div className="flex gap-2">
                                    <span className="text-[#110606]   text-base line-through  ">
                                        {product?.price}.vnđ
                                    </span>
                                    <span className="text-[#d34949] text-2xl  font-semibold   text-base">
                                        {product?.price}.vnđ
                                    </span>
                                </div>
                            </h2>
                            <div className="mt-1 prd-action text-center btn-add  ">
                                <form action="#">
                                     <Link to={`/products/${product?._id}`}>
                                     <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-sm px-4 py-2 font-semibold ">
                                       Chi tiết sản phẩm
                                    </button>
                                    </Link>
                                  
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </>

    )
}
export default Item;