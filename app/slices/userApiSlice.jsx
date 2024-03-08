"use client";

import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";
const UPLOAD_URL = "/api/uploads";

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
		uploadImage: builder.mutation({
			query: (data) => ({
				url: `/api/uploads`,
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useLogoutMutation,
	useUpdateUserMutation,
	useUploadImageMutation,
} = userApiSlice;
