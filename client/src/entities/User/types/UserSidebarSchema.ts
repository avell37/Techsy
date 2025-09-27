import { IUser } from "@/shared/types";

export interface UserSidebarSchema {
    user: IUser | null;
    onSelectTab: (tab: "main" | "security" | "orders" | "store") => void;
}