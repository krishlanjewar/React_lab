import React, { useState, useEffect } from 'react';
import './RegistrationForm.css';

export const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        course: ''
    });

    // We'll track touched fields to only show errors after user interaction
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [progress, setProgress] = useState(0);

    // Live validation logic
    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'name':
                if (!value) error = 'Name is required';
                else if (value.length < 3) error = 'Name must be at least 3 characters';
                break;
            case 'email':
                if (!value) error = 'Email is required';
                else if (!/\S+@\S+\.\S+/.test(value)) error = 'Invalid email address';
                break;
            case 'mobile':
                if (!value) error = 'Mobile is required';
                else if (!/^\d{10}$/.test(value)) error = 'Mobile must be 10 digits';
                break;
            case 'course':
                if (!value) error = 'Please select a course';
                break;
            default:
                break;
        }
        return error;
    };

    // Update progress and errors whenever formData changes
    useEffect(() => {
        const newErrors = {};
        let validCount = 0;
        const totalFields = 4;

        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
            } else {
                if (formData[key]) validCount++;
            }
        });

        setErrors(newErrors);
        setProgress((validCount / totalFields) * 100);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        setTouched(prev => ({ ...prev, [e.target.name]: true }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({
            name: true,
            email: true,
            mobile: true,
            course: true
        });

        const hasErrors = Object.keys(errors).length > 0;
        if (!hasErrors) {
            setIsSubmitted(true);
            setTimeout(() => {
                alert("Registration Successful!");
                setIsSubmitted(false);
                setFormData({ name: '', email: '', mobile: '', course: '' });
                setTouched({});
            }, 500);
        }
    };

    // Helper for input classes based on state
    const getInputClass = (fieldName) => {
        const baseClass = "form-input";
        if (touched[fieldName] && errors[fieldName]) {
            return `${baseClass} invalid`;
        } else if (touched[fieldName] && !errors[fieldName]) {
            return `${baseClass} valid`;
        }
        return baseClass;
    };

    return (
        <div className="registration-wrapper">
            <div className="registration-card">

                {/* Left Side: Form */}
                <div className="form-section">
                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <h2 className="form-title">Create Account</h2>
                    <p className="form-subtitle">Fill in your details to register for the course.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {['name', 'email', 'mobile'].map((field) => (
                            <div key={field} className="input-group">
                                <label className="input-label">
                                    {field}
                                </label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={getInputClass(field)}
                                    placeholder={`Enter your ${field}`}
                                />
                                {touched[field] && !errors[field] && (
                                    <div className="success-icon">
                                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}
                                {touched[field] && errors[field] && (
                                    <p className="error-message">
                                        {errors[field]}
                                    </p>
                                )}
                            </div>
                        ))}

                        <div className="input-group">
                            <label className="input-label">Course</label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getInputClass('course')}
                            >
                                <option value="">Select a Course</option>
                                <option value="React">React Development</option>
                                <option value="Node">Node.js Backend</option>
                                <option value="FullStack">Full Stack Development</option>
                                <option value="Python">Python Development</option>
                                <option value="Java">Java Development</option>
                            </select>
                            {touched.course && errors.course && (
                                <p className="error-message">
                                    {errors.course}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={progress < 100}
                            className={`submit-btn ${progress === 100 ? 'active' : 'disabled'}`}
                        >
                            {isSubmitted ? 'Processing...' : 'Register Now'}
                        </button>
                    </form>
                </div>

                {/* Right Side: Interactive Preview */}
                <div className="preview-section">
                    {/* Background decorations */}
                    <div className="bg-decoration bg-decoration-1"></div>
                    <div className="bg-decoration bg-decoration-2"></div>

                    <div className="glass-card">
                        <div className="preview-header">
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Live Preview</h3>
                            <span className="status-badge">
                                {progress === 100 ? 'Ready' : 'Incomplete'}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="preview-item">
                                <div className="icon-box">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="preview-label">Full Name</p>
                                    <p className="preview-value">
                                        {formData.name || 'Your Name'}
                                    </p>
                                </div>
                            </div>

                            <div className="preview-item">
                                <div className="icon-box">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="preview-label">Email Address</p>
                                    <p className="preview-value">
                                        {formData.email || 'example@email.com'}
                                    </p>
                                </div>
                            </div>

                            <div className="preview-item">
                                <div className="icon-box">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="preview-label">Mobile Number</p>
                                    <p className="preview-value">
                                        {formData.mobile || '+1 234 567 890'}
                                    </p>
                                </div>
                            </div>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1rem', marginTop: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span className="preview-label">Selected Course</span>
                                    <span className="course-badge">
                                        {formData.course || 'None'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
