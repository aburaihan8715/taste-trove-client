import React, { useContext, useEffect, useState } from "react";
import Chef from "../Chef/Chef";
import { AuthContext } from "../../contexts/AuthProvider";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";

const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://taste-trove-server-aburaihan8715.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefsData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-medium text-gray-600 tracking-tighter">Our Skilled and Passionate Chefs</h2>
        <p className="mt-6 max-w-4xl mx-auto text-justify">
          Embark on a culinary journey with our skilled and passionate chefs. They are the driving force behind the delectable flavors and exquisite
          creations you'll experience at our restaurant. With years of experience and a deep love for the art of cooking, our chefs bring their
          expertise and creativity to every dish they prepare.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {chefsData.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
