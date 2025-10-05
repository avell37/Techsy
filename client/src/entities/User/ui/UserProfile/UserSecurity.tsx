import { Button } from "@/shared/ui";
import { EditIcon } from "lucide-react";

export const UserSecurity = () => {
    return (
        <div className="mt-5 bg-gradient p-4 rounded-xl">
            <div className="p-6 border-1 border-primary-900/30 rounded-xl bg-primary-300/20">
                <div className="flex items-center justify-between security-responsive">
                    <div>
                        <h3 className="text-white text-lg font-medium mb-2 max-md:text-sm">
                            Безопасность аккаунта
                        </h3>
                        <p className="text-white/70 text-sm max-md:text-xs">
                            Рекомендуется регулярно менять пароль
                            для обеспечения безопасности вашего
                            аккаунта
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        className="ml-6 px-6 py-3 bg-primary-900 hover:bg-indigo-900 rounded-lg text-white font-medium 
                        transition-all duration-300 flex items-center gap-2 max-md:px-3 max-md:py-2 max-md:text-xs max-md:ml-0"
                    >
                        <EditIcon className="stroke-gray-400" />
                        Сменить пароль
                    </Button>
                </div>
            </div>
        </div>
    )
}


{/* <div className="flex-1">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <Label className="text-white/70 text-sm font-medium mb-2">Имя пользователя</Label>
                                <div className="flex gap-4 items-center max-sm:gap-2">
                                    <Input
                                        className="flex-1 max-w-[550px] h-[40px] border-1 border-primary-900/30 hover:border-primary-900
                                            hover:bg-primary-300/30 p-3 text-start rounded-lg text-white 
                                            outline-none transition-all duration-300 max-sm:text-sm"
                                        type="text"
                                        disabled
                                        value={user?.username || ""}
                                    />
                                    <DialogModal 
                                        title="Изменить имя пользователя"
                                        description="Введите новое имя"
                                        trigger={
                                            <Button
                                                variant="ghost"
                                                className="cursor-pointer flex items-center justify-center p-[10px] bg-primary-900 rounded-lg
                                            hover:bg-indigo-900 transition-all duration-300 max-sm:p-[4px]"
                                            >
                                                <EditIcon className="stroke-gray-400" />
                                            </Button>
                                        }
                                        children={
                                            <UsernameForm
                                                form={usernameForm}
                                                onSubmit={onChangeUsername}
                                            />
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Label className="text-white/70 text-sm font-medium mb-2">E-mail</Label>
                                <div className="flex gap-4 items-center max-sm:gap-2">
                                    <Input
                                        className="flex-1 max-w-[550px] h-[40px] border-1 border-primary-900/30 hover:border-primary-900
                                            hover:bg-primary-300/30 p-3 text-start rounded-lg text-white 
                                            outline-none transition-all duration-300 max-sm:text-sm"
                                        type="email"
                                        disabled
                                        value={user?.email || ""}
                                    />
                                    <DialogModal 
                                        title="Изменить имя пользователя"
                                        description="Введите новое имя"
                                        trigger={
                                            <Button
                                                variant="ghost"
                                                className="cursor-pointer flex items-center justify-center p-[10px] bg-primary-900 rounded-lg
                                            hover:bg-indigo-900 transition-all duration-300 max-sm:p-[4px]"
                                            >
                                                <EditIcon className="stroke-gray-400" />
                                            </Button>
                                        }
                                        children={
                                            <EmailForm
                                                form={emailForm}
                                                onSubmit={onChangeEmail}
                                            />
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}