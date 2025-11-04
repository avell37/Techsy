import { Spinner } from "@/shared/ui/custom";
import { ReviewColumns } from "./ReviewTable/ReviewColumns";
import { useGetReviews } from "../model/hooks/useGetReviews";
import { StoreLayout } from "@/widgets";

export const Reviews = () => {
    const { reviews } = useGetReviews();

    if (!reviews) return <Spinner width="50" height="50" className="min-h-screen" />

    return (
        <StoreLayout 
            title={`Отзывы (${reviews ? reviews.length : ''})`}
            subtitle="Все отзывы вашего магазина"
            columns={ReviewColumns}
            data={reviews}
            filterKey="user"
        />
    )
}
