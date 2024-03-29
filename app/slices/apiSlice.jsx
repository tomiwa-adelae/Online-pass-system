"use client";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	// baseUrl: "http://localhost:5000",
	baseUrl: "https://passify-backend.onrender.com",
	headers: {
		"content-type": "application/json",
		"Access-Control-Allow-Origin": "https://passify-backend.onrender.com",
	},
	credentials: "include",
});

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ["User", "Pass"],
	endpoints: (builder) => ({}),
});
