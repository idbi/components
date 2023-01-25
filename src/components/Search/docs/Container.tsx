import React, { useRef, useState } from "react";
import { Search as SearchComponent } from "../index";
import { mockUsers } from "./mocks/mockUsers";
import { ISearch } from "../types";

interface IUser {
  uuid: string;
  name: string;
  email: string;
}

export const Search: React.FC<ISearch> = (props) => {
  const [data, setData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<any>(null);

  const handleSearch = (value: string) => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    setLoading(true);
    timeoutRef.current = setTimeout(() => {
      const temp = mockUsers.filter((i) =>
        i.name.toLowerCase().includes(value.toLowerCase())
      );
      setData(temp);
      setLoading(false);
    }, 1000);
  };

  return (
    <SearchComponent
      {...props}
      onSearch={handleSearch}
      loading={loading}
      foundItems={{
        ...props.foundItems,
        data,
      }}
    />
  );
};
