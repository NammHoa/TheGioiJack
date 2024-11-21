import React from 'react';
import { WrapperText } from './style';
import tukhoa from '../../assets/images/tukhoa.png';
import taskbar from '../../assets/images/taskbar.png';
import danhmuc from '../../assets/images/danhmuc.png';
import giohang from '../../assets/images/giohang.png';
import muahang from '../../assets/images/muahang.png';
import diachi from '../../assets/images/diachi.png';
import thanhtoan from '../../assets/images/thanhtoan.png';
import khuyenmai from '../../assets/images/khuyenmai.png';
import { ArrowUpOutlined } from '@ant-design/icons';




const GuidePage = () => {
    return (
        <div style={{ width: '1370px', height: 'auto', marginBottom: '20px', background: '#efefef', marginLeft: '80px' }}>
            <h1 style={{ textAlign: 'center', marginLeft: '100px' }}>Hướng dẫn mua hàng</h1>
            <WrapperText>- Cách mua hàng trên website GEARTN</WrapperText>
            <WrapperText>- Không cần trực tiếp đến các cửa hàng mua hàng, bạn có thể chọn mua hàng online bằng những cách thức mua hàng sau:</WrapperText>
            <WrapperText><strong style={{ display: 'inline - block' }}>- Cách 1: </strong>  Gọi điện thoại đến tổng đài GEARVN (1900.5301) từ (8:00 - 21:00)</WrapperText>
            <WrapperText>tất cả các ngày trong tuần kể cả các ngày lễ tết, nhân viên của GEARVN luôn sẵn sàng phục vụ, tư vẫn và hỗ trợ Quý khách hàng mua được các sản phẩm ưng ý nhất.</WrapperText>
            <WrapperText><strong style={{ display: 'inline - block' }}>- Cách 2: </strong>  Đặt mua hàng online trên website geartn.</WrapperText>
            <WrapperText><strong style={{ display: 'inline - block' }}>- Bước 1: </strong>  Tìm sản phẩm cần mua</WrapperText>
            <WrapperText>- Đầu tiên bạn có thể truy cập vào website gearvn.com để tìm và chọn sản phẩm muốn mua theo các cách như: </WrapperText>
            <WrapperText> . Sử dụng ô tìm kiếm phía trên, nhập tên sản phẩm muốn mua ( có thể tìm tên chính xác, tìm theo mã hoặc tìm theo hàng...) website sẽ cung cấp cho bạn những gợi ý chính xác để bạn lựa chọn:</WrapperText>
            <WrapperText style={{ width: '50%' }}><img style={{ width: '170%' }} src={tukhoa} alt="tukhoa" /></WrapperText>
            <WrapperText> . Sử dụng Menu sản phẩm trên website để chọn các loại sản phẩm muốn mua như: Laptop, PC, linh kiện máy tính hay các thiết bị bổ trợ khác như tai nghe, bàn phím, chuột, ghế:</WrapperText>
            <WrapperText style={{ width: '50%' }}><img style={{ width: '170%' }} src={taskbar} alt="taskbar" /></WrapperText>
            <WrapperText> . Sau khi vào từ Menu sản phẩm bạn có thể tùy chọn vào nhu cầu sở thích các bạn để lọc các sản phẩm theo một số tiêu chí mà GEARTN đang gợi ý để giúp bạn tiết kiệm thời gian lựa chọn như: chọn giá sản phẩm, hãng, nhu cầu ......</WrapperText>
            <WrapperText style={{ width: '50%' }}><img style={{ width: '170%' }} src={danhmuc} alt="danhmuc" /></WrapperText>
            <WrapperText><strong style={{ display: 'inline - block' }}>-Bước 2: </strong> Đặt mua sản phẩm</WrapperText>
            <WrapperText>- Sau khi chọn được sản phẩm ưng ý muốn mua, bạn tiến hành đặt hàng bằng cách</WrapperText>
            <WrapperText> . Chọn vào nút MUA NGAY để đến các bước tiếp theo. </WrapperText>
            <WrapperText style={{ width: '50%' }}><img style={{ width: '170%' }} src={muahang} alt="muahang" /></WrapperText>
            <WrapperText> . Sản phẩm được thêm vào GIỎ HÀNG, nếu bạn không tính mua thêm gì lúc này bạn có thể chọn XEM GIỎ HÀNG</WrapperText>
            <WrapperText style={{ width: '50%' }}><img style={{ width: '170%' }} src={giohang} alt="giohang" /></WrapperText>
            <WrapperText> . Trong trang GIỎ HÀNG bạn có thể xem mã giảm giá theo chương trình khuyến mãi đang có tại GEARTN.</WrapperText>
            <WrapperText style={{ width: '50%' }}><img style={{ width: '170%' }} src={khuyenmai} alt="khuyenmai" /></WrapperText>
            <WrapperText> . Điền đầy đủ các thông tin mua hàng theo các bước trên website, sau đó chọn dịch vụ giao hàng (giao hàng tiêu chuẩn hoặc giao hàng siêu tốc) và tiến hành đặt hàng.</WrapperText>
            <WrapperText style={{ width: '50%' }}><img style={{ width: '170%' }} src={diachi} alt="diachi" /></WrapperText>
            <WrapperText> . Sau khi đặt hàng thành công, GEARVN sẽ liên hệ Quý khách để xác nhận và hoàn tất thủ tục</WrapperText>
            <WrapperText style={{ width: '50%' }}><img style={{ width: '170%' }} src={thanhtoan} alt="thanhtoan" /></WrapperText>
            <WrapperText><strong style={{ display: 'inline - block' }}>- Lưu ý: </strong></WrapperText>
            <WrapperText> . GEARTN chỉ chấp nhận những đơn đặt hàng khi cung cấp đủ thông tin chính xác về địa chỉ, số điện thoại. Sau khi bạn đặt hàng, GEARTN sẽ liên lạc lại để kiểm tra thông tin và thỏa thuận thêm những điều có liên quan.</WrapperText>
            <WrapperText style={{ marginBottom: '100px' }}> . Công ty cam kết tất cả hàng hóa gởi đến quý khách đều là hàng chính hãng mới 100% (có đầy đủ hóa đơn, được bảo hành chính hãng). Những rủi ro phát sinh trong quá trình vận chuyển (va đập, ẩm ướt, tai nạn...) có thể ảnh hưởng đến hàng hóa, vì thế xin Quý Khách vui lòng kiểm tra hàng hóa thật kỹ trước khi ký nhận. GEARTN sẽ không chịu trách nhiệm với những sai lệch hình thức của hàng hoá sau khi Quý khách đã ký nhận hàng.</WrapperText>
            <p style={{ textAlign: 'right' }}><a href="#" > <ArrowUpOutlined /> Quay lại đầu trang</a></p>


        </div>
    );
}

export default GuidePage;
