const withLoading = (Component) => {
  return function withLoadingComponent({ loading, product, error }) {
    if (loading && error)
      return (
        <div>
          <div className="spinner-border"></div>
          <h1 className="text-danger text-center">{error}</h1>
        </div>
      );
    else return <Component product={product} />;
  };
};

export default withLoading;
