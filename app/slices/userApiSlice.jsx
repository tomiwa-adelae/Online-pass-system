"use client";

import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/auth`,
				method: "POST",
				body: data,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: `${USERS_URL}/logout`,
				method: "POST",
			}),
		}),
		register: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		updateUser: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/profile`,
				method: "PUT",
				body: data,
			}),
		}),
		updatePassword: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/password`,
				method: "PUT",
				body: data,
			}),
		}),
		getAdminUsers: builder.mutation({
			query: (keyword = "") => ({
				url: `${USERS_URL}/?keyword=${keyword}`,
				method: "GET",
			}),
		}),
		getAdminUser: builder.mutation({
			query: (id) => ({
				url: `${USERS_URL}/${id}`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useLogoutMutation,
	useUpdateUserMutation,
	useUpdatePasswordMutation,
	useGetAdminUsersMutation,
	useGetAdminUserMutation,
} = userApiSlice;
