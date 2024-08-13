import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const StockSelect: React.FC<{
  count: number | undefined;
  qty: number | undefined;
  setQty: React.Dispatch<React.SetStateAction<number>>;
}> = ({ count, qty, setQty }) => {
  const items = Array.from({ length: count }, (_, index) => index + 1);
  return (
    <Select defaultValue={qty} onValueChange={(value) => setQty(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue defaultValue={qty} />
      </SelectTrigger>
      <SelectContent>
        {items?.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default StockSelect;
