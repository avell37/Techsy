export interface ReviewSchema {
    id: string;
    deviceId: string;
    userId: string;
    rating: number;
    text: string;
    createdAt: string;
    updatedAt: string;
}

export interface ReviewStateSchema {
    reviews: ReviewSchema[];
    loading: boolean;
    error: boolean;
}