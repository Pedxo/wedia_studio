import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { FaCalendarAlt, FaCloudUploadAlt } from 'react-icons/fa';
import CloudUpload from "../assets/cloud_upload.png"
import { useTheme } from '../themeContext/ThemeContext';


const RequestForm = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: '',
    companyName: '',
    dataType: '',
    deliveryDate: '',
    workforce: '',
    volume: '',
    confidential: false,
  });

  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileSelect = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const {
      projectName,
      companyName,
      dataType,
      deliveryDate,
      workforce,
      volume,
      confidential
    } = formData;

    const isFormComplete = projectName && companyName && dataType &&
      deliveryDate && workforce && volume && file;

    if (!confidential) {
      navigate('/warning'); // NDA not accepted
    } else if (isFormComplete) {
      navigate('/success-page'); // All good
    } else {
      navigate('/error-page', {
        state: {
          returnPath: "/request-form",
          returnLabel: "Request Form"
        }
      });
    }
  };


  return (
    <div className='min-h-screen font-sans w-full md:px-20 px-4 py-20'>
      <div className='mt-2'>

        <h2 className={`text-center text-md md:text-3xl font-semibold mb-2 ${isDark ? "text-white" : "text-black"}`}>
          Get matched with creative humans for <br /> data labelling tasks
        </h2>
        <p className={`text-center text-[10px] sm:text-[12px] mb-12 ${isDark ? "text-[#d9d9d9]/[0.6]" : "text-gray-400"
          }`}>

          The more you share, the better we can tailor your labelling team. No commitments <br />
          just high-impact support.
        </p>
      </div>
      <div className='flex items-center justify-center py-6 px-2 w-full'>
        <form className="w-full max-w-4xl" onSubmit={handleSubmit}>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>

              <label className={`block text-xs sm:text-sm mb-2 ${isDark ? "text-white" : "text-black"
                }`}>Project Name</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Project Name"
                className={`w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-gray-600 text-xs sm:text-sm placeholder-gray-500 outline-none`}
              />
            </div>
            <div>
              <label className={`block text-xs sm:text-sm ${isDark ? "text-white" : "text-black"} mb-2`}>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className={`w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-gray-600 text-xs sm:text-sm placeholder-gray-500 outline-none`}
              />
            </div>
          </div>


          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {/* Dropdown */}
            <div className="relative">
              <label className={`block text-xs sm:text-sm ${isDark ? "text-white" : "text-black"} mb-2`}>Type of Data</label><<<<<<< HEAD
              <select
                name="dataType"
                value={formData.dataType}
                onChange={handleChange}
                className={`w-full px-4 py-3 pr-10 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-xs sm:text-sm text-gray-600 appearance-none outline-none`}>

                <option value="">Select</option>
                <option value="Text">Text</option>
                <option value="Image">Image</option>
                <option value="Audio">Audio</option>
              </select>
              <FaChevronDown className="pointer-events-none absolute right-4 top-10 text-sm text-gray-600 " />
            </div>

            {/* Date */}
            <div className="relative">
              <label className={`block text-xs sm:text-sm ${isDark ? "text-white" : "text-black"} mb-2`}>Expected Delivery Date</label>
              <input

                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}

                type="date"
                className={`appearance-none w-full px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-gray-600 text-xs sm:text-sm outline-none`}
              />
              <FaCalendarAlt className="pointer-events-none absolute right-4 md:top-10.5 sm:top-10.5 top-9 text-[#ff3ea5] text-[14px] sm:text-[18px]" />
            </div>
          </div>


          {/* Row 3 */}
          <div className="mb-10 ">
            <label className={`block  text-xs sm:text-sm ${isDark ? "text-white" : "text-black"} mb-2`}>Number of Workforce Needed</label>
            <input
              name="workforce"
              value={formData.workforce}
              onChange={handleChange}
              type="number"
              placeholder="Enter the number of workforce needed"
              className={`w-full md:w-[48%] px-4 py-3 rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-gray-600 text-xs sm:text-sm placeholder-gray-500 outline-none`}
            />
          </div>

          {/* Volume of Data */}
          <div className="mb-10">
            <label className={`block text-xs sm:text-sm ${isDark ? "text-white" : "text-black"} mb-2`}>
              Volume of Data <span className={`text-[9px] sm:text-xs ${isDark ? "text-gray-600" : "text-gray-700"}`}>(Use categories: Positive, Negative, Neutral)</span>
            </label>
            <textarea
              name="volume"
              value={formData.volume}
              onChange={handleChange}
              rows="12"
              style={{ resize: "none" }}
              placeholder="Volume of Data"
              className={`w-full px-4 py-3 overflow-y-auto rounded-[14px] ${isDark ? "bg-[#d9d9d9]/[0.03]" : "bg-[#d9d9d9]/[0.4]"} text-gray-600 text-xs sm:text-sm placeholder-gray-500 outline-none`}
            />
          </div>

          {/* File Upload */}

          <div className="mb-10">
            <label className={`block text-sm ${isDark ? "text-white" : "text-black"} mb-2`}>File Upload</label>

            <div className="relative w-full h-64 px-10 py-8 flex flex-col justify-center items-center text-center rounded-[14px] overflow-hidden">
              {/* SVG Border */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <rect
                  x="2"
                  y="2"
                  width="98%"
                  height="96%"
                  rx="14"
                  ry="14"
                  fill="none"
                  stroke="#ff3ea5"
                  strokeWidth="1"
                  strokeDasharray="8,8"
                />
              </svg>

              {/* Upload Content */}
              <img
                src={CloudUpload}
                alt="upload"
                className="w-10 h-10 mb-3 cursor-pointer z-10"
                onClick={() => fileInputRef.current.click()}
              />
              <p className={`${isDark ? "text-white" : "text-black"} text-xs sm:text-sm z-10`}>Choose a file or drag & drop it here.</p>

              <p className={`${isDark ? "text-gray-500" : "text-gray-700"} text-[9px] sm:text-xs mt-2 z-10`}>Accepts ZIP, IMAGES, JSON, AUDIO FILES, etc.</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
              />

              {file && (
                <div className="mt-4 w-full z-10">
                  <p className="text-xs text-gray-300 mb-1">{file.name}</p>
                  <div className="w-full h-2 bg-[#d9d9d9]/[0.03] rounded">
                    <div
                      className="h-full bg-[#ff3ea5] rounded"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>


          {/* Confidentiality */}
          <div className="mb-10">
            <h3 className={`block text-sm ${isDark ? "text-white" : "text-black"} mb-3`}>Confidentiality</h3>

            <label className="flex items-center gap-3 cursor-pointer select-none">
              <div className="relative w-4 h-4">
                <input
                  type="checkbox"
                  name="confidential"
                  checked={formData.confidential}
                  onChange={handleChange}
                  className="appearance-none w-full h-full border border-[#ff3ea5] rounded bg-transparent checked:border-[#ff3ea5] transition-all duration-150"
                />
                {formData.confidential && (
                  <svg
                    className="absolute top-[2px] left-[2px] w-3 h-3 text-[#ff3ea5] pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className={`text-[10px] sm:text-xs ${isDark ? "text-gray-300" : "text-black"}`}>
                This data is sensitive, and we require an NDA
              </span>
            </label>

          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className={` ${isDark ? "text-black" : "text-white"} bg-[#ff3ea5] text-black w-full md:w-1/2 cursor-pointer px-10 py-3 rounded-[14px] font-semibold text-xs sm:text-sm hover:bg-pink-700 transition`}
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestForm