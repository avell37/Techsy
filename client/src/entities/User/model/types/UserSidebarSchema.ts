import type { IUser } from "./IUser";

export interface UserSidebarSchema {
    user: IUser | null;
    onSelectTab: (tab: "main" | "reviews" | "favorites" | "security" | "orders" | "store") => void;
}