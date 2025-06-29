import { Button, FormInputController } from "@/shared/ui";
import { useEditProfileForm } from "@/features/ManageModal";
import { ProfileFormProps } from "../types/ProfileFormProps";

export const ProfileForm = ({ onClose, edit }: ProfileFormProps) => {
    const { title, placeholder, isPassword, control, errors, handleChangeData,
    } = useEditProfileForm({ edit, onClose });

    return (
        <form
            className="flex flex-col gap-[30px] p-4"
            onSubmit={handleChangeData}
        >
            <h1 className="text-white pt-4 text-xl font-bold">
                Изменить {title}
            </h1>
            <div className="flex flex-col gap-[20px]">
                {edit && (
                    <FormInputController
                        name={edit === "password" ? "oldPassword" : edit}
                        control={control}
                        placeholder={placeholder}
                        className="max-w-[450px] w-full custom-input p-3"
                        type={isPassword ? "password" : "text"}
                        errors={errors}
                    />
                )}
                {isPassword && (
                    <>
                        <FormInputController
                            name="newPassword"
                            control={control}
                            placeholder="Введите новый пароль"
                            className="max-w-[450px] w-full custom-input p-3"
                            type="password"
                            errors={errors}
                        />
                        <FormInputController
                            name="repeatPassword"
                            control={control}
                            placeholder="Повторите новый пароль"
                            className="max-w-[450px] w-full custom-input p-3"
                            type="password"
                            errors={errors}
                        />
                    </>
                )}
            </div>
            <div className="flex justify-end mb-6 mr-4 gap-[10px]">
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
        </form>
    );
};
