import React from "react";
import Footer from "./Footer";

function NotFoundPage(props) {
  return (
    <>
      <section className="notFound">
        <h3>404 Error</h3>
        <p>앗! 해당페이지는 존재하지않습니다.</p>
      </section>
      <Footer />
    </>
  );
}

export default NotFoundPage;
