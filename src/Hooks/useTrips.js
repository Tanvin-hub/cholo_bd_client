import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useTrips = (queryName, query, params) => {
    const { data: trips = [], refetch, isLoading } = useQuery({
        queryKey: ["trips"],
        queryFn: async () => {
            if(!query && !params) {
                const res = await fetch("trips.json");
                const data = await res.json()
                return data
            }
            else if (query & !params) {
                const res = await fetch(`trips.json?${queryName}=${query}`)
                const data = await res.json()
                return data;
            }
            else {
                const res = await fetch(`trips.json/trips/${params}`);
                const data = await res.json()
                return data
            }
        },
      });

      return {trips, refetch, isLoading}
}

export default useTrips;