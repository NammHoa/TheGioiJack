import React from 'react';
import { Row, Col } from 'antd';
import { LinkContainer, WrapperContainer, WrapperText, WrapperTextIcons } from './style';
import baohanhbang from '../../assets/images/baohanhbang.png';
import baohanh from '../../assets/images/baohanh.jpg';
import { ArrowUpOutlined } from '@ant-design/icons';


const GuaranteePage = () => {
    return (
        <WrapperContainer>
            <Col span={24}>
                <p style={{ width: '100%', marginTop: '5px' }}>
                    <img style={{ width: '100%', height: '400px', marginLeft: '5px' }} src={baohanh} alt="baohanh" />
                </p>
            </Col>
            <Row gutter={13}>
                {/* Mục lục bên trái */}
                <Col span={9}>
                    <Row>
                        <Col span={24} style={{ borderRight: '1px solid #ccc', height: '3500px' }}>
                            <LinkContainer>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#1">1. Liên hệ bảo hành sản phẩm</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#2">2. Điều kiện bảo hành</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#3">3. Sản phẩm không đủ điều kiện bảo hành</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#4">4. Chính sách bảo hành chung</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#4.1">4.1 Chính sách đổi mới</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#4.2">4.2 Thời gian xử lý</a></h3>
                                </div>
                                <div style={{ marginLeft: '160px', fontSize: '18px', marginRight: '10px' }}>
                                    <h3><a href="#4.3">4.3 Xử lý ngoài bảo hành</a></h3>
                                </div>

                            </LinkContainer>
                        </Col>
                    </Row>
                </Col>
                {/* Nội dung bên phải */}
                <Col span={15}>
                    <Row>
                        <Col span={20}>
                            <WrapperTextIcons>
                                - Để thuận tiện cho việc tra cứu bảo hành các sản phẩm tại TheGioiJack, xin kính gửi Quý khách hàng các thông tin chính sách bảo hành tại TheGioiJack và các thông tin liên hệ khi cần.

                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="1">
                                <h3>1. LIÊN HỆ BẢO HÀNH SẢN PHẨM</h3>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Khi có nhu cầu bảo hành sản phẩm, khách hàng vui lòng liên hệ với TheGioiJack qua các hình thức sau:
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Gọi tổng đài bảo hành 1900.5325.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Gửi tin nhắn trực tiếp tại website hoặc fanpage
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Mang sản phẩm trực tiếp đến các chi nhánh cửa hàng hoặc Trung tâm bảo hành của TheGioiJack .
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Mang sản phẩm trực tiếp đến Trung tâm bảo hành của hãng/nhà cung cấp của sản phẩm
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="2">
                                <h3>2. ĐIỀU KIỆN BẢO HÀNH</h3>
                            </WrapperText>
                            <WrapperTextIcons>
                                . Sản phẩm còn trong thời hạn bảo hành của TheGioiJack; Thời hạn bảo hành được ghi nhận dựa trên thông tin mua hàng, số Serial Number của sản phẩm.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Sản phẩm phải còn tem niêm phong bảo hành hoặc tem của nhà phân phối. Với các sản phẩm cần bảo hành theo hộp, khách hàng phải gửi đầy đủ hộp và phụ kiện đi kèm.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Sản phẩm còn nguyên trạng, không trầy xước cấn móp, biến dạng ngoài quy định của hãng/ nhà phân phối.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Sản phẩm phát sinh lỗi trong quá trình sử dụng do nhà sản xuất như linh kiện, lỗi kỹ thuật.
                            </WrapperTextIcons>
                            <WrapperText id="2">
                                <h3><u >Lưu ý:</u></h3>
                            </WrapperText>
                            <WrapperTextIcons>
                                . Các điều kiện bảo hành cụ thể có thể thay đổi tùy theo từng nhà sản xuất và nhà cung cấp sản phẩm.
                            </WrapperTextIcons>
                            <WrapperTextIcons style={{ color: '#E30019' }}>
                                . Dữ liệu (lưu trữ trong sản phẩm: Laptop/ Máy tính để bàn/ Điện thoại/ Ổ cứng…) không thuộc phạm vi bảo hành. Chúng tôi hoàn toàn ý thức được tầm quan trọng của dữ liệu của quý khách hàng và luôn cố gắng hết sức để hỗ trợ - hướng dẫn quý khách hàng trong việc sao lưu dữ liệu. TheGioiJack không chịu trách nhiệm về bất cứ thiệt hại trực tiếp hoặc gián tiếp nào gây ra cho quý khách hàng nếu dữ liệu lưu trong sản phẩm bị tiết lộ, bị mất, bị hư hỏng trong quá trình kiểm tra, xử lý bảo hành.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Nên tham khảo kỹ phiếu bảo hành và chính sách bảo hành của nhà sản xuất trước khi sử dụng sản phẩm.
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="3">
                                <h3>3. SẢN PHẨM KHÔNG ĐỦ ĐIỀU KIỆN BẢO HÀNH</h3>
                            </WrapperText>
                            <WrapperTextIcons>
                                . Sản phẩm hết hạn bảo hành tại TheGioiJack.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Sản phẩm không đầy đủ các thiết bị, linh kiện đi kèm bắt buộc (ví dụ: receiver, adapter…)
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Sản phẩm không có thông tin mua hàng hoặc không phải do TheGioiJack cung cấp, thông tin sản phẩm không được ghi nhận trên hệ thống của TheGioiJack.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Sản phẩm hư hỏng do lỗi người dùng (Rơi vỡ, cấn móp, biến dạng, vô nước … hoặc sử dụng không theo hướng dẫn và chức năng của sản phẩm).
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Sản phẩm đã có can thiệp sửa chữa, tháo lắp hoặc thay đổi kết cấu từ bên thứ ba chưa được cho phép của TheGioiJack và nhà phân phối sản phẩm.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Thông tin sản phẩm (Số Serial/imei/Service Tag) không còn hoặc không trùng khớp với thực tế sản phẩm.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Sản phẩm hư hỏng vì các lý do khách quan như thiên tai, hỏa hoạn, động vật, côn trùng hoặc hao mòn do môi trường gây ra.
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="4">
                                <h3>4. CHÍNH SÁCH BẢO HÀNH CHUNG</h3>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Tất cả các sản phẩm do TheGioiJack bán ra đều được bảo hành theo quy định của nhà sản xuất/nhà phân phối.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - Tất cả sản phẩm hư hỏng, sẽ được gửi cho nhà sản xuất hoặc đơn vị được nhà sản xuất uỷ quyền để bảo hành theo đúng chính sách bảo hành của nhà sản xuất đưa ra. TheGioiJack không chịu trách nhiệm nếu nhà sản xuất hoặc đơn vị được nhà sản xuất ủy quyền từ chối bảo hành.
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="4.1">
                                <h3>4.1 Chính sách đổi mới</h3>
                            </WrapperText>
                            <WrapperText>
                                <h3>. Sản phẩm đổi mới trong 7 ngày</h3>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Đối với các sản phẩm lỗi phát sinh do nhà sản xuất hoặc TheGioiJack, khách hàng sẽ được đổi mới trong vòng 7 ngày tính từ ngày mua hàng. Áp dụng với các dòng sản phẩm Laptop, Điện thoại (Ngoại trừ một số dòng sản phẩm có chính sách bảo hành riêng biệt).
                            </WrapperTextIcons>
                            <WrapperText>
                                <h3>. Sản phẩm đổi mới trong 30 ngày</h3>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Đối với các sản phẩm lỗi phát sinh do nhà sản xuất hoặc TheGioiJack, khách hàng sẽ được đổi mới trong vòng 30 ngày tính từ ngày mua hàng. Áp dụng với các dòng sản phẩm gaming (Bàn phím, chuột, tai nghe …) hoặc Linh kiện máy tính (NUC, CPU, RAM, Ổ cứng, tản nhiệt, nguồn, thiết bị khác…)
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="4.2">
                                <h3>4.2 Thời gian xử lý</h3>
                            </WrapperText>
                            <WrapperTextIcons>
                                . TheGioiJack cam kết xử lý trong vòng 30 ngày tính từ ngày tiếp nhận sản phẩm. Thông tin tiếp nhận sẽ được thể hiện trong phiếu bảo hành hoặc thông tin đến khách hàng trong trường hợp khách hàng gửi sản phẩm.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Nếu sản phẩm sau khi kiểm tra không có phát sinh lỗi, TheGioiJack xin phép hoàn trả sản phẩm sau 3 ngày.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Tất cả các sản phẩm đều được áp dụng chính sách bảo hành của nhà sản xuất, nếu thời gian bảo hành có phát sinh do các vấn đề khách quan cũng sẽ được thông tin đầy đủ đến khách hàng.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Thông tin liên hệ bảo hành theo hãng.
                            </WrapperTextIcons>
                        </Col>
                        <Col span={20}>
                            <WrapperText id="4.3">
                                <h3>4.3 Xử lý ngoài bảo hành</h3>
                            </WrapperText>
                            <WrapperTextIcons>
                                - Đối với các sản phẩm do lỗi người dùng, TheGioiJack xin phép từ chối bảo hành.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - Với các trường hợp phát sinh sửa chữa ngoài điều kiện bảo hành nếu có, khách hàng nếu đồng ý sẽ chịu chi phí sửa chữa.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                - Trường hợp sản phẩm đủ điều kiện bảo hành nhưng không còn linh kiện sửa chữa, sản phẩm đổi trả/thay thế, khách hàng lựa chọn một trong các phương án sau:
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Đổi sản phẩm tương đương: Sản phẩm cùng nhóm hàng và do TheGioiJack/ hãng sản xuất đề xuất.
                            </WrapperTextIcons>
                            <WrapperTextIcons>
                                . Thu hồi sản phẩm có khấu hao: Sản phẩm sẽ được thu hồi có tính chi phí khấu hao. Mức khấu hao sẽ do chính sách của hãng sản xuất và TheGioiJack quy định. Tùy vào tình trạng và giá trị của sản phẩm sẽ có các mức khấu hao tương ứng.
                            </WrapperTextIcons>
                            <WrapperTextIcons style={{ marginTop: '10px' }}>
                                . Khách hàng nhận lại sản phẩm không bảo hành.
                            </WrapperTextIcons>
                            <p style={{ marginTop: '10px', textAlign: 'center', fontSize: '18px' }}>
                                THEGIOIJACK XIN CHÂN THÀNH CẢM ƠN QUÝ KHÁCH
                            </p>
                            <p style={{ marginTop: '10px', textAlign: 'right', fontSize: '18px' }}>
                                Chính sách bảo hành được TheGioiJack cập nhật từ ngày 11/10/2024.
                            </p>
                            <p style={{ textAlign: 'right' }}><a href="#" > <ArrowUpOutlined /> Quay lại đầu trang</a></p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </WrapperContainer>
    );
}

export default GuaranteePage;
