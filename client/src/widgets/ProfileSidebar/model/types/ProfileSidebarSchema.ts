import { IUser } from "@/shared/types";

export interface ProfileSidebarSchema {
    onSelectTab: (tab: "main" | "security" | "orders" | "admin") => void;
    user: IUser | null;
}