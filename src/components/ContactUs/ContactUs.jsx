import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="">
              <img className="w-full" src="https://i.ibb.co/sFNLjCd/email.png" alt="email" />
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
              <div className="card-body">
                <h3 className="text-3xl font-medium text-gray-600">Contact Us</h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered input-primary" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="password" className="input input-bordered  input-primary" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea className="textarea textarea-primary" placeholder="Message"></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary text-gray-600">submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
