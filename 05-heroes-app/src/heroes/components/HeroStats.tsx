import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users, Zap } from "lucide-react";
import { HeroStatCard } from "./HeroStatCard";
import { useHeroSummary } from "../hooks/useHeroSummary";
import { use } from "react";
import { FavoriteHeroContext } from "@/context/FavoriteHeroContext";

export const HeroStats = () => {
  const { data: summary } = useHeroSummary();
  const { favoriteCount } = use(FavoriteHeroContext);

  // const percentageFavorite = useMemo(() => {
  //   const percentage = favoriteCount / summary?.totalHeroes
  // }, [favoriteCount, summary]);

  if (!summary) {
    return <div>Loading</div>;
  }
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      <HeroStatCard
        title="Total de personajes"
        icon={<Users className="text-muted-foreground h-4 w-4" />}
      >
        <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
        <div className="mt-2 flex gap-1">
          <Badge variant="secondary" className="text-xs">
            {summary?.heroCount} Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summary?.villainCount} Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={<Heart className="text-muted-foreground h-4 w-4" />}
      >
        {/* TODO: Implementar favoritos */}
        <div className="text-2xl font-bold text-red-600">3</div>
        <p className="text-muted-foreground text-xs">
          {((favoriteCount / summary.totalHeroes) * 100).toFixed(2)}% of total
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Fuerte"
        icon={<Zap className="text-muted-foreground h-4 w-4" />}
      >
        <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
        <p className="text-muted-foreground text-xs">
          Strength: {summary?.strongestHero.strength}
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Inteligente"
        icon={<Trophy className="text-muted-foreground h-4 w-4" />}
      >
        <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
        <p className="text-muted-foreground text-xs">
          Intelligence: {summary?.smartestHero.intelligence}
        </p>
      </HeroStatCard>
    </div>
  );
};
