import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="col-4 mx-auto bg-dark p-4 mt-2">
      <h1 className="text-white capitalize">Home</h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
        expedita. Neque tenetur laboriosam consequuntur at facere tempora
        quibusdam sed excepturi optio accusantium hic numquam, magni, quam quasi
        illo? Ea, magni! Quae velit adipisci impedit tempora deleniti molestias,
        facere, numquam exercitationem ad aspernatur magnam. Culpa dicta a neque
        hic ullam quibusdam dolore accusamus, voluptatum dignissimos nam, soluta
        in optio est quos esse sequi adipisci expedita tempora beatae delectus
        minima eveniet iure suscipit. Libero quisquam fugit in laudantium sed
        obcaecati, cupiditate alias quas tenetur quasi rem deserunt dolor
        voluptatem quibusdam nulla possimus numquam at reiciendis iusto. Nam
        nisi autem dicta unde dignissimos.
      </p>
      <a href="#" className="btn btn-primary">
        Read More
      </a>
      <button className="btn btn-success mx-2" onClick={()=>navigate("/About")}>About</button>
      <button className="btn btn-success" onClick={()=>navigate("/Products")}>Product</button>
    </div>
  );
};

export default Home;
