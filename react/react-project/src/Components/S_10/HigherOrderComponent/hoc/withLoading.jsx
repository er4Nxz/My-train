const withLoading = (Component) => {
  return function ({ loading, error, data, ...props }) {
    if (loading) {
      return <div className="spinner-border"></div>;
    } else if (error) {
      return <h1 className="text-danger">{error}</h1>;
    } else {
      return (
        <Component {...props} loading={loading} error={error} data={data} />
      );
    }
  };
};

export default withLoading;
