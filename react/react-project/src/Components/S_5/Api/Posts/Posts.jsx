const Posts = ({ title, body}) => {
  return (
    <div className="w-1/2 p-2">
      <h1 className="text-white text-5xl m-2 text-center capitalize">
        Title : {title.substr(0, 10)}
      </h1>
      <p className="text-white text-justify">Body : {body}</p>
    </div>
  );
};

export default Posts;
