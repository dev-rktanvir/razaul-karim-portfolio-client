import { useForm } from 'react-hook-form';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import SocialLinks from '../../Components/SocialLinks/SocialLinks';

const Contact = () => {
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        const formData = {
            name: data.name,
            email: data.email,
            message: data.message
        }
        const result = await axiosSecure.post('/message', formData)
        if (result.data.insertedId) {
            Swal.fire({
                title: "Message Sent Success fully!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
                background: '#00BC91',
                color: '#ffffff',
                draggable: true
            });
        }
        reset();
    };

    return (
        <div className="h-full w-full max-w-7xl mx-auto px-6 py-12 text-white">
            <h2 className="text-primary text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Contact <span className="text-secondary">With Me</span>
            </h2>

            <div className="flex flex-col items-center lg:flex-row gap-12 mt-8 lg:mt-10 w-full lg:h-screen">
                {/* Left Column */}
                <div className="flex flex-col gap-6 w-full lg:w-1/3">
                    {/* Phone */}
                    <motion.div
                        className="bg-secondary/10 rounded-2xl p-6 flex items-center gap-4 shadow-md"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <FaPhoneAlt size={28} className="text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-accent">+880 1680523960</p>
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        className="bg-secondary/10 rounded-2xl p-6 flex items-center gap-4 shadow-md"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <FaEnvelope size={28} className="text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-accent">dev.rktanvir@gmail.com</p>
                        </div>
                    </motion.div>

                    {/* Address */}
                    <motion.div
                        className="bg-secondary/10 rounded-2xl p-6 flex items-center gap-4 shadow-md"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <FaMapMarkerAlt size={28} className="text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Address</h3>
                            <p className="text-accent">Gazipur, Dhaka-Bangladesh</p>
                        </div>
                    </motion.div>
                    <SocialLinks></SocialLinks>
                </div>

                {/* Right Column: Contact Form */}
                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full lg:w-2/3 bg-secondary/10 rounded-2xl p-8 shadow-md flex flex-col gap-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div>
                        <label className="block mb-2 font-semibold" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full p-3 rounded-lg bg-primary/10 border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && (
                            <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="w-full p-3 rounded-lg bg-primary/10 border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Your message"
                            className="w-full p-3 rounded-lg bg-primary/10 border border-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            {...register('message', { required: 'Message is required' })}
                        />
                        {errors.message && (
                            <p className="text-red-500 mt-1 text-sm">{errors.message.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary/90 text-white cursor-pointer font-semibold py-3 rounded-lg transition"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
