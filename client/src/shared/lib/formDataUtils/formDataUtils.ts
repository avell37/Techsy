export function formDataUtils(obj: Record<string, string | Blob | null>): FormData {
    const formData = new FormData();
    Object.keys(obj).forEach(key => {
        if (obj[key] !== null) {
            formData.append(key, obj[key])
        }
    });
    return formData;
}
