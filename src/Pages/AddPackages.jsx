import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddPackages = () => {
    const { user } = useContext(AuthContext);

    const handleAddPackage = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.price = parseFloat(data.price);

        data.guideName = user?.displayName || '';
        data.guidePhoto = user?.photoURL || '';
        data.guideEmail = user?.email || '';

        console.log(data)

        axios.post(`${import.meta.env.VITE_API_URL}/package`, data)
            .then(res => {
                console.log(res.data)
                toast.success("Your package was added successfully");
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="min-h-screen bg-base-100 py-10 px-4 md:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Add a Tour Package</h2>
                <form onSubmit={handleAddPackage} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="tourName"
                            placeholder="Tour Name"
                            className="input input-bordered w-full"

                            required
                        />
                        <input
                            type="url"
                            name="image"
                            placeholder="Image URL"
                            className="input input-bordered w-full"
                            required
                        />
                        <select name="duration" className="select select-bordered w-full" required>
                            <option value="">Select Duration</option>
                            <option value="2 Days 1 Night">2 Days 1 Night</option>
                            <option value="3 Days 2 Nights">3 Days 2 Nights</option>
                            <option value="4 Days 3 Nights">4 Days 3 Nights</option>
                            <option value="5 Days 4 Nights">5 Days 4 Nights</option>
                            <option value="6 Days 5 Nights">6 Days 5 Nights</option>
                            <option value="7 Days 6 Nights">7 Days 6 Nights</option>
                        </select>
                        <input
                            type="text"
                            name="departureLocation"
                            placeholder="Departure Location"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="text"
                            name="destination"
                            placeholder="Destination"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="date"
                            name="departureDate"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            type="number"
                            name="contactNo"
                            placeholder="Contact No."
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <textarea
                        name="packageDetails"
                        placeholder="Package Details"
                        className="textarea textarea-bordered w-full"
                        rows="4"
                        required
                    />


                    <div className="border border-gray-300 p-4 rounded-lg bg-base-200">
                        <h3 className="font-semibold text-lg mb-2">Guide Info (Auto-filled)</h3>
                        <div className="flex items-center gap-4">
                            <img
                                src={user?.photoURL}
                                alt="Guide"
                                className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                            />
                            <div>
                                <p><span className="font-medium">Name:</span> {user?.displayName}</p>
                                <p><span className="font-medium">Email:</span> {user?.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn bg-primary text-white hover:bg-secondary mt-4 w-full md:w-auto">
                            Submit Package
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPackages;
