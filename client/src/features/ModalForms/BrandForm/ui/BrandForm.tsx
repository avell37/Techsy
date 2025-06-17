import { Input, Button } from "@/shared/ui";
import { useBrandForm } from "../hooks/useBrandForm";
import { Controller } from "react-hook-form";

export const BrandForm = ({ onClose }: { onClose: () => void }) => {
    const { control, errors, handleSubmit, handleBrandFormSubmit } = useBrandForm(onClose);

    return (
        <form onSubmit={handleSubmit(handleBrandFormSubmit)} className="flex flex-col gap-[30px] pl-6">
            <h1 className="text-white pt-8 text-xl font-bold">
                Добавить бренд:
            </h1>
            <Controller
                name='brand'
                control={control}
                render={({ field }) =>
                    <Input
                        {...field}
                        noWrap
                        className="max-w-[450px] custom-input p-3"
                        placeholder="Введите название бренда"
                        error={errors?.brand?.message}
                    />} />
            <div className="flex justify-end mb-6 mr-2 gap-[10px]">
                <Button
                    className="apply-button"
                    type="submit"
                    text="Добавить"
                />
                <Button
                    className="cancel-button"
                    onClick={onClose}
                    text="Закрыть"
                />
            </div>
        </form>
    );
};
