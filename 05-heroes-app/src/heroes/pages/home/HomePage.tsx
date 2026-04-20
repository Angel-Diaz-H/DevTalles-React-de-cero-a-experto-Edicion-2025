import {
  Search,
  Plus,
  Filter,
  SortAsc,
  Heart,
  Grid,
  Users,
  Zap,
  Trophy,
  Eye,
  Brain,
  Gauge,
  Shield,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "../../../components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const HomePage = () => {
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora y administra tus superhéroes y villanos favoritos"
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <Input
              placeholder="Search heroes, villains, powers, teams..."
              className="h-12 pl-12 text-lg"
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button variant="outline" className="h-12 bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>

            <Button variant="outline" className="h-12 bg-transparent">
              <SortAsc className="mr-2 h-4 w-4" />
              Sort by Name
            </Button>

            <Button variant="outline" className="h-12 bg-transparent">
              <Grid className="h-4 w-4" />
            </Button>

            <Button className="h-12">
              <Plus className="mr-2 h-4 w-4" />
              Add Character
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Advanced Filters</h3>
            <Button variant="ghost">Clear All</Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Team</label>
              <div className="border-input bg-background h-10 w-full rounded-md border px-3 py-2 text-sm">
                All teams
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <div className="border-input bg-background h-10 w-full rounded-md border px-3 py-2 text-sm">
                All categories
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Universe</label>
              <div className="border-input bg-background h-10 w-full rounded-md border px-3 py-2 text-sm">
                All universes
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <div className="border-input bg-background h-10 w-full rounded-md border px-3 py-2 text-sm">
                All statuses
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">
              Minimum Strength: 0/10
            </label>
            <div className="relative mt-2 flex w-full touch-none items-center select-none">
              <div className="bg-secondary relative h-2 w-full grow overflow-hidden rounded-full">
                <div
                  className="bg-primary absolute h-full"
                  style={{ width: "0%" }}
                />
              </div>
              <div className="border-primary bg-background ring-offset-background block h-5 w-5 rounded-full border-2 transition-colors" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains">Villains (2)</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Results info */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div>

        {/* Character Grid */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Hero Card 1 - Superman */}
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
                The Last Son of Krypton, protector of Earth and symbol of hope
                for all humanity.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Strength</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Brain className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Intelligence</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Speed</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Durability</span>
                  </div>
                  <Progress value={100} className="h-2" />
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

          {/* Hero Card 2 - Batman */}
          <Card className="group overflow-hidden bg-linear-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Batman"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-xs text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 bg-blue-600 text-xs text-white">
                DC
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute right-3 bottom-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </Button>

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
                  <h3 className="text-lg leading-tight font-bold">Batman</h3>
                  <p className="text-sm text-gray-600">Bruce Wayne</p>
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
                The Dark Knight of Gotham City, using fear as a weapon against
                crime and corruption.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Strength</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Brain className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Intelligence</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Speed</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Durability</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Powers:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Martial Arts
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Detective Skills
                  </Badge>
                  <Badge variant="outline" className="bg-gray-100 text-xs">
                    +3 more
                  </Badge>
                </div>
              </div>

              <div className="border-t pt-2 text-xs text-gray-500">
                First appeared: 1939
              </div>
            </CardContent>
          </Card>

          {/* Hero Card 3 - Wonder Woman */}
          <Card className="group overflow-hidden bg-linear-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Wonder Woman"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-xs text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 bg-blue-600 text-xs text-white">
                DC
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute right-3 bottom-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </Button>

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
                  <h3 className="text-lg leading-tight font-bold">
                    Wonder Woman
                  </h3>
                  <p className="text-sm text-gray-600">Diana Prince</p>
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
                Amazonian princess and warrior, champion of truth, justice, and
                equality.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Strength</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Brain className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Intelligence</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Speed</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Durability</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>

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
                First appeared: 1941
              </div>
            </CardContent>
          </Card>

          {/* Hero Card 4 - Spider-Man */}
          <Card className="group overflow-hidden bg-linear-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Spider-Man"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-xs text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 bg-red-600 text-xs text-white">
                Marvel
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute right-3 bottom-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </Button>

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
                  <h3 className="text-lg leading-tight font-bold">
                    Spider-Man
                  </h3>
                  <p className="text-sm text-gray-600">Peter Parker</p>
                </div>
                <Badge className="border-green-200 bg-green-100 text-xs text-green-800">
                  Hero
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                Avengers
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="line-clamp-2 text-sm text-gray-600">
                Your friendly neighborhood Spider-Man, with great power comes
                great responsibility.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Strength</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Brain className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Intelligence</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Speed</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Durability</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Powers:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Wall Crawling
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Spider Sense
                  </Badge>
                  <Badge variant="outline" className="bg-gray-100 text-xs">
                    +3 more
                  </Badge>
                </div>
              </div>

              <div className="border-t pt-2 text-xs text-gray-500">
                First appeared: 1962
              </div>
            </CardContent>
          </Card>

          {/* Hero Card 5 - Iron Man */}
          <Card className="group overflow-hidden bg-linear-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Iron Man"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-xs text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 bg-red-600 text-xs text-white">
                Marvel
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute right-3 bottom-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </Button>

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
                  <h3 className="text-lg leading-tight font-bold">Iron Man</h3>
                  <p className="text-sm text-gray-600">Tony Stark</p>
                </div>
                <Badge className="border-green-200 bg-green-100 text-xs text-green-800">
                  Hero
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                Avengers
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="line-clamp-2 text-sm text-gray-600">
                Billionaire genius inventor who uses his technology to protect
                the world.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Strength</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Brain className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Intelligence</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Speed</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Durability</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Powers:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Powered Armor
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Genius Intellect
                  </Badge>
                  <Badge variant="outline" className="bg-gray-100 text-xs">
                    +3 more
                  </Badge>
                </div>
              </div>

              <div className="border-t pt-2 text-xs text-gray-500">
                First appeared: 1963
              </div>
            </CardContent>
          </Card>

          {/* Hero Card 6 - Deadpool */}
          <Card className="group overflow-hidden bg-linear-to-br from-white to-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Deadpool"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-xs text-gray-700"
                >
                  Active
                </Badge>
              </div>

              <Badge className="absolute top-3 right-3 bg-red-600 text-xs text-white">
                Marvel
              </Badge>

              <Button
                size="sm"
                variant="ghost"
                className="absolute right-3 bottom-3 bg-white/90 hover:bg-white"
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </Button>

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
                  <h3 className="text-lg leading-tight font-bold">Deadpool</h3>
                  <p className="text-sm text-gray-600">Wade Wilson</p>
                </div>
                <Badge className="border-yellow-200 bg-yellow-100 text-xs text-yellow-800">
                  Anti-Hero
                </Badge>
              </div>
              <Badge variant="outline" className="w-fit text-xs">
                X-Force
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="line-clamp-2 text-sm text-gray-600">
                The Merc with a Mouth, an unpredictable anti-hero with
                accelerated healing powers.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium">Strength</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Brain className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium">Intelligence</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium">Speed</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-purple-500" />
                    <span className="text-xs font-medium">Durability</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Powers:</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Healing Factor
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Martial Arts
                  </Badge>
                  <Badge variant="outline" className="bg-gray-100 text-xs">
                    +3 more
                  </Badge>
                </div>
              </div>

              <div className="border-t pt-2 text-xs text-gray-500">
                First appeared: 1991
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button variant="default" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </>
    </>
  );
};
