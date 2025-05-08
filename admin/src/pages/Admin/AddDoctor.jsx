import React from "react";
import { assets } from "../../assets/assets";

const AddDoctor = () => {
  return (
    <form className="w-full m-5">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        {/* image upload area */}
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label className="" htmlFor="doc-img">
            <img className="w-16 bg-gray-100 rounded-full cursor-pointer" src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="doc-img" className="hidden" />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          {/* left area */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor name</p>
              <input className="border rounded px-3 py-2" type="text" placeholder="Name" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input className="border rounded px-3 py-2" type="text" placeholder="Email" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input className="border rounded px-3 py-2" type="Password" placeholder="Password" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select className="border rounded px-3 py-2" name="" id="">
                <option value="">1 year</option>
                <option value="">2 years</option>
                <option value="">3 years</option>
                <option value="">4 years</option>
                <option value="">5 years</option>
                <option value="">6 years</option>
                <option value="">7 years</option>
                <option value="">8 years</option>
                <option value="">9 years</option>
                <option value="">10 years</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input className="border rounded px-3 py-2" type="number" placeholder="fees" required />
            </div>
          </div>
          {/* right area */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select className="border rounded px-3 py-2" name="" id="">
                <option value="">General physician</option>
                <option value="">Gynecologist</option>
                <option value="">Dermatologist</option>
                <option value="">Pediatrcians</option>
                <option value="">Neurologist</option>
                <option value="">Gastroenterology</option>
              </select>
            </div>
              <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input className="border rounded px-3 py-2" type="text" placeholder="Education" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p className="">Address</p>
              <input className="border rounded px-3 py-2" type="text" placeholder="address 1"  required/>
              <input className="border rounded px-3 py-2" type="text" placeholder="address 2"  required/>
            </div>
          </div>
        </div>
        {/* about doctor */}
        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea className="w-full px-4 border rounded" type="text" placeholder="write about doctor" rows={5} required />
        </div>
        {/* Button */}
        <button className="bg-primary px-10 py-3 mt-4 text-white rounded-full">Add doctor</button>
      </div>
    </form>
  );
};

export default AddDoctor;
