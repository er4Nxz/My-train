const withAuth = (Component) => {
  return function ({ isLogin, ...props }) {
    return isLogin ? (
      <Component {...props} isLogin={isLogin} />
    ) : (
      <h1 className="text-center text-danger">
        Please authenticate before logging in !!!
      </h1>
    );
  };
};
export default withAuth;
