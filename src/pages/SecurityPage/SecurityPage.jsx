import React from 'react';
import { Row, Col } from 'antd';
import { LinkContainer, WrapperContainer, WrapperText, WrapperTextIcons } from './style';
import baomat from '../../assets/images/baomat.png';
import { ArrowUpOutlined, EnvironmentOutlined, GoldOutlined, MailOutlined, PhoneOutlined, ProductOutlined, TruckOutlined, UserOutlined } from '@ant-design/icons';

const SecurityPage = () => {
    return (
        <WrapperContainer>
            <Col span={24}>
                <p style={{ width: '100%', marginTop: '5px' }}>
                    <img style={{ width: '100%' }} src={baomat} alt="baomat" />
                </p>
            </Col>
            <Row gutter={13}>
                {/* Mục lục bên trái */}
                <Col span={9}>
                    <Row>
                        <Col span={24} style={{ borderRight: '1px solid #ccc', height: '1000px' }}>
                            <LinkContainer>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#1">1. Mục đích và phạm vi thu thập thông tin</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#2">2. Phạm vi sử dụng thông tin</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#3">3. Thời gian lưu trữ thông tin</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#4">4. Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#5">5. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#6">6. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#7">7. Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo</a></h3>
                                </div>

                            </LinkContainer>
                        </Col>
                    </Row>
                </Col>
                {/* Nội dung bên phải */}
                <Col span={14}>
                    <Row>
                        <Col span={20}>
                            <WrapperText id="1">
                                <h2>1. Mục đích và phạm vi thu thập thông tin</h2>
                            </WrapperText>
                            <WrapperTextIcons>
                                - GEARVN không bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng thu thập trên trang web cho một bên thứ ba nào khác.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ công ty. Khi bạn liên hệ đăng ký dịch vụ, thông tin cá nhân mà GEARVN thu thập bao gồm:
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                <p><UserOutlined style={{ color: '#E30019', fontSize: '25px' }} /> Họ và tên</p>
                                <p><EnvironmentOutlined style={{ color: '#E30019', marginLeft: '50px', fontSize: '25px' }} /> Địa chỉ</p>
                                <p><PhoneOutlined style={{ color: '#E30019', marginLeft: '50px', fontSize: '25px' }} /> Điện thoại</p>
                                <p><MailOutlined style={{ color: '#E30019', marginLeft: '50px', fontSize: '25px' }} /> Email</p>
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - Ngoài thông tin cá nhân là các thông tin về dịch vụ:
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                <p><ProductOutlined style={{ color: '#E30019', fontSize: '25px' }} /> Tên sản phẩm</p>
                                <p><GoldOutlined style={{ color: '#E30019', marginLeft: '50px', fontSize: '25px' }} /> Số lượng</p>
                                <p><TruckOutlined style={{ color: '#E30019', marginLeft: '50px', fontSize: '25px' }} /> Thời gian giao nhận sản phẩm</p>
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="2">
                                <h2>2. Phạm vi sử dụng thông tin</h2>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Thông tin cá nhân thu thập được sẽ chỉ được GEARVN sử dụng trong nội bộ công ty và cho một hoặc tất cả các mục đích sau đây:
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Hỗ trợ khách hàng
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Cung cấp thông tin liên quan đến dịch vụ
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Xử lý đơn đặt hàng và cung cấp dịch vụ và thông tin qua trang web của chúng tôi theo yêu cầu của bạn
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - Chúng tôi có thể sẽ gửi thông tin sản phẩm, dịch vụ mới, thông tin về các sự kiện sắp tới hoặc thông tin tuyển dụng nếu quý khách đăng kí nhận email thông báo.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - Trong trường hợp có yêu cầu của pháp luật, Công ty có trách nhiệm hợp tác cung cấp thông tin cá nhân khách hàng khi có yêu cầu từ cơ quan tư pháp bao gồm:Viện kiểm soát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng. Ngoài ra không ai có quyền xâm phạm vào thông tin cá nhân của khách hàng.
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="3">
                                <h2>3. Thời gian lưu trữ thông tin</h2>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Đối với thông tin cá nhân, GEARTN chỉ xóa đi dữ liệu này nếu khách hàng có yêu cầu, khách hàng yêu cầu gửi mail về cskh@geartn.com.
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="4">
                                <h2>4. Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân</h2>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Đối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc một trong những trường hợp sau:
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Công Ty TNHH Thương Mại GEARTN
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Các đối tác có ký hợp đồng thực hiện 1 phần dịch vụ do Công Ty TNHH Thương Mại GEARTN. Các đối tác này sẽ nhận được những thông tin theo thỏa thuận hợp đồng (có thể một phần hoặc toàn bộ thông tin tùy theo điều khoản hợp đồng) để tiến hành hỗ trợ người dùng sử dụng dịch vụ do Công Ty cung cấp.
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="5">
                                <h2>5. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân</h2>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Công Ty TNHH Thương Mại GEARVN
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Địa chỉ: 12 Ba Bốn Năm,Phường Sáu Bảy,Quận Tám Chín, TP Mười
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Điện thoại: 1800 6975
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Website: www.geartn.com
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Email: geartn@gmail.com
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="6">
                                <h2>6. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình</h2>
                            </WrapperText>
                            <WrapperTextIcons>
                                - GEARVN không thu thập thông tin khách hàng qua trang web, thông tin cá nhân khách hàng được thực hiện thu thập qua email liên hệ đặt mua sản phẩm, dịch vụ gửi về hộp mail của chúng tôi: cskh@gearvn.com hoặc số điện thoại liên hệ đặt mua sản phẩm gọi về Hotline 1800 6975.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - Bạn có thể liên hệ địa chỉ email cùng số điện thoại trên để yêu cầu GEARVN chỉnh sửa dữ liệu cá nhân của mình.
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="7">
                                <h2>7. Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo</h2>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Tại GEARTN, việc bảo vệ thông tin cá nhân của bạn là rất quan trọng, bạn được đảm bảo rằng thông tin cung cấp cho chúng tôi sẽ được bảo mật, GEARVN cam kết không chia sẻ, bán hoặc cho thuê thông tin cá nhân của bạn cho bất kỳ người nào khác.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - GEARTN cam kết chỉ sử dụng các thông tin của bạn vào các trường hợp sau:
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Nâng cao chất lượng dịch vụ dành cho khách hàng
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Giải quyết các tranh chấp, khiếu nại Khi cơ quan pháp luật có yêu cầu
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - GEARTN hiểu rằng quyền lợi của bạn trong việc bảo vệ thông tin cá nhân cũng chính là trách nhiệm của chúng tôi nên trong bất kỳ trường hợp có thắc mắc, góp ý nào liên quan đến chính sách bảo mật của GEARVN, và liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo vui lòng liên hệ qua số Hotline 1800 6975 hoặc email: cskh@geartn.com.
                            </WrapperTextIcons>
                            <p style={{ textAlign: 'right' }}><a href="#" > <ArrowUpOutlined /> Quay lại đầu trang</a></p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </WrapperContainer>
    );
}

export default SecurityPage;
