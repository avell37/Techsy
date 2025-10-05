import { customAvatar } from "@/shared/lib/customAvatar/customAvatar";
import { Input } from "@/shared/ui";
import { Camera } from "lucide-react";

interface UserAvatarProps {
    username: string | undefined;
    picture?: string;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserAvatar = ({
    username,
    picture,
    fileInputRef,
    onUpload
}: UserAvatarProps) => {
    const handleFileUpload = () => fileInputRef?.current?.click();

    return (
        <div className="flex flex-col items-center gap-6">
            <div
                className="group relative w-[200px] h-[200px] border-2 border-indigo-900 rounded-xl bg-primary-300/20 
            overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary-900 hover:shadow-lg"
                onClick={handleFileUpload}
            >
                {picture ? (
                    <img
                        src={`${import.meta.env.VITE_API_URL}/uploads/avatars/${picture}`}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50"
                        alt="Фото профиля"
                    />
                ) : (
                    <div className="flex items-center justify-center text-white text-6xl 
                    bg-muted h-full group-hover:opacity-50 transition-all">
                        {customAvatar(username)}
                    </div>
                )}
                <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 
                                group-hover:opacity-100 transition-all duration-300"
                >
                    <div className="flex flex-col items-center gap-2">
                        <Camera className="stroke-white" />
                        <span className="text-white text-sm font-medium">
                            Изменить фото
                        </span>
                    </div>
                </div>
            </div>
            <div className="text-white/70 text-sm">
                Рекомендуемый размер: 200x200
            </div>
            <Input
                className="hidden"
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={onUpload}
            />
        </div>
    )
}
