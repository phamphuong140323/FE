import { Link } from "react-router-dom";
import ProductItem from "../../../components/ProductItem";

const ProductDetailPage = () => {
    const product = {
        id: 1,
        img: "https://down-vn.img.susercontent.com/file/cn-11134211-7qukw-lgyq1wn0l3ksde",
        name: "Giày Jordan Cổ Cao, Giày Thể Thao Nam Nữ Sneaker Thời Trang Hàng Đẹp Full Box Bill",
        price: 2000,
        brand: "sneak",
    };
    return (
        <div className="mt-4 main w-[1200px] mx-auto">
            <div className="content bg-white box-module">
                <div className="content-header grid grid-cols-[1.2fr_2fr_1fr] gap-6 p-5">
                    <div className="content-header-left">
                        <img src={product.img} className="w-full" alt="" />
                        <div className="list-img flex flex-wrap mt-2">
                            <Link to="/" className="mr-[10px] mb-[10px]">
                                <img className="w-[56px] h-[56px]" src={product.img} alt="" />
                            </Link>
                            <Link to="/" className="mr-[10px] mb-[10px]">
                                <img className="w-[56px] h-[56px]" src={product.img} alt="" />
                            </Link>
                            <Link to="/" className="mr-[10px] mb-[10px]">
                                <img className="w-[56px] h-[56px]" src={product.img} alt="" />
                            </Link>
                        </div>
                    </div>

                    <div className="content-header-center">
                        <div className="content-detail">
                            <h1 className="text-2xl font-normal">{product.name}</h1>
                            <p className="mt-1">
                                Áo thun ngắn tay unisex Chodole cho cả nam và nữ, chất liệu vải cotton in in hình Van Gogh và Starry
                            </p>
                            <div className="content-offer">
                                <div className="my-4">
                                    <h4>Màu sắc</h4>
                                    <div className="mt-2 flex space-x-3">
                                        <button className="w-8 h-8 rounded-full bg-red-500"></button>
                                        <button className="w-8 h-8 rounded-full bg-gray-500"></button>
                                        <button className="w-8 h-8 rounded-full bg-yellow-500"></button>
                                        <button className="w-8 h-8 rounded-full bg-green-500"></button>
                                        <button className="w-8 h-8 rounded-full bg-slate-500"></button>
                                        <button className="w-8 h-8 rounded-full bg-red-500"></button>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <h4>Kích thước</h4>
                                    <div className="mt-2 flex space-x-3">
                                        <button className="w-14 font-bold h-8 rounded-full border border-solid border-[#ccc]">XS</button>
                                        <button className="w-14 font-bold h-8 rounded-full border border-solid border-[#ccc]">S</button>
                                        <button className="w-14 font-bold h-8 rounded-full border border-solid border-[#ccc]">M</button>
                                        <button className="w-14 font-bold h-8 rounded-full border border-solid border-[#ccc]">l</button>
                                        <button className="w-14 font-bold h-8 rounded-full border border-solid border-[#ccc]">XL</button>
                                        <button className="w-14 font-bold h-8 rounded-full border border-solid border-[#ccc]">2XL</button>
                                    </div>
                                </div>

                                <div className="flex items-center my-[10px]">
                                    <div>Số lượng:</div>
                                    <div className="flex items-center ml-2">
                                        <button className="border border-solid  text-xl rounded-md px-5 py-0.5">-</button>
                                        <div className="border px-3 py-1">1</div>
                                        <button className="border border-solid text-xl rounded-md px-5 py-0.5">+</button>
                                    </div>
                                </div>
                                <div className="cart flex py-[10px]">
                                    <div className="mx-[10px] py-2 px-4 rounded border-solid border-2 border-[#593dd4] hover:text-white">
                                        <button className="text-[#593dd4]">Thêm vào giỏ hàng</button>
                                    </div>
                                    <div className="mx-[10px] py-2 px-4 bg-[#593dd4] hover:bg-[#593dd4] rounded">
                                        <button className=" text-white">Mua ngay</button>
                                    </div>
                                </div>
                                <div className="call my-[10px]">
                                    <div className="text-[15px]">
                                        Gọi đặt hàng:
                                        <span className="text-[#FE642E] font-bold">(028) 3820 7153</span>
                                        hoặc
                                        <span className="text-[#FE642E] font-bold"> 0933 109 009 </span>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="text-[16px] font-bold mb-[15px]">Thông tin & Khuyến mãi</div>
                                    <div className="text-[14px]">
                                        Sử dụng mỗi
                                        <span className="text-[#FE642E] font-bold"> 3.000 BBxu</span>để được giảm 10.000đ.
                                        <Link to="/" className="text-[#2E9AFE]">
                                            Làm sao để lấy BBxu?
                                        </Link>
                                    </div>
                                    <div className="text-[14px]">
                                        Freeship nội thành Sài Gòn từ 150.000đ*. Chi tiết tại
                                        <Link to="/" className="text-[#2E9AFE]">
                                            đây
                                        </Link>
                                    </div>
                                    <div className="text-[14px]">Freeship toàn quốc từ 250.000đ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-header-right border-solid border-2 border-[#f7f7f7] h-[260px]">
                        <ul className="mx-1 list-none">
                            <li className="text-sm flex items-center my-4">
                                <i className="bx bx-heart mr-1"></i>
                                <p>Thêm vào yêu thích</p>
                            </li>
                            <li className="text-sm flex items-center">
                                <i className="bx text-2xl bx-user-check mr-1"></i>
                                <p>Uư đãi khách hàng thân thiết</p>
                            </li>
                            <li className="text-sm flex items-center my-4">
                                <i className="bx text-base bx-car mr-2"></i>
                                <p>Để được vận chuyển miễn phí</p>
                            </li>
                            <li className="text-sm items-center">
                                <p className="text-[#FE642E] mb-2 ml-1">Share để nhận BBxu – Mua hàng 0đ</p>
                                <div className="flex items-center">
                                    <div className="py-1.5 flex items-center text-white rounded-sm border-none border-2 bg-[#2E9AFE] mx-[10px] px-2">
                                        <i className="bx bx-like mx-1"></i>
                                        <button className="font-medium text-white">Thích</button>
                                    </div>
                                    <div className="py-1.5 flex items-center text-white rounded-sm border-none border-2 bg-[#e60023] mx-[10px] px-2">
                                        <i className="bx bx-save mx-1"></i>
                                        <button className="font-medium text-white">Save</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-6 box-module">
                <div className="text-xl font-semibold">Mô tả sản phẩm</div>

                <div className="mt-4 leading-8 max-h-[400px] overflow-y-auto -mr-6">
                    <div data-v-6ad71f7b="">
                        Áo thun unisex áo ngắn tay áo thun nam nữ của Chodole <p></p>{" "}
                        <p>
                            {" "}
                            Chodole là thương hiệu quần áo thời trang trẻ trung, với phong cách đơn giản, không cầu kì nhưng vẫn mang lại một sự thanh
                            lịch cho các bạn trẻ
                        </p>{" "}
                        <p> Form áo thun ngắn tay, không phải áo thun dài tay rộng rãi thoải mái phù hợp cho cả các bạn nam và các bạn nữ. </p>{" "}
                        <p> Chất liệu cotton 100%</p> <p></p> <p> Mô tả sơ qua về form áo, chất liệu và chất lượng in.</p> <p> </p>{" "}
                        <p> - Áo thun unisex Chodole (áo thun nam/ nữ) tay ngắn, áo thun in chữ.</p> <p> </p>{" "}
                        <p> - Chất liệu của áo thun unisex áo thun nam nữ Chodole mềm mại, thoáng mát.</p> <p> </p>{" "}
                        <p> - Áo thun unisex áo thun nam nữ Chodole thiết kế đơn giản</p> <p> </p>{" "}
                        <p> - Áo thun unisex áo thun nam nữ Chodole được may kỹ càng, đường may chuẩn.</p> <p> </p>{" "}
                        <p> - Hình in kỹ thuật số, không bong tróc qua nhiều lần giặt.</p> <p></p>{" "}
                        <p> Áo thun unisex áo thun nam nữ Chodole thích hợp để mặc trong dịp gì?</p> <p> </p>{" "}
                        <p> - Thích hợp để kết hợp với quần jeans, quần short hoặc khaki.</p> <p> </p>{" "}
                        <p> - Tự tin và thoải mái hơn khi xuống phố cùng áo thun của Chodole.</p> <p> </p>{" "}
                        <p> Những lưu ý khi giặt áo thun unisex áo thun nam nữ Chodole:</p> <p> </p>{" "}
                        <p> - Giặt ở nhiệt độ thường, lộn trái áo khi giặt, giặt với áo cùng màu</p> <p> </p>{" "}
                        <p> - Không dùng bột giặt có chất tẩy mạnh</p> <p> </p> <p> - Tránh phơi dưới ánh nắng trực tiếp</p> <p></p>{" "}
                        <p> - Ủi nhẹ ở nhiệt độ thấp, không ủi lên phần in </p>{" "}
                        <p>Chodole cũng muốn đưa ra vái tip về cách phối đồ với áo form rộng sành điệu và cá tính</p>{" "}
                        <p>
                            Hiện nay, áo thun form rộng chính là item được ưa chuộng nhất của các bạn trẻ với vẻ ngoài trẻ trung, phóng khoáng mà lại
                            còn mát mẻ. Chúng còn có khả năng “hack” tuổi cực kỳ đỉnh cao nữa đấy. Bây giờ thì cùng Chodole tham khảo bí quyết phối đồ
                            với áo thun form rộng nhé!
                        </p>{" "}
                        <p></p> <p>Kết hợp với quần jean – item đơn giản nhưng không lỗi thời:</p>{" "}
                        <p>
                            Mix áo thun form rộng với quần jean là bí quyết đơn giản nhưng hoàn hảo nhất, dù nó không quá mới lạ nhưng là combo đảm
                            bảo không bị quê mùa và lỗi thời. Trong bất kỳ hoàn cảnh nào nếu không biết mặc gì thì bộ đôi này là lựa chọn tuyệt vời
                            nhất đấy bởi nó trẻ trung và sành điệu thì ngại gì không diện. Nếu muốn trở nên cá tính hơn thì tùy bạn có thể
                            mix&amp;match thêm vài phụ kiện nhé.{" "}
                        </p>{" "}
                        <p>* Chính sách đổi size:</p> <p>Thời hạn đổi hàng: trong 7 ngày tại shop, tính từ thời gian bạn nhận được hàng. </p>{" "}
                        <p>Hỗ trợ đổi size 1 lần (nếu sản phẩm không nằm trong mục không hỗ trợ đổi trả)</p>{" "}
                        <p>
                            Nếu bạn không có thời gian, bạn có thể dùng dịch vụ vận chuyển Grab, Viettel Post , Giaohangtietkiem để gửi hàng tới địa
                            chỉ của shop.
                        </p>{" "}
                        <p>Bạn vui lòng inbox Chodole, nếu bạn có nhu cầu đổi size.</p> <p>* Phí ship đổi hàng:</p>{" "}
                        <p>- Miễn phí phí ship cho khách hàng, nếu sản phẩm lỗi hoặc do Chodole gửi sai sản phẩm cho bạn. </p>{" "}
                        <p>- Nếu bạn muốn đổi size, bạn giúp thanh toán phí ship 2 chiều. </p> <p>* Các sản phẩm không được hỗ trợ đổi trả: </p>{" "}
                        <p> - Sản phẩm trong danh mục Flash Sale/ Clearance Sale, sản phẩm với mức giảm giá từ 25% trở lên.</p>{" "}
                        <p> - Các sản phẩm đã qua sử dụng, bị dính vết dơ.</p>{" "}
                        <p>
                            {" "}
                            Sau khi xem xét đơn hàng không bị hư hỏng, giống trạng thái ban đầu thì Chodole sẽ gửi sản phẩm mới tới địa chỉ của bạn.
                        </p>{" "}
                        <p> #ao #thun #nam #nu #cotton #aophongnam</p> <p>#aothun #aothunnam #aothunnu #inhinh #aothundaitay #aongantay #chodole </p>
                    </div>
                </div>
            </div>

            <div className="mt-6 product box-module">
                <div className="wrapper">
                    <div className=" flex justify-between ">
                        <div className="text-xl font-semibold">Các sản phẩm tương tự</div>
                    </div>
                    <div className="mt-4 grid grid-cols-5 gap-10 mx-auto pb-20">
                        {[1, 2, 3, 4, 5].map((product, index) => (
                            <ProductItem key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
