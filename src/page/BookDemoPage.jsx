import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { useTheme } from '../themeContext/ThemeContext';
import countriesData from "../utils/countriesStates.json";



const BookDemoPage = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientName: '',
    companyName: '',
    clientCountry: '',
    clientState: '',
    date: '',
    time: '',
    workforce: '',
    dataType: '',
    deliveryDate: '',
  });

  const [availableStates, setAvailableStates] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;

    // If country changes, update the available states
  if (name === "clientCountry") {
    const country = countriesData.find((c) => c.name === value);
    setAvailableStates(country ? country.states : []);
    setFormData((prev) => ({ ...prev, 
      clientCountry: value,
      clientState: "" // reset state when country changes
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      clientName,
      companyName,
      clientCountry,
      clientState,
      date,
      time,
      workforce,
      dataType,
      deliveryDate,
    } = formData;

    const isFormComplete =
      clientName &&
      companyName &&
      clientCountry &&
      clientState &&
      date &&
      time &&
      workforce &&
      dataType &&
      deliveryDate;

    if (isFormComplete) {
      navigate('/success-page');
    } else {
      navigate('/error-page', {
        state: {
          returnPath: "/book-demo",
          returnLabel: "Book Demo Form"
        }
      });
    }
  };

  return (
    <div className='min-h-screen font-sans w-full md:px-20 px-4 py-20'>
      <div className='mt-2'>
        <h2 className={`text-center text-md md:text-3xl font-semibold mb-2 ${isDark ? "text-white" : "text-black"}`}>
          Smarter <span className='text-[#ff3ea5]'>AI </span> Starts with Smarter Data.
        </h2>
        <p className={`text-center text-[10px] sm:text-[12px] mb-12 ${isDark ? "text-[#d9d9d9]/[0.6]" : "text-gray-400"}`}>
          Schedule a call with us to understand your project requirements.
        </p>
      </div>

      <div className='flex items-center justify-center py-6 px-2 w-full'>
        <form className="w-full max-w-4xl" onSubmit={handleSubmit}>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Client Full Name *</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                placeholder="Client Full Name"
                className={`w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm placeholder-gray-500 outline-none`}
              />
            </div>
            <div>
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className={`w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm placeholder-gray-500 outline-none`}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="relative">
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Client Country *</label>
              <select
                name="clientCountry"
                value={formData.clientCountry}
                onChange={handleChange}
                className={`appearance-none w-full px-4 py-3  rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm placeholder-gray-500 outline-none`}
              >
                <option value="">Select Country</option>
                {countriesData.map((country, index) => (
                  <option key={index} value={country.name} className="text-black">{country.name}</option>
                ))}
              </select>
              <FaChevronDown className="pointer-events-none absolute right-4 top-10 text-gray-600" />
            </div>

            <div className="relative">
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? 'text-white' : 'text-black'}`}>Client State *</label>
              <select
                name="clientState"
                value={formData.clientState}
                onChange={handleChange}
                disabled={!availableStates.length}
                className={`appearance-none w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm placeholder-gray-500 outline-none`}
              >
                <option value="">Select State</option>
                {availableStates.map((state, index) => (
                  <option key={index} value={state} className="text-black">{state}</option>
                ))}
              </select>
              <FaChevronDown className="pointer-events-none absolute right-4 top-10 text-gray-600" />

            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="relative">
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`appearance-none w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm outline-none`}
              />
              <FaCalendarAlt className="absolute right-4 md:top-10.5 sm:top-10.5 top-9 text-[#ff3ea5] text-[14px] sm:text-[18px] pointer-events-none" />
            </div>

            <div className="relative">
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`appearance-none w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm outline-none`}
              />
              <FaClock className="absolute right-4.5 md:top-10.5 sm:top-10 top-9 text-[#ffea5] text-[18px] pointer-events-none" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Number of Workforce Needed *</label>
              <input
                type="number"
                name="workforce"
                value={formData.workforce}
                onChange={handleChange}
                placeholder="e.g. 10"
                className={`w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm placeholder-gray-500 outline-none`}
              />
            </div>

            <div className="relative">
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Type of Data *</label>
              <select
                name="dataType"
                value={formData.dataType}
                onChange={handleChange}
                className={`w-full px-4 py-3 pr-10 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm text-gray-600 appearance-none outline-none`}
              >
                <option value="">Select</option>
                <option value="Text">Text</option>
                <option value="Image">Image</option>
                <option value="Audio">Audio</option>
              </select>
              <FaChevronDown className="pointer-events-none absolute right-4 md:top-11 top-10 text-sm text-gray-600" />
            </div>
          </div>

          {/* Row 5 */}
          <div className="mb-10 relative md:w-[48%]">
            <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Expected Delivery Date *</label>
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              className={`appearance-none w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm outline-none`}
            />
            <FaCalendarAlt className="absolute right-4 md:top-10 sm:top-10.5 top-9 text-[#ff3ea5] text-[14px] sm:text-[18px] pointer-events-none" />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className={` ${isDark ? "text-black" : "text-white"} bg-[#ff3ea5] w-full md:w-1/2 cursor-pointer px-10 py-3 rounded-[14px] font-semibold text-xs sm:text-sm hover:bg-pink-700 transition`}
            >
              Book Demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDemoPage;
