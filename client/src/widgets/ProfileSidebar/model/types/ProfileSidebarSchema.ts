export interface ProfileSidebarSchema {
    onSelectTab: (tab: "profile" | "security" | "orders") => void;
}