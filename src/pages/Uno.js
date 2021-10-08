import PageTitle from '../components/PageTitle';

const Uno = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: 'eCommerce', path: '/apps/ecommerce/details' },
          { label: 'Product Details', path: '/apps/ecommerce/details', active: true },
        ]}
        title={'Product Details'}
      />
      contenido de la pagina
    </>
  );
};
export default Uno;