const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/XF89yGB/chef-banner.jpg")` }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-3xl sm:text-5xl font-bold">
              <span>Healthy Meal</span>
              <br />
              <span className="text-xl sm:text-3xl">Every Single Day</span>
            </h1>
            <p className="mb-5 text-center bg-zinc-700 p-3 sm:p-10 opacity-50 rounded">
              Awaken your inner chef with a wealth of culinary knowledge at your fingertips. Explore a virtual library of recipes spanning across
              cultures and expertise levels, empowering you to elevate your cooking skills and create extraordinary dishes.
            </p>
            {/* <button className="btn btn-primary rounded text-gray-600">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
