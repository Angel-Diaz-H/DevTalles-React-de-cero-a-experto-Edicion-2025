import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Grid, Plus, Search, SortAsc } from "lucide-react";

export const SearchControls = () => {
  return (
    <>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          <Input
            placeholder="Search heroes, villains, powers, teams..."
            className="h-12 bg-white pl-12 text-lg"
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
          <label className="text-sm font-medium">Minimum Strength: 0/10</label>
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
    </>
  );
};
