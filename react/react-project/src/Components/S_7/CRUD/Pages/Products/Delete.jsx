import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Delete = ({ id }) => {
  const navigate = useNavigate();
  const deleteProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: " You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        fetch(`https://685c4d07769de2bf085c58e4.mockapi.io/Product/${id}`, {
          method: "DELETE",
        });
        navigate("/Products");
      } else {
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <>
      <button
        className="btn btn-danger absolute top-4 left-20"
        onClick={deleteProduct}
      >
        Delete-{id}
      </button>
    </>
  );
};

export default Delete;
