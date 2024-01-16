import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, suplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suplier = form.suplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatdCoffee = { name, quantity, suplier, taste, category, details, photo }
        console.log(updatdCoffee)

        // send data to the server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatdCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'coffee updated  successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0]">
            <h1 className='text-5xl text-center'>Update Coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* coffe name and quantity row  */}
                <div className='md:flex'>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">coffee Name</span>
                        </div>
                        <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Quantity</span>
                        </div>
                        <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered w-full  " defaultValue={quantity} />

                    </label>
                </div>
                {/* supplier and taste row  */}
                <div className='md:flex'>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Suplier</span>
                        </div>
                        <input type="text" name='suplier' placeholder="Suplier" className="input input-bordered w-full " defaultValue={suplier} />

                    </label>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Taste</span>
                        </div>
                        <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full " defaultValue={taste} />

                    </label>
                </div>
                {/* category and details row   */}
                <div className='md:flex'>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Category</span>
                        </div>
                        <input type="text" name='category' placeholder="Category" className="input input-bordered w-full " defaultValue={category} />

                    </label>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Details</span>
                        </div>
                        <input type="text" placeholder="Details" name='details' className="input input-bordered w-full " defaultValue={details} />

                    </label>
                </div>
                {/* Photot url row  */}
                <div className='md:flex'>
                    <label className="form-control w-full ml-5">
                        <div className="label">

                            <span className="label-text-alt">Photo URL </span>
                        </div>
                        <input type="text" name='photo' placeholder="Photo URL " className="input input-bordered w-full " defaultValue={photo} />

                    </label>

                </div>
                <input type="submit" value="Add Coffee " className='btn btn-block' />
            </form>
        </div>
    );
};

export default UpdateCoffee;