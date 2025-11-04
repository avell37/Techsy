import { UserReviewCard } from "./UserReviewCard";
import { useReviews } from "../../model/hooks/useReviews";

export const UserReviews = () => {
    const { userReviews, currentUser, getReviewCardProps } = useReviews();
    
    return (
        <div className="mt-5 bg-gradient p-6 rounded-xl">
            <h1 className="text-white font-bold text-2xl pb-4">Ваши отзывы ({userReviews?.length})</h1>
            <div className="flex flex-col gap-8">
                {userReviews && userReviews?.map((item) => {
                    const cardProps = getReviewCardProps(item)
                    return (
                        <UserReviewCard
                            key={item.id}
                            review={item} 
                            currentUser={currentUser}
                            {...cardProps}
                        />
                    )
                })}
            </div>
        </div>
    )
}
