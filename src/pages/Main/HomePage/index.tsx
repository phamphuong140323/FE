import { Link } from "react-router-dom";
import SliderBannerHome from "./SliderBanner";
import SliderBrand from "./SliderBrand";
import ProductItem from "../../../components/ProductItem";

const HomePage = () => {
    return (
        <div>
            <div className="max-w-[1300px] mx-auto">
                <div className="my-6 box-module">
                    <SliderBannerHome />
                </div>

                <div className="mt-6 product box-module">
                    <div className="wrapper">
                        <div className=" flex justify-between ">
                            <div className="text-xl font-semibold">Sản phẩm bán chạy nhất</div>
                        </div>

                        <div
                            className="mt-1 h-9 flex items-center space-x-4"
                            style={{ borderTop: "1px solid rgba(16,16,16,.1)", borderBottom: "1px solid rgba(16,16,16,.1)" }}
                        >
                            <span className="text-[#8f0d9e] text-sm font-bold">Giày Nike</span>
                            <span className="text-[#484848] text-sm font-normal">Giày Adidas</span>
                            <span className="text-[#484848] text-sm font-normal">Giày Puma</span>
                            <span className="text-[#484848] text-sm font-normal">Giày New Balance</span>
                            <span className="text-[#484848] text-sm font-normal">Giày Converse</span>
                            <span className="text-[#484848] text-sm font-normal">Giày Skechers</span>
                            <span className="text-[#484848] text-sm font-normal">Giày Asic</span>
                            <span className="text-[#484848] text-sm font-normal">Giày New Balance</span>
                            <span className="text-[#484848] text-sm font-normal">Giày Converse</span>
                            <span className="text-[#484848] text-sm font-normal">Giày Skechers</span>
                            <span className="text-[#484848] text-sm font-normal">Giày Asic</span>
                        </div>
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-10 mx-auto ">
                            {[1, 2, 3, 4, 5].map((product, index) => (
                                <ProductItem key={index} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-6 box-module">
                    <div className="wrapper">
                        <div className=" flex justify-between ">
                            <div className="text-xl font-semibold">Thương hiệu bạn có thể biết</div>
                        </div>

                        <div className="mt-6">
                            <SliderBrand />
                        </div>
                    </div>
                </div>

                <div className="box-module">
                    <div className="text-xl font-semibold">Tất cả danh mục</div>

                    <div className="mt-3 grid grid-cols-7 gap-10">
                        {[1, 2, 3, 4, 5, 6,7].map((product, index) => (
                            <Link to="/" className="flex flex-col" key={index}>
                                <div className="overflow-hidden aspect-square">
                                    <img
                                        src="https://down-vn.img.susercontent.com/file/cn-11134211-7qukw-lgyq1wn0l3ksde"
                                        alt=""
                                        className="w-full rounded-sm hover:scale-105 transition-all aspect-square"
                                    />
                                </div>

                                <h3 className="mt-1 text-base text-center hover:text-red-600 font-medium">Giày sneak nam</h3>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-6 product box-module">
                    <div className="wrapper">
                        <div className=" flex justify-between ">
                            <div className="text-xl font-semibold">Sản phẩm mới nhất</div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-10 mx-auto ">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, index) => (
                                <ProductItem key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
