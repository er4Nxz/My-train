const withLoading = (Component) => {
  return function ({ loading, error, product, ...props }) {
    if (loading) {
      return <div className="spinner-border"></div>;
    } else if (error) {
      return <h1 className="text-center text-danger">{error}</h1>;
    } else {
      return (
        <Component
          {...props}
          product={product}
          loading={loading}
          error={error}
        />
      );
    }
  };
};
export default withLoading;
