export interface AddToBasketSchema {
    id: string,
    notifySuccess: (text: string) => void,
    notifyWarn: (text: string) => void,
    notifyError: (text: string) => void,
}