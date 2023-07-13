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
// ask for
//1) how to split code 
//2) is okey to use react query or no need
//3) is okey to use axios or no need