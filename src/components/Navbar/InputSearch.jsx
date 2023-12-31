"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (!keyword) {
      return;
    } else {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          className="rounded-lg p-2 text-primary3 focus:border-none"
          placeholder="Search Anime Here"
          ref={searchRef}
        />
      </form>
    </>
  );
};

export default InputSearch;
