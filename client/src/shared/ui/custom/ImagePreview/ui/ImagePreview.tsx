import { useEffect, useState } from "react";

interface ImagePreviewProps {
    file: File | string | null;
    className?: string;
}

export const ImagePreview = ({ file, className }: ImagePreviewProps) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        let url = null;
        if (previewUrl && file instanceof File) {
            URL.revokeObjectURL(previewUrl);
        }

        if (!file) {
            setPreviewUrl(null);
            return;
        }

        if (typeof file === 'string') {
            if (file.startsWith('http') || file.startsWith('blob:') || file.startsWith('data:')) {
                url = file;
            } else {
                url = `${import.meta.env.VITE_API_URL}/uploads/${file}`
            }
        }
        else if (file instanceof File) {
            url = URL.createObjectURL(file);
        }

        setPreviewUrl(url);

        return () => {
            if (previewUrl && file instanceof File) {
                URL.revokeObjectURL(previewUrl);
            }
        }
    }, [file]);

    if (!file || !previewUrl) return null;

    return <img src={previewUrl} alt="Предпросмотр" className={className} />;
};
