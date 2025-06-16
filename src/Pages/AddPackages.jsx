import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import axiosSecure from '../Hooks/useAxiosSecure';

const AddPackages = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddPackage = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.price = parseFloat(data.price);

        data.guideName = user?.displayName || '';
        data.guidePhoto = user?.photoURL || '';
        data.guideEmail = user?.email || '';

        axiosSecure.post(`/package`, data)
            .then(res => {
                toast.success("Your package was added successfully");
                form.reset();
                navigate('/manage-my-packages');
            })
            .catch(error => {
                console.log(error)
            });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black py-10 px-4 md:px-8">
            <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-semibold text-[#2C3892] dark:text-white mb-6 text-center">Add a Tour Package</h2>
                <form onSubmit={handleAddPackage} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="tourName"
                            placeholder="Tour Name"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        />
                        <input
                            type="url"
                            name="image"
                            placeholder="Image URL"
                            className="input input-bordered w-full  bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        />
                        <select name="duration" className="select select-bordered w-full  bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600" required>
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
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        />
                        <input
                            type="text"
                            name="destination"
                            placeholder="Destination"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        />
                        <input
                            type="date"
                            name="departureDate"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        />
                        <input
                            type="number"
                            name="contactNo"
                            placeholder="Contact No."
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        />
                    </div>

                    <textarea
                        name="packageDetails"
                        placeholder="Package Details"
                        className="textarea textarea-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        rows="4"
                        required
                    />

                    <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                        <h3 className="font-semibold text-lg mb-2 text-black dark:text-white">Guide Info (Auto-filled)</h3>
                        <div className="flex items-center gap-4">
                            <img
                                src={user?.photoURL}
                                alt="Guide"
                                className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                            />
                            <div className="text-gray-800 dark:text-gray-200">
                                <p><span className="font-medium">Name:</span> {user?.displayName}</p>
                                <p><span className="font-medium">Email:</span> {user?.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn bg-[#2C3892] text-white hover:bg-[#FA951E] mt-4 w-full md:w-auto shadow-none border-none rounded-none">
                            Submit Package
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPackages;
