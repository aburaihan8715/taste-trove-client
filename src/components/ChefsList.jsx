import { useContext, useEffect, useState } from "react";
import Chef from "./Chef";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../ui/LoadingSpinner";

const ChefsList = () => {
  const [chefsData, setChefsData] = useState([]);
  const { authLoading, setAuthLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://taste-trove-server-aburaihan8715.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefsData(data);
        setAuthLoading(false);
      });
  }, [setAuthLoading]);

  if (authLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <section className="px-2 mt-10 sm:mt-20 bg-gray-100">
      <div className="w-full sm:max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl sm:text-4xl text-center font-medium text-gray-600 tracking-tighter">Our Skilled and Passionate Chefs</h2>
          <p className="mt-6 text-center">
            Embark on a culinary journey with our skilled and passionate chefs. They are the driving force behind the delectable flavors and exquisite
            creations experience at our restaurant. With years of experience and a deep love for the art of cooking, our chefs bring their expertise
            and creativity to every dish they prepare.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {chefsData.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsList;
