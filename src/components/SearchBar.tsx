import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SearchBarProps {
  result: string;
  setResult: (value: string) => void;
  handleSearch: () => void;
}

export default function SearchBar({
  setResult,
  result,
  handleSearch,
}: SearchBarProps) {
  return (
    <form
      className="w-full max-w-sm mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        if (result) handleSearch();
      }}
    >
      <Label className="mb-3">Search Parcel</Label>
      <div className="relative">
        <Input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && result) {
              e.preventDefault();
              handleSearch();
            }
          }}
          className="peer ps-9 pe-9 rounded-sm"
          placeholder="Enter Tracking Id"
          type="search"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
        <button
          disabled={!result}
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Submit search"
          type="submit"
        >
          <ArrowRightIcon size={16} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
