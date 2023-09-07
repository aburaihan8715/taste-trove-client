import { useContext, useEffect, useState } from "react";
import Chef from "./Chef";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../ui/LoadingSpinner";

const ChefsList = () => {
  const [chefsData, setChefsData] = useState([]);
  const { authLoading, setAuthLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://taste-trove-server-aburaihan8715.vercel.app/chefs")
      // https://taste-trove-server-aburaihan8715.vercel.app/chefs
      // https://taste-trove-server.vercel.app
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
    <section className="bg-secondary py-10">
      <div className="px-2 sm:px-5">
        <div>
          <h2 className="text-2xl sm:text-4xl text-center font-medium text-orange-700 tracking-tighter uppercase">Our Skilled Chefs</h2>
          <p className="max-w-2xl mx-auto mt-6 text-center">
            Embark on a culinary journey with our skilled and passionate chefs. They are the driving force behind the delectable flavors.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
          {chefsData.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsList;
