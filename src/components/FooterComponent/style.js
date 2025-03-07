import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background-color: #fff;
    color: #000;
    font-size: 14px;
    padding: 20px 0;
    box-sizing: border-box;
    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px; 
        // align-items: flex-start;
        align-items: stretch;
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: stretch;
        }
    }
    .contact-info, .useful-links, .social-links {
        flex: 1 1 200px; 
        margin: 0 10px;
        display: flex;
        flex-direction: column; /* Đảm bảo nội dung bên trong căn dọc */
        justify-content: space-between;
        @media (max-width: 768px) {
           margin: 0;
        }
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        margin-bottom: 10px; 
    }
    a {
        color: #000;
        text-decoration: none;
        transition: color 0.3s ease-in-out; 
    }
    
    a:hover {
        color: #E30019; 
        text-decoration: underline;
    }

    .copyright {
        text-align: center;
        margin-top: 20px;
        font-size: 13px; 
        color: #777;
    }

    .section-title {
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 15px;
        margin-top: 0;
         @media (max-width: 768px) {
            text-align: center;
        }
    }
`;

export const Wrapperli = styled.li`
    margin-top: 10px;
`;