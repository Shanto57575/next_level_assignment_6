import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useProfileQuery } from "@/redux/app/features/authApi";
import { useAllReceiverQuery } from "@/redux/app/features/userApi";
import type { IUser } from "@/interfaces/user.interface";
import { useAddParcelMutation } from "@/redux/app/features/parcelApi";

export type ParcelType = "DOCUMENT" | "PACKAGE" | "FRAGILE" | "OVERSIZED";

const parcelTypes: ParcelType[] = [
  "DOCUMENT",
  "PACKAGE",
  "FRAGILE",
  "OVERSIZED",
];

type CreateParcelFormValues = {
  parcelType: ParcelType;
  weight: number;
  sender: string;
  receiver: string;
  address: string;
  fee: number;
  deliveryDate: string;
};

export default function CreateParcel() {
  const { data: userData } = useProfileQuery(undefined);
  const { data: receivers } = useAllReceiverQuery(undefined);
  const [addParcel, { isLoading }] = useAddParcelMutation();

  const form = useForm<CreateParcelFormValues>({
    defaultValues: {
      parcelType: "DOCUMENT",
      weight: 0,
      sender: userData?.data?._id,
      receiver: "",
      address: "",
      fee: 0,
      deliveryDate: "",
    },
  });

  const handleFormSubmit = async (data: CreateParcelFormValues) => {
    const toastId = toast.loading("creating parcel...");
    const payload = {
      ...data,
      weight: Number(data.weight),
      fee: Number(data.fee),
    };
    try {
      const result = await addParcel(payload);
      console.log(result);
      if (result?.data?.success) {
        toast.success("Parcel created successfully!", { id: toastId });
        form.reset();
      } else {
        toast.error("Failed to create parcel.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to create parcel.", { id: toastId });
    }
  };

  return (
    <div className="border p-10 w-full max-w-3xl mx-auto">
      <h1 className="text-3xl mb-10">Add Parcel</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="parcelType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parcel Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select parcel type" />
                    </SelectTrigger>
                    <SelectContent>
                      {parcelTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Weight */}
          <FormField
            rules={{ required: "weight is required" }}
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight (kg)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" {...field} min={0.01} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sender"
            render={() => (
              <FormItem>
                <FormLabel>Sender</FormLabel>
                <Input type="text" value={userData?.data?.name} readOnly />
              </FormItem>
            )}
          />

          {/* Receiver */}
          <FormField
            control={form.control}
            name="receiver"
            rules={{ required: "Receiver is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Receiver</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a receiver" />
                    </SelectTrigger>
                    <SelectContent>
                      {receivers?.data?.map((user: IUser) => (
                        <SelectItem key={user._id} value={user._id}>
                          {user.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            rules={{ required: "address is required" }}
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Delivery Address" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Fee */}
          <FormField
            rules={{ required: "fee is required" }}
            control={form.control}
            name="fee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fee (BDT)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min={0} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Delivery Date */}
          <FormField
            rules={{ required: "deliveryDate is required" }}
            control={form.control}
            name="deliveryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Date</FormLabel>
                <FormControl>
                  <Input {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} className="cursor-pointer" type="submit">
            Create Parcel
          </Button>
        </form>
      </Form>
    </div>
  );
}
