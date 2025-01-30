import { BiSearch } from "react-icons/bi";

export default function SearchBar(props) {
  return (
    <div className="flex w-60 items-center gap-[6px] rounded-md border border-[#484748] bg-stone-950 px-2 py-1 text-sm transition-colors focus-within:border-stone-100">
      <BiSearch className="flex" weight={200} size="16px" color="#979899" />
      <input
        {...props}
        type="text"
        placeholder="Search..."
        className="w-full bg-stone-950 font-SFPro text-stone-100 placeholder:text-[#979899] focus:outline-none"
      />
    </div>
  );
}
