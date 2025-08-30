const withAuth = (Component) => {
  return function withAuthComponent({ isLogin, ...props }) {
    if (isLogin) {
      return <Component {...props} isLogin={isLogin} />;
    } else {
      return <h1 className="text-danger">please log in</h1>;
    }
  };
};

export default withAuth;
