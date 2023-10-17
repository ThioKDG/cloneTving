import { Link } from "react-router-dom";
import "./layStyles/footStyle.scss";

function Footer(props) {
  return (
    <footer>
      <div className="wrapper">
        <div className="footerTop">
          <div className="notice">
            <Link to="/">공지사항</Link>
            <Link to="/">공지공지공지공지</Link>
          </div>
          <div className="about">
            <Link to="/">고객센터</Link>
            <Link to="/">이용약관</Link>
            <Link to="/">
              <strong>개인정보처리방침</strong>
            </Link>
            <Link to="/">청소년 보호정책</Link>
            <Link to="/">법적고지</Link>
            <Link to="/">이벤트</Link>
            <Link to="/">인재채용</Link>
          </div>
          <div className="copyRightContainer">
            <p>
              <span>티빙티빙</span>
            </p>
            <p className="copyRight">
              Copyright &copy; 주식회사 티빙 All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
