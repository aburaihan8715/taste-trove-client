import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecipes = () => {
  const params = useParams();
  const data = useLoaderData();
  const chefRecipes = data?.find((chefRecipe) => chefRecipe.id === params.id);
  const { image, chefName, bio, likes, numberOfRecipes, yearsOfExperience, recipes} = chefRecipes;

  // ingredient items
  const ingredientItems = recipes[0]?.ingredients?.map((item, index) => (
    <p key={index}>
      ({index + 1}). {item}
    </p>
  ));

  // cooking steps
  const cookingSteps = recipes[0]?.cookingSteps?.map((item, index) => (
    <p key={index}>
      ({index + 1}). {item}
    </p>
  ));

  const ratings=recipes[0]?.rating

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div>
          <div className="card lg:card-side bg-base-100 shadow-sm rounded">
            <figure>
              <img className="w-full h-full" src={image} alt="chef" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-gray-600">{chefName}</h3>
              <p>{bio}</p>
              <p>Likes : {likes}</p>
              <p>
                Recipes : {numberOfRecipes}
                <sup>+</sup>
              </p>
              <p>Experience : {yearsOfExperience} years</p>
            </div>
          </div>
        </div>

        <hr className="my-8" />
        <div className="">
          <h2 className="text-2xl capitalize font-medium text-center">{recipes[0]?.recipeName}</h2>
          <div className="mt-8">
            <h3 className="font-semibold">🥝🍓 Ingredients :</h3>
            {ingredientItems}
          </div>
        </div>

        <div className="mt-8">
          <div>
            <h3 className="font-semibold">👉 Cooking Steps :</h3>
            {cookingSteps}
          </div>
        </div>

        <div className=" flex justify-end">
          <div className="text-2xl border p-2 space-x-2">
            <span >⭐⭐⭐⭐ : {ratings}</span>
            <button>🧡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
