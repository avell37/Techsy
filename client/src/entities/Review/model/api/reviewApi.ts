import { $authHost, $host } from "@shared/api";
import type { IReview } from "../types/IReview";

export const fetchReviews = async (deviceId: string): Promise<IReview[]> => {
    const { data } = await $host.get<IReview[]>(`/api/review/${deviceId}`);
    return data;
}

export const fetchUserReviews = async () => {
    const { data } = await $authHost.get(`/api/review`);
    return data;
}

export const fetchAllReviews = async () => {
    const { data } = await $authHost.get(`/api/review/all`);
    return data;
}

export const createReview = async (deviceId: string, rate: number, comment: string) => {
    const { data } = await $authHost.post('/api/review', { deviceId, rate, comment });
    return data;
}

export const updateReview = async (reviewId: string, rate: number, comment: string) => {
    const { data } = await $authHost.patch(`/api/review/${reviewId}`, { rate, comment });
    return data;
}

export const deleteReview = async (reviewId: string) => {
    const { data } = await $authHost.delete(`/api/review/${reviewId}`);
    return data;
}