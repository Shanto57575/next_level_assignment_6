import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { IStatusLog } from "@/interfaces/parcel.interface";

interface StatusModalProps {
  trackingId: string;
  statusLogs: IStatusLog[];
}

export default function StatusModal({
  trackingId,
  statusLogs,
}: StatusModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Logs
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Status Logs</DialogTitle>
          <DialogDescription>
            History of parcel <span className="font-medium">{trackingId}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {statusLogs.map((log, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-2 flex flex-col gap-1 text-sm"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{log.status}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(log.updatedAt).toLocaleDateString()}{" "}
                  {new Date(log.updatedAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <span className="text-xs">
                By:{" "}
                {typeof log.updatedBy === "string"
                  ? log.updatedBy
                  : log.updatedBy?.name || "System"}
              </span>
              ({log.updatedBy?.role})
              {log.note && log.note !== "" && (
                <span className="text-xs text-muted-foreground">
                  Note: {log.note}
                </span>
              )}
            </div>
          ))}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
