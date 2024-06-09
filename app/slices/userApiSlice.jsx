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
				headers: {
					"x-auth-token": "",
				},
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
		resetPassword: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/resetpassword`,
				method: "POST",
				body: data,
			}),
		}),
		verifyCode: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/verifycode`,
				method: "POST",
				body: data,
			}),
		}),
		updateNewPassword: builder.mutation({
			query: ({ id, code, newPassword, confirmPassword }) => ({
				url: `${USERS_URL}/updatepassword/${id}/${code}`,
				method: "POST",
				body: { id, code, newPassword, confirmPassword },
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
	useResetPasswordMutation,
	useVerifyCodeMutation,
	useUpdateNewPasswordMutation,
} = userApiSlice;
