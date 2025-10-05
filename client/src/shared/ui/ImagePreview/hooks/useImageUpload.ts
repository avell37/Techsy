import { useRef } from "react";

interface Props {
    onFileSelect: (file: File | null) => void
}

export const useImageUpload = (onFileSelect: (file: File | null) => void) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleFileClick = () => {
        fileInputRef?.current?.click();
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            onFileSelect(selectedFile)
        }
    }

    return {
        fileInputRef,
        handleFileClick,
        handleFileChange
    }
}
