import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Card = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, suplier, photo } = coffee;
    console.log(name, quantity, suplier)

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            })

                            const remaining = coffees.filter(cof => cof._id != _id);
                            setCoffees(remaining);
                        }
                    })

                console.log('deleted')
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="w-full  flex  justify-between">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>

                </div>

                <div className=" ">
                    <div className="btn-group btn-group-vertical  pt-4 ">
                        <div className="join join-vertical space-y-4">
                            <button className="btn  border-r-blue-500 mx-auto">VIEW</button>
                            <Link to={`updatecoffee/${_id}`}>   <button className="btn join-item bg-blue-700">EDIT</button></Link>
                            <button className="btn join-item bg-red-600" onClick={() => { handleDelete(_id) }}>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;