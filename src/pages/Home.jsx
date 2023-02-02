import React from "react";
import Button from "../Components/Button";
import categoryCardData  from "../Components/categoryCardData";
import CategoryCard from "../Components/CategoryCard";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div>
          <h1>Empowering and Enabling People with Disabilitiies since 1969</h1>
          <p>Welcome to Handicaps Welfare Association</p>
          <Button />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="category">
        <h1>We believe in the power of the collective</h1>
        <p>
          Everyone has a part to play to make society more safe and inclusive
          for everyone. Select the profile that best matches you.
        </p>
        {categoryCardData.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              img={item.img}
              subheader={item.subheader}
              body={item.body}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
