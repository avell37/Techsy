import { Button, Input, Label } from "@/shared/ui";
import { useState } from "react";

interface UsernameFormProps {
    currentUsername: string | undefined;
}

export const UsernameForm = ({
    currentUsername,
}: UsernameFormProps) => {
    const [username, setUsername] = useState<string>(currentUsername || "");

    return (
        <div className="flex flex-col gap-4">
            <Label className="text-gray-400">Имя пользователя</Label>
            <Input
                className="border border-primary-900 custom-input p-4"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <div className="flex justify-end gap-[10px]">
                <Button
                    variant="ghost"
                    className="flex justify-center items-center apply-button"
                >
                    Добавить
                </Button>
                <Button
                    variant="ghost"
                    className="flex justify-center items-center cancel-button"
                >
                    Закрыть
                </Button>
            </div>
        </div>
    )
}
