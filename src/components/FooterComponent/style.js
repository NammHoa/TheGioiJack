import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background-color: #fff;
    color: #000;
    font-size: 14px;
    padding: 20px 0;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .contact-info, .useful-links, .social-links {
        flex: 1;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 5px;
    }

    a {
        color: #000;
        text-decoration: none;
    }
    a:hover {
        color: #E30019; /* Màu chữ khi hover */
        text-decoration: underline;
    }

    .copyright {
        text-align: center;
        margin-top: 20px;
    }
    .section-title {
        font-weight: 700;
        margin-bottom: 10px; /* Đảm bảo có một khoảng cách nhỏ giữa tiêu đề và nội dung phía dưới */
        margin-top: 0; /* Loại bỏ khoảng trắng phía trên tiêu đề */
    }
`;
export const Wrapperli = styled.li`
margin-top: 10px
`