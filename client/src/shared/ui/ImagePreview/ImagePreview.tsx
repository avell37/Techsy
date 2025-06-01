import { useEffect, useState } from "react";

export const ImagePreview = ({ file }: { file: File | null }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        if (!file) {
            setPreviewUrl(null);
            return;
        }

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [file]);

    if (!file || !previewUrl) return null;

    return (
        <div className="border-2 border-[#5120B8] p-2 rounded-md">
            <img
                src={previewUrl}
                alt="Предпросмотр"
                className="w-[175px] h-40 object-contain"
            />
        </div>
    );
};
