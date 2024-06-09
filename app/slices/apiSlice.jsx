"use client";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	// baseUrl: "http://localhost:5000",
	baseUrl: "https://passify-backend.onrender.com",
	// headers: {
	// 	"content-type": "application/json",
	// 	"Access-Control-Allow-Origin": "https://passify-backend.onrender.com",
	// },
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.userInfo?.token;
		if (token) {
			headers.set("x-auth-token", `${token}`);
		}
		headers.set("content-type", "application/json");
		headers.set(
			"Access-Control-Allow-Origin",
			"https://passify-backend.onrender.com"
		);
		// headers.set("Access-Control-Allow-Origin", "http://localhost:5000");
		return headers;
	},
	credentials: "include",
});

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ["User", "Pass"],
	endpoints: (builder) => ({}),
});
