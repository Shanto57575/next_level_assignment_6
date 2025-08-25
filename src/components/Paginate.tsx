import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { Dispatch, SetStateAction } from "react";

interface IPaginateProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}

export default function Paginate({
  currentPage,
  setCurrentPage,
  totalPage,
}: IPaginateProps) {
  return (
    <Pagination className="my-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              currentPage === 1
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
            onClick={() => setCurrentPage(currentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          {Array.from({ length: totalPage }, (_, i) => (
            <PaginationLink
              className="mr-2 cursor-pointer"
              isActive={currentPage === i + 1}
              key={i}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </PaginationLink>
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={
              currentPage === totalPage
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
