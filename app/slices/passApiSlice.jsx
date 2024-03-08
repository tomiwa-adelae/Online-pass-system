"use client";

import { apiSlice } from "./apiSlice";
const PASS_URL = "/api/passes";

export const passApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		allPasses: builder.mutation({
			query: () => ({
				url: `${PASS_URL}/mine`,
				method: "GET",
			}),
		}),
		passDetails: builder.mutation({
			query: (data) => ({
				url: `${PASS_URL}/${data}`,
				method: "GET",
			}),
		}),
		newPass: builder.mutation({
			query: (data) => ({
				url: `${PASS_URL}`,
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const {
	useAllPassesMutation,
	usePassDetailsMutation,
	useNewPassMutation,
} = passApiSlice;
