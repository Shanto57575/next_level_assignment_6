import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeHolderText: string;
  result: string;
  setResult: (value: string) => void;
}

export default function DashboardSearch({
  placeHolderText,
  setResult,
  result,
}: SearchBarProps) {
  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        <Input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          className="peer ps-9 pe-9 rounded-sm"
          placeholder={placeHolderText}
          type="search"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
      </div>
    </div>
  );
}
