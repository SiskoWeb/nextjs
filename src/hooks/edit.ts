import { useCallback, useEffect, useState } from "react";
import GetService from "@/services/get";
export function useLogic() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await GetService.getData();
  //     setData(result);
  //   };

  //   fetchData();
  // }, []);
  const handleDelete = useCallback(async () => {
    console.log("clicked");
    const data = await GetService.getData();
    console.log(data);
    // Perform your logic here
  }, []);

  return {
    handleDelete,
  };
}
