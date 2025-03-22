import React from 'react';
import { FooterWrapper, Wrapperli } from './style';
import { FacebookOutlined, InstagramOutlined, TikTokOutlined, TwitterOutlined } from '@ant-design/icons';

const FooterComponent = () => {
    return (
        <FooterWrapper >
            <div className="container" >
                <div className="section">
                    <h3 className="section-title">GIỚI THIỆU THEGIOIJACK</h3>
                    <p>Địa chỉ: Đông Hưng Thuận, Quận 12, Hồ Chí Minh</p>
                    <p>Số điện thoại: 0123 456 789</p>
                    <p>Email: Thegioijack@gmail.com</p>

                    <h3 className="section-title">KẾT NỐI VỚI THEGIOIJACK</h3>
                    <ul>
                        <Wrapperli><a href="https://www.facebook.com/namzxjee/"> <FacebookOutlined style={{ color: '#4267B2' }} /> Facebook</a></Wrapperli>
                        <Wrapperli><a href="#"><InstagramOutlined style={{ color: '#C13584' }} /> Instagram</a></Wrapperli>
                        <Wrapperli><a href="#"><TikTokOutlined style={{ color: '#000000' }} /> Tiktok</a></Wrapperli>
                    </ul>
                </div>
                <div className="section">
                    <h3 className="section-title">HỖ TRỢ KHÁCH HÀNG</h3>
                    <ul>
                        <Wrapperli><a href="/baohanh">Gửi yêu cầu bảo hành</a></Wrapperli>
                        <Wrapperli><a href="/contact">Góp ý, khiếu nại</a></Wrapperli>
                    </ul>

                </div>
                <div className="section">
                    <h3 className="section-title">CHÍNH SÁCH</h3>
                    <ul>
                        <Wrapperli><a href="/guarantee">Chính sách bảo hành</a></Wrapperli>
                        <Wrapperli><a href="/transport">Chính sách giao hàng</a></Wrapperli>
                    </ul>

                </div>


                <div className="section">
                    <h3 className="section-title">BẢN ĐỒ</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62697.50052817528!2d106.54586144863279!3d10.842366500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b21cc70a4c3%3A0x4a4386138e0567e5!2sC%C3%B4ng%20ty%20Jack!5e0!3m2!1svi!2sus!4v1741790350548!5m2!1svi!2sus"
                        width="400" height="280" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        title="Bản đồ khu vực">
                    </iframe>

                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Công ty cổ phần thương mại TheGioiJack</p>
            </div>
        </FooterWrapper >
    );
}

export default FooterComponent;
