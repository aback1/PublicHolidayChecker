import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const holidayApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "https://openholidaysapi.org/"}),
    endpoints: (builder) => ({
        fetchHolidays: builder.query({
            query: (args) => ({
                url: "PublicHolidays",
                params: {
                    countryIsoCode: args.countryIsoCode,
                    validFrom: args.validFrom,
                    validTo: args.validTo,
                    languageIsoCode: args.languageIsoCode,
                    subdivisionCode: args.subdivisionCode,
                },
            }),
            providesTags: ["holidays"],
        }),
    }),
});

export const { useFetchHolidaysQuery } = holidayApi;
