// import Banner from "../components/Banner";
// import Chefs from "../components/Chefs";
// import ContactUs from "../components/ContactUs";
// import Testimonials from "../components/Testimonials";

import Banner from "../components/Banner";
import ChefsList from "../components/ChefsList";
import ContactUs from "../components/ContactUs";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <ChefsList />
      {/* <FoodGallery /> */}
      <ContactUs />
      <Testimonials />
    </>
  );
};

export default Home;
