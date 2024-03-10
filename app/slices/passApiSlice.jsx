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
		adminAllPasses: builder.mutation({
			query: () => ({
				url: `${PASS_URL}`,
				method: "GET",
			}),
		}),
		adminApprovedPasses: builder.mutation({
			query: () => ({
				url: `${PASS_URL}/approvedPasses`,
				method: "GET",
			}),
		}),
		adminRejectedPasses: builder.mutation({
			query: () => ({
				url: `${PASS_URL}/rejectedPasses`,
				method: "GET",
			}),
		}),
		adminPendingPasses: builder.mutation({
			query: () => ({
				url: `${PASS_URL}/pendingPasses`,
				method: "GET",
			}),
		}),
		adminUserPasses: builder.mutation({
			query: (userId) => ({
				url: `${PASS_URL}/admin/userpasses/${userId}`,
				method: "GET",
			}),
		}),
		adminApprovePass: builder.mutation({
			query: (passId) => ({
				url: `${PASS_URL}/${passId}/approve`,
				method: "PUT",
			}),
		}),
		adminRejectPass: builder.mutation({
			query: (passId) => ({
				url: `${PASS_URL}/${passId}/reject`,
				method: "PUT",
			}),
		}),
	}),
});

export const {
	useAllPassesMutation,
	usePassDetailsMutation,
	useNewPassMutation,
	useAdminAllPassesMutation,
	useAdminApprovedPassesMutation,
	useAdminRejectedPassesMutation,
	useAdminPendingPassesMutation,
	useAdminUserPassesMutation,
	useAdminApprovePassMutation,
	useAdminRejectPassMutation,
} = passApiSlice;
