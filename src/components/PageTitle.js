const PageTitle = ({ breadCrumbItems, title }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box">
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item"><a href='/'>Hyper</a></li>
              {breadCrumbItems && breadCrumbItems.map((item, i) =>
                item.active
                  ?
                  <li key={i} className="breadcrumb-item active">{item.label}</li>
                  :
                  <li key={i} className="breadcrumb-item"><a href={item.path}>{item.label}</a></li>
              )}
            </ol>
          </div>
          <h4 className="page-title">{title}</h4>
        </div>
      </div>
    </div>
  );
};
export default PageTitle;