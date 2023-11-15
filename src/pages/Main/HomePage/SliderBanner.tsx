import { Carousel } from "antd";

const SliderBannerHome = () => {
    return (
        <div>
            <Carousel autoplay>
                <div className="w-full h-[280px]">
                    <img
                        src="https://giaysneakerhcm.com/wp-content/uploads/2021/03/cong-tac-vien-banner.jpg"
                        className="w-full object-cover"
                        alt=""
                    />
                </div>
                <div className="w-full h-[280px]">
                    <img
                        src="https://theme.hstatic.net/1000381774/1000494179/14/collection_banner.jpg?v=337"
                        className="w-full object-cover"
                        alt=""
                    />
                </div>
                <div className="w-full h-[280px]">
                    <img
                        src="https://giaysneakerhcm.com/wp-content/uploads/2021/03/cong-tac-vien-banner.jpg"
                        className="w-full object-cover"
                        alt=""
                    />
                </div>
                <div className="w-full h-[280px]">
                    <img
                        src="https://giaysneakerhcm.com/wp-content/uploads/2021/03/cong-tac-vien-banner.jpg"
                        className="w-full object-cover"
                        alt=""
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default SliderBannerHome;
