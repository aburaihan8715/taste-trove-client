

import Banner from "../components/Banner";
import ChefsList from "../components/ChefsList";
import ContactUs from "../components/ContactUs";
import FoodGallery from "../components/FoodGallery";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <ChefsList />
      <FoodGallery />
      <ContactUs />
      <Testimonials />
    </>
  );
};

export default Home;
