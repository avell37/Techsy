import { Button, Input } from "@/shared/ui";
import { useEditProfileForm } from "@/features/ManageModal";
import { ProfileFormProps } from "../types/ProfileFormProps";
import { Controller } from "react-hook-form";

export const ProfileForm = ({ onClose, edit }: ProfileFormProps) => {
    const { title, placeholder, isPassword, control, errors,
        handleSubmit, handleChangeData,
    } = useEditProfileForm({ edit, onClose });
    const mainError = edit === "username" ? errors.username?.message : edit === "email"
        ? errors.email?.message : edit === "password" ? errors.oldPassword?.message
            : undefined;

    return (
        <form
            className="flex flex-col gap-[30px] p-4"
            onSubmit={handleSubmit(handleChangeData)}
        >
            <h1 className="text-white pt-4 text-xl font-bold">
                Изменить {title}
            </h1>
            <div className="flex flex-col gap-[20px]">
                {edit && (
                    <Controller
                        name={edit === "password" ? "oldPassword" : edit}
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                noWrap
                                type={edit === "password" ? "password" : "text"}
                                className="custom-input p-3"
                                placeholder={placeholder}
                                error={mainError}
                            />
                        )}
                    />
                )}
                {isPassword && (
                    <>
                        <Controller
                            name="newPassword"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    noWrap
                                    type={edit === "password" ? "password" : "text"}
                                    {...field}
                                    className="custom-input p-3"
                                    placeholder="Введите новый пароль"
                                    error={errors.newPassword?.message}
                                />
                            )}
                        />
                        <Controller
                            name="repeatPassword"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    noWrap
                                    type={edit === "password" ? "password" : "text"}
                                    {...field}
                                    className="custom-input p-3"
                                    placeholder="Повторите новый пароль"
                                    error={errors.repeatPassword?.message}
                                />
                            )}
                        />
                    </>
                )}
            </div>
            <div className="flex justify-end mb-6 mr-2 gap-[10px]">
                <Button
                    className="apply-button"
                    type="submit"
                    text="Сохранить"
                />
                <Button
                    className="cancel-button"
                    onClick={onClose}
                    text="Закрыть"
                />
            </div>
        </form >
    );
};
