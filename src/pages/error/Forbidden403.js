import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';

const Forbidden403 = () => {

  return (
    <>
      {/* Component PageTitle */}
      <PageTitle
        breadCrumbItems={[
          { label: '403', path: '/', active: true },
        ]}
        title={'403 Error'}
      />

      {/* end page title */}
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="text-center">
            <i className="mdi mdi-alert" style={{ color: '#fa5c7c', fontSize: '111px' }}></i>

            <h1 className="text-error mt-4">403</h1>
            <h4 className="text-uppercase text-danger mt-3">FORBIDDEN</h4>
            <p className="text-muted mt-3">Access to resouce on the server is denied!</p>

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

export default Forbidden403;