import HeroSection from "./subcomponents/HeroSection";
import Recipes from "./subcomponents/Recipes";

type HomeProps = {
  recipes: any[]; 
};

const Home: React.FC<HomeProps> = ({ recipes }) => {
  return (
    <>
      <HeroSection />
      <Recipes recipes={recipes} />
    </>
  );
};

export default Home;
