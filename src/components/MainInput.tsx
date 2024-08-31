"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef } from "react";

const MainInput = ({
  valueSearch,
  className,
}: {
  valueSearch?: string;
  className?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const searchQuery = inputRef.current.value;
      router.push(`/search/q=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <form
      className={`relative group w-full ${className}`}
      onSubmit={onSubmitHandle}
    >
      <input
        ref={inputRef}
        defaultValue={valueSearch}
        type="text"
        placeholder="Search for products..."
        className="py-4 block px-6 text-xl pl-14 outline-none w-full rounded-md bg-[#364452] focus:bg-white duration-300 caret-black placeholder:text-white placeholder:focus:text-[#364452] focus:text-[#364452] text-white"
      />
      <Search className="absolute top-[50%] translate-y-[-50%] left-4 text-white group-focus-within:text-[#364452]" />
    </form>
  );
};

export default MainInput;
