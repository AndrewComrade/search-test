import {rtkApi} from "../../../../shared/api/rtkApi";

const reposApi = rtkApi.injectEndpoints({
   endpoints: build => ({
       getReposByValue: build.query<any, string>({
           query: (searchValue) => ({
               url: `/search/repositories?q=${searchValue}`,
               method: 'GET',
           }),
       }),
   })
})

export const useGetReposByValue = reposApi.endpoints.getReposByValue
