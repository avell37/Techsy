import type { IReview, IUser } from "@/entities";
import { useMemo } from "react";

export const useReviewPermissions = (
    review: IReview,
    currentUser: IUser | null
) => {
    const isOwner = useMemo(
        () => currentUser?.id === review?.userId,
        [currentUser, review]
    );
    const isAdmin = useMemo(() => currentUser?.role === "Admin", [currentUser]);

    const canEdit = isOwner;
    const canDelete = isOwner || isAdmin;

    return {
        canEdit,
        canDelete,
    };
};
