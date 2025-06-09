import { IUser } from "@/shared/types";

export interface ProfileSidebarSchema {
    onSelectTab: (tab: "profile" | "security" | "orders") => void;
    user: IUser | null;
}