"use client";

import api from "@/services/service";
import { useQuery } from "@tanstack/react-query";

const TestPage = () => {
  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: () => api.information.getAllSupports(),
  });
  console.log(data);

  return (
    <button
      onClick={async () => {
        const result = await address.open();
        console.log(result);
      }}
    >
      버튼
    </button>
  );
};

export default TestPage;
