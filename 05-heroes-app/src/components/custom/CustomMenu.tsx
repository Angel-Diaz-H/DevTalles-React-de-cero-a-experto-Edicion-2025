import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

export function CustomMenu() {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive("/") && "bg-slate-400", "p-2")}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive("/search") && "bg-slate-400", "p-2")}
          >
            <Link to="/search">Buscar superhéroe</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
