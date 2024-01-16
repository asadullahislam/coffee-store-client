import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const suplier = form.suplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, suplier, taste, category, details, photo }
        console.log(newCoffee)

        // send data to the server 
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0]">
            <h1 className='text-5xl text-center'>Add coffeee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* coffe name and quantity row  */}
                <div className='md:flex'>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">coffee Name</span>
                        </div>
                        <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Quantity</span>
                        </div>
                        <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered w-full " />

                    </label>
                </div>
                {/* supplier and taste row  */}
                <div className='md:flex'>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Suplier</span>
                        </div>
                        <input type="text" name='suplier' placeholder="Suplier" className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Taste</span>
                        </div>
                        <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full " />

                    </label>
                </div>
                {/* category and details row   */}
                <div className='md:flex'>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Category</span>
                        </div>
                        <input type="text" name='category' placeholder="Category" className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-1/2 ml-5">
                        <div className="label">

                            <span className="label-text-alt">Details</span>
                        </div>
                        <input type="text" placeholder="Details" name='details' className="input input-bordered w-full " />

                    </label>
                </div>
                {/* Photot url row  */}
                <div className='md:flex'>
                    <label className="form-control w-full ml-5">
                        <div className="label">

                            <span className="label-text-alt">Photo URL </span>
                        </div>
                        <input type="text" name='photo' placeholder="Photo URL " className="input input-bordered w-full " />

                    </label>

                </div>
                <input type="submit" value="Add Coffee " className='btn btn-block' />
            </form>
        </div>
    );
};

export default AddCoffee; <h1>this is add coffee</h1>