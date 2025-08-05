import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaChevronDown, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { useTheme } from '../themeContext/ThemeContext';
import countriesData from "../utils/countriesStates.json";



const enumTypeOfData = ["Text", "Images", "Audio", "Video", "Other"];

const BookDemoPage = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    clientFullName: '',
    companyName: '',
    clientCountry: '',
    clientState: '',
    date: '',
    time: '',
    numberOfWorkforce: '',
    typeOfData: '',
    expectedDeliveryDate: '',
    clientEmail: '',
  });

  const [availableStates, setAvailableStates] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  


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
  setFormErrors((prev) => ({...prev, [name]: false }));

  };

  const validateForm = () => {
    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if(!value) errors[key] = true
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    const baseUrl = "https://wedia-2w5k.onrender.com";

    const payload = {
      ...formData,
      numberOfWorkforce:Number(formData.numberOfWorkforce),
    };

    try {
      setIsSubmitting(true);
      const res = await axios.post(`${baseUrl}/api/v1/request-form/book-demo`, payload);
      console.log("Submitted form data:", payload);
      navigate('/success-page', {
        state: {
          returnPath: "/",
          returnLabel: "Home Page"
        }
        
      });
      setFormData({
        clientFullName: '',
        companyName: '',
        clientCountry: '',
        clientState: '',
        date: '',
        time: '',
        numberOfWorkforce: '',
        typeOfData: '',
        expectedDeliveryDate: '',
        clientEmail: '',
      });
      setAvailableStates([]);
    } catch (err) {
      console.error("Error submitting form:", err?.response?.data || err);
      navigate('/error-page', {
        state: {
          returnPath: "/book-demo",
          returnLabel: "Book Demo Form"
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (field) => `
    w-full px-4 py-3 rounded-[14px] text-xs sm:text-sm outline-none 
    ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} 
    ${formErrors[field] ? "border border-pink-500" : ""}
  `;
 
  const selectClass = (field) => `
    appearance-none w-full px-4 py-3 rounded-[14px] 
    ${formErrors[field] ? 'border border-[#ff3ea5]' : ''}
    ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} 
    text-xs sm:text-sm placeholder-gray-500 outline-none
  `;

  const dateTimetClass = (field) => `
    appearance-none w-full px-4 py-3 rounded-[14px] 
    ${formErrors[field] ? 'border border-[#ff3ea5]' : ''}
    ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} 
    text-xs sm:text-sm outline-none
  `;

  const typeOfDataClass = (field) => `
    appearance-none w-full px-4 py-3 pr-10 rounded-[14px] 
    ${formErrors[field] ? 'border border-[#ff3ea5]' : ''}
    ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} 
    text-xs sm:text-sm text-gray-600 outline-none
  `;
   

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
                name="clientFullName" 
                value={formData.clientFullName}
                onChange={handleChange}
                placeholder="Client Full Name"
                className={inputStyle("clientFullName")}
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
                className={inputStyle("companyName")}
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
                className={selectClass("clientCountry")}
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
                className={selectClass("clientState")}
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
                min={today}
                onChange={handleChange}
                className={dateTimetClass("date")}
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
                className={dateTimetClass("time")}
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
                name="numberOfWorkforce"
                value={formData.numberOfWorkforce}
                onChange={handleChange}
                placeholder="e.g. 10"
                className={inputStyle("numberOfWorkforce")}
              />
            </div>

            <div className="relative">
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Type of Data *</label>
              <select
                name="typeOfData"
                value={formData.typeOfData}
                onChange={handleChange}
                className={typeOfDataClass("typeOfData")}
              >
                <option value="">Select</option>
                {enumTypeOfData.map((type, index)=>(
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <FaChevronDown className="pointer-events-none absolute right-4 md:top-11 top-10 text-sm text-gray-600" />
            </div>
          </div>

          {/* Row 5 delivery date*/}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
          <div className="mb-10 relative">
            <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Expected Delivery Date *</label>
            <input
              type="date"
              name="expectedDeliveryDate"
              min={today}
              value={formData.expectedDeliveryDate}
              onChange={handleChange}
              className={dateTimetClass("expectedDeliveryDate")}
            />
            <FaCalendarAlt className="absolute right-4 md:top-10 sm:top-10.5 top-9 text-[#ff3ea5] text-[14px] sm:text-[18px] pointer-events-none" />
          </div>
          <div>
              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"}`}>Email *</label>
              <input
                type="email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
                placeholder="Email"
                className={inputStyle("clientEmail")}
              />
            </div>
            </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={` ${isDark ? "text-black" : "text-white"} bg-[#ff3ea5] w-full md:w-1/2 cursor-pointer px-10 py-3 rounded-[14px] font-semibold text-xs sm:text-sm hover:bg-pink-700 transition`}
            >
            {isSubmitting ? "Submitting..." : "Book Demo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDemoPage;
