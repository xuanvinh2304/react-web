import { Link } from 'react-router-dom';

import Grid from './Grid';

const footerAboutLinks = [
  {
    display: 'Giới thiệu',
    path: '/about',
  },
  {
    display: 'Liên hệ',
    path: '/contact',
  },
  {
    display: 'Tuyển dụng',
    path: '/about',
  },
  {
    display: 'Tin tức',
    path: '/about',
  },
  {
    display: 'Hệ thống cửa hàng',
    path: '/about',
  },
];

const footerCustomerLinks = [
  {
    display: 'Chính sách đổi trả',
    path: '/about',
  },
  {
    display: 'Chính sách bảo hành',
    path: '/about',
  },
  {
    display: 'Chính sách hoàn tiền',
    path: '/about',
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={30}>
          <div className="footer__about">
            <div className="footer__logo">
              <p>
                <Link to="/">
                  <span>Shop Cây Cảnh</span>
                </Link>
              </p>
            </div>
            <p>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <div className="footer__title">Về công ty của chúng tôi</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đặt hàng <strong>0987654321</strong>
              </p>
              <p>
                Thắc mắc đặt hàng <strong>0987654321</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0987654321</strong>
              </p>
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
