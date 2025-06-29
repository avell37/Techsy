import { IReview } from "@/shared/types";
import { $authHost, $host } from "@shared/api";

export const fetchReviews = async (deviceId: string): Promise<IReview[]> => {
    const { data } = await $host.get<IReview[]>(`/api/review/${deviceId}`);
    return data;
}

export const createReview = async (deviceId: string, rate: number, comment: string) => {
    const { data } = await $authHost.post('/api/review', { deviceId, rate, comment });
    return data;
}

export const deleteReview = async (reviewId: string) => {
    const { data } = await $authHost.delete(`/api/review/${reviewId}`);
    return data;
}