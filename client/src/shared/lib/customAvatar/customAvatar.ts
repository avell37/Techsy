export const customAvatar = (username: string | undefined) =>
    username?.charAt(0).toUpperCase() ?? "?";
