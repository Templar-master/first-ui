import PageTitle from '../../components/PageTitle';
import notFoundImg from '../../assets/images/file-searching.svg';
import { Link } from 'react-router-dom';

const PageNotFoundAlt404 = () => {
  return (
    <>
      {/* Component PageTitle */}
      <PageTitle
        breadCrumbItems={[
          { label: '404', path: '/', active: true },
        ]}
        title={'404 Error'}
      />

      {/* end page title */}
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="text-center">
            <img src={notFoundImg} height="90" alt="File not found" />

            <h1 className="text-error mt-4">404</h1>
            <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
            <p className="text-muted mt-3">It's looking like you may have taken a wrong turn. Don't worry... it
              happens to the best of us. Here's a
              little tip that might help you get back on track.
            </p>

            <Link className="btn btn-info mt-3" to="/">
              <i className="mdi mdi-reply"></i> Return Home
            </Link>

          </div>{/* end /.text-center */}
        </div>{/* end col */}
      </div>
      {/* end row */}
    </>
  );
};

export default PageNotFoundAlt404;