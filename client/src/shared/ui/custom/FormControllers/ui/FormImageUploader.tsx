import { Control, FieldValues, Path } from "react-hook-form";
import { Camera } from "lucide-react";
import { Button, FormField, FormItem, FormMessage, ImagePreview, Input } from "@/shared/ui";
import { useImageUpload } from "../../ImagePreview";

interface ImageUploaderProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
}

export const FormImageUploader = <T extends FieldValues>({ 
    name, 
    control, 
}: ImageUploaderProps<T>) => {
    return (
        <FormField 
            name={name}
            control={control}
            render={({ field, fieldState }) => {
                const { fileInputRef, handleFileClick, handleFileChange } = useImageUpload(
                    (file) => field.onChange(file)
                );
                const file = field.value
                return (
                    <FormItem>
                        {file && (
                            <ImagePreview 
                                file={file}
                                className="w-50 h-50 object-cover rounded-lg border border-primary-900/30 mt-4"
                            />
                        )}
                        <Button
                            type="button"
                            variant="default"
                            size="none"
                            className={`flex justify-center items-center border text-white 
                            max-w-[250px] p-2 transition-all mt-4 
                            ${fieldState.error 
                                ? "border-red-600 hover:border-red-800" 
                                : "border-primary-900/30 hover:bg-primary-900"}
                            `}
                            onClick={handleFileClick}
                        >
                            <Camera className="mr-2" />
                            {file ? "Изменить изображение" : "Загрузить изображение"}
                        </Button>

                        <Input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />

                        <FormMessage />
                    </FormItem>
                )
            }}
        />
    )
}