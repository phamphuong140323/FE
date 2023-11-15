import { Carousel } from "antd";
import { Link } from "react-router-dom";

const SliderBrand = () => {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <div className="w-full h-[380px] grid grid-cols-[300px_1fr] gap-4" style={{ border: "1px solid rgba(16,16,16,.1)" }}>
                        <div className="flex flex-col items-center">
                            <Link to="/">
                                <img
                                    src="https://dosi-in.com/file/logos/70/dosiin-Untitled-270857.jpg?w=320&h=320&fm=webp"
                                    alt=""
                                    className="w-28 h-28 rounded-full"
                                    style={{ border: "1px solid rgba(16,16,16,.1)" }}
                                />
                            </Link>

                            <h2 className="my-2 -semibold text-[#484848] text-xl">SCARAB VN</h2>
                            <span className="text-sm">14 người theo dõi</span>

                            <div className="mt-4 flex space-x-4">
                                <div
                                    className="flex flex-col items-center justify-center w-20 h-16 bg-[#f9f9f9] rounded-md"
                                    style={{ border: "1px solid rgba(16,16,16,.05)" }}
                                >
                                    <span>75</span>
                                    <span>Sản phẩm</span>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center w-20 h-16 bg-[#f9f9f9] rounded-md"
                                    style={{ border: "1px solid rgba(16,16,16,.05)" }}
                                >
                                    <span>0/5</span>
                                    <span>Đánh giá</span>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center w-20 h-16 bg-[#f9f9f9] rounded-md"
                                    style={{ border: "1px solid rgba(16,16,16,.05)" }}
                                >
                                    <span>3 năm</span>
                                    <span>Tham gia</span>
                                </div>
                            </div>

                            <Link
                                to="/"
                                className="mt-8 rounded-2xl px-4 py-1 flex items-center text-[#af49ce]"
                                style={{ background: "linear-gradient(135deg,#fce6f7,#d5d0f0)" }}
                            >
                                <i className="text-xl mr-1 bx bx-store-alt"></i>
                                Ghé shop
                            </Link>
                        </div>

                        <div className="">
                            <img
                                src="https://dosi-in.com/file/detailed/127/dosiin-2127735.jpg?w=1200&h=500&fit=crop&fm=webp"
                                className="w-full object-cover rounded-md"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* sliide 2 */}
                <div className="">
                    <div className="w-full h-[380px] grid grid-cols-[300px_1fr] gap-4" style={{ border: "1px solid rgba(16,16,16,.1)" }}>
                        <div className="flex flex-col items-center">
                            <Link to="/">
                                <img
                                    src="https://dosi-in.com/file/logos/70/dosiin-Untitled-270857.jpg?w=320&h=320&fm=webp"
                                    alt=""
                                    className="w-28 h-28 rounded-full"
                                    style={{ border: "1px solid rgba(16,16,16,.1)" }}
                                />
                            </Link>

                            <h2 className="my-2 -semibold text-[#484848] text-xl">SCARAB VN</h2>
                            <span className="text-sm">14 người theo dõi</span>

                            <div className="mt-4 flex space-x-4">
                                <div
                                    className="flex flex-col items-center justify-center w-20 h-16 bg-[#f9f9f9] rounded-md"
                                    style={{ border: "1px solid rgba(16,16,16,.05)" }}
                                >
                                    <span>75</span>
                                    <span>Sản phẩm</span>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center w-20 h-16 bg-[#f9f9f9] rounded-md"
                                    style={{ border: "1px solid rgba(16,16,16,.05)" }}
                                >
                                    <span>0/5</span>
                                    <span>Đánh giá</span>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center w-20 h-16 bg-[#f9f9f9] rounded-md"
                                    style={{ border: "1px solid rgba(16,16,16,.05)" }}
                                >
                                    <span>3 năm</span>
                                    <span>Tham gia</span>
                                </div>
                            </div>

                            <Link
                                to="/"
                                className="mt-8 rounded-2xl px-4 py-1 flex items-center text-[#af49ce]"
                                style={{ background: "linear-gradient(135deg,#fce6f7,#d5d0f0)" }}
                            >
                                <i className="text-xl mr-1 bx bx-store-alt"></i>
                                Ghé shop
                            </Link>
                        </div>

                        <div className="">
                            <img
                                src="https://dosi-in.com/file/detailed/127/dosiin-2127735.jpg?w=1200&h=500&fit=crop&fm=webp"
                                className="w-full object-cover rounded-md"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default SliderBrand;
