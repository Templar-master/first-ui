import { Link } from "react-router-dom";

const PageTitle = ({ breadCrumbItems, title }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box">
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item"><Link to='/'>Hyper</Link></li>
              {breadCrumbItems && breadCrumbItems.map((item, i) =>
                item.active
                  ?
                  <li key={i} className="breadcrumb-item active">{item.label}</li>
                  :
                  <li key={i} className="breadcrumb-item"><Link to={item.path}>{item.label}</Link></li>
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