import { useQuery } from "@tanstack/react-query";
import { fetchAdvisoryData, AdvisoryData } from "../lib/api";

export const useAdvisory = (days: number = 4) => {
  return useQuery<AdvisoryData, Error>({
    queryKey: ["advisory", days],
    queryFn: () => fetchAdvisoryData(days),
    staleTime: 1000 * 60 * 30,
  });
};
