import React, { useState } from 'react';

export const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        course: ''
    });
    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.email.includes('@')) tempErrors.email = 'Valid email is required';
        if (formData.mobile.length < 10) tempErrors.mobile = 'Mobile must be at least 10 digits';
        if (!formData.course) tempErrors.course = 'Course selection is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmittedData(formData);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800">Student Registration</h3>

                <div>
                    <label className="block text-sm font-medium text-slate-700">Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700">Mobile</label>
                    <input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    {errors.mobile && <span className="text-red-500 text-xs">{errors.mobile}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700">Course</label>
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                        <option value="">Select Course</option>
                        <option value="React">React Development</option>
                        <option value="Node">Node.js Backend</option>
                        <option value="FullStack">Full Stack</option>
                    </select>
                    {errors.course && <span className="text-red-500 text-xs">{errors.course}</span>}
                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
                    Register
                </button>
            </form>

            {/* Preview Section */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-700 mb-4">Preview Card</h3>
                {submittedData ? (
                    <div className="space-y-2 text-sm text-slate-800">
                        <p><strong>Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Mobile:</strong> {submittedData.mobile}</p>
                        <p><strong>Course:</strong> {submittedData.course}</p>
                        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded text-center font-bold">
                            Registration Successful
                        </div>
                    </div>
                ) : (
                    <p className="text-slate-400 text-sm italic">Submit the form to preview data here...</p>
                )}
            </div>
        </div>
    );
};
