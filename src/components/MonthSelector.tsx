// import * as React from "react";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export function MonthSelector() {
//   return (
//     <Select>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Select a Month" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Months</SelectLabel>
//           <SelectItem value="01">January</SelectItem>
//           <SelectItem value="02">February</SelectItem>
//           <SelectItem value="03">March</SelectItem>
//           <SelectItem value="04">April</SelectItem>
//           <SelectItem value="05">May</SelectItem>
//           <SelectItem value="06">June</SelectItem>
//           <SelectItem value="07">July</SelectItem>
//           <SelectItem value="08">August</SelectItem>
//           <SelectItem value="09">September</SelectItem>
//           <SelectItem value="10">October</SelectItem>
//           <SelectItem value="11">November</SelectItem>
//           <SelectItem value="12">December</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// }
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MonthSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MonthSelector({ value, onChange }: MonthSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Months</SelectLabel>
          <SelectItem value="01">January</SelectItem>
          <SelectItem value="02">February</SelectItem>
          <SelectItem value="03">March</SelectItem>
          <SelectItem value="04">April</SelectItem>
          <SelectItem value="05">May</SelectItem>
          <SelectItem value="06">June</SelectItem>
          <SelectItem value="07">July</SelectItem>
          <SelectItem value="08">August</SelectItem>
          <SelectItem value="09">September</SelectItem>
          <SelectItem value="10">October</SelectItem>
          <SelectItem value="11">November</SelectItem>
          <SelectItem value="12">December</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
