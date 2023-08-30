const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/XF89yGB/chef-banner.jpg")` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Healthy Meal Every Single Day</h1>
            <p className="mb-5">
              Awaken your inner chef with a wealth of culinary knowledge at your fingertips. Explore a virtual library of recipes spanning across
              cultures and expertise levels, empowering you to elevate your cooking skills and create extraordinary dishes.
            </p>
            <button className="btn btn-primary rounded text-gray-600">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
