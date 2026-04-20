import { HeroGridCard } from "./HeroGridCard";

export const HeroGrid = () => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <HeroGridCard />
    </div>
  );
};
