import { useEffect, useState } from "react";

interface ImagePreviewProps {
    file: File | null;
    className?: string;
}

export const ImagePreview = ({ file, className }: ImagePreviewProps) => {
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

    return <img src={previewUrl} alt="Предпросмотр" className={className} />;
};
