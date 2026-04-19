import { Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <div className="bg-red-200">
      <Outlet />
    </div>
  );
};
