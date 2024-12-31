import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
 const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <h2>Giới Thiệu</h2>
                <p>Hộ kinh doanh NGUYỄN QUỐC THẮNG
                <li>GPKD số 0123456789 cấp ngày 12/12/2024 tại Sở Kế hoạch và Đầu tư Thành phố HCM</li>
                    Quán phục vụ xuyên suốt từ 6:00 - 22:00 mỗi ngày.</p>
                <div className="footer-social-icons">
                <h2>FANPAGE</h2>
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Liên kết</h2>
                <ul>
                    <li><a href="/">Trang Chủ</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Chính sách thanh toán</a></li>
                    <li><a href="/">Chính sách giao hàng</a></li>
                    <li><a href="/">Chính sách bảo mật</a></li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Thông tin liên hệ</h2>
                <ul>
                    <li>0382042627</li>
                    <li>ngquthang04@gmail.com</li>
                </ul>
                
            </div>
          
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 - THANG FOOD - All Right Reserved.</p>
    </div>
  )
}

export default Footer