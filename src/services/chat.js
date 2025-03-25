import { useEffect } from 'react';
//API TAWKTO
const TawkTo = () => {
  useEffect(() => {
    // Tạo thẻ script và nhúng mã Tawk.to vào trang
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67e226040e81ec19127d7ea3/1in5m910a";  // Thay 'your_tawk_id' bằng ID của bạn
    script.async = true;
    document.body.appendChild(script);

    // Clean up khi component bị unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;  // Không cần render gì
};

export default TawkTo;
