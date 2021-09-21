const Footer = () => {
  const HREF_DEFAULT = '#';
  const handleClick = (e) => e.preventDefault();
  return (
    <>
      {/* Footer Start */}
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              2021 © Hyper React - Denny Castillo
            </div>
            <div className="col-md-6">
              <div className="text-md-right footer-links d-none d-md-block">
                <a href={HREF_DEFAULT} onClick={handleClick}>About</a>
                <a href={HREF_DEFAULT} onClick={handleClick}>Support</a>
                <a href={HREF_DEFAULT} onClick={handleClick}>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end Footer */}
    </>
  );
};
export default Footer;