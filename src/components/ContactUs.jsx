const ContactUs = () => {
  return (
    <section className="bg-secondary py-8 px-2 sm:px-10">
      <div className="w-full sm:max-w-5xl mx-auto">
        <div className="">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8">
              <img loading="lazy" className="max-w-full" src="https://i.ibb.co/sFNLjCd/email.png" alt="email" />
            </div>

            <div className="self-end pb-8">
              <div className="">
                <h3 className="text-3xl font-medium text-orange-700 uppercase">Contact Us</h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered input-error" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="password" className="input input-bordered input-error" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea className="textarea textarea-error" placeholder="Message"></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary text-gray-600">submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
