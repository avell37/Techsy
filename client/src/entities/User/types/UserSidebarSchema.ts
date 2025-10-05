import { IUser } from "@/shared/types";

export interface UserSidebarSchema {
    user: IUser | null;
    onSelectTab: (tab: "main" | "reviews" | "favorites" | "security" | "orders" | "store") => void;
}