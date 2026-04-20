import { Brain, Eye, Gauge, Heart, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const HeroGridCard = () => {
  return (
    <Card className="group overflow-hidden bg-linear-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src="/placeholder.svg?height=300&width=300"
          alt="Superman"
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Status indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <Badge
            variant="secondary"
            className="bg-white/90 text-xs text-gray-700"
          >
            Active
          </Badge>
        </div>

        {/* Universe badge */}
        <Badge className="absolute top-3 right-3 bg-blue-600 text-xs text-white">
          DC
        </Badge>

        {/* Favorite button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute right-3 bottom-3 bg-white/90 hover:bg-white"
        >
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        </Button>

        {/* View details button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 left-3 bg-white/90 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </Button>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-lg leading-tight font-bold">Superman</h3>
            <p className="text-sm text-gray-600">Clark Kent</p>
          </div>
          <Badge className="border-green-200 bg-green-100 text-xs text-green-800">
            Hero
          </Badge>
        </div>
        <Badge variant="outline" className="w-fit text-xs">
          Justice League
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="line-clamp-2 text-sm text-gray-600">
          The Last Son of Krypton, protector of Earth and symbol of hope for all
          humanity.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-orange-500" />
              <span className="text-xs font-medium">Strength</span>
            </div>
            <Progress value={100} className="h-2" activeColor="bg-orange-500" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Brain className="h-3 w-3 text-blue-500" />
              <span className="text-xs font-medium">Intelligence</span>
            </div>
            <Progress value={80} className="h-2" activeColor="bg-blue-500" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Gauge className="h-3 w-3 text-green-500" />
              <span className="text-xs font-medium">Speed</span>
            </div>
            <Progress value={90} className="h-2" activeColor="bg-green-500" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-purple-500" />
              <span className="text-xs font-medium">Durability</span>
            </div>
            <Progress value={100} className="h-2" activeColor="bg-purple-500" />
          </div>
        </div>

        {/* Powers */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Powers:</h4>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="text-xs">
              Super Strength
            </Badge>
            <Badge variant="outline" className="text-xs">
              Flight
            </Badge>
            <Badge variant="outline" className="bg-gray-100 text-xs">
              +4 more
            </Badge>
          </div>
        </div>

        <div className="border-t pt-2 text-xs text-gray-500">
          First appeared: 1938
        </div>
      </CardContent>
    </Card>
  );
};
