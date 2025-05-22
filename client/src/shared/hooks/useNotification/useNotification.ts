import { toast } from "react-toastify"

export const useNotification = () => {

    const notifySuccess = (message: string) => {
        toast.success(message, {
            theme: "dark",
            autoClose: 5000,
            closeOnClick: true,
            position: 'top-right',
        })
    }

    const notifyWarn = (message: string) => {
        toast.warn(message, {
            theme: "dark",
            autoClose: 5000,
            closeOnClick: true,
            position: 'top-right',
        })
    }

    const notifyError = (message: string) => {
        toast.error(message, {
            theme: "dark",
            autoClose: 5000,
            closeOnClick: true,
            position: 'top-right',
        })
    }

    return {
        notifySuccess,
        notifyWarn,
        notifyError
    }

}
