import { useAppDispatch, useAppSelector, useNotification } from "@/shared/hooks";
import { useState, useEffect } from "react";
import { fetchAllBrands, fetchAllTypes } from "@/entities";
import { deviceInitialState } from "./deviceInitialState";
import { formDataUtils } from "./formDataUtils";
import { filtersDropdownItems } from "@/shared/model/filtersDropdownItems";
import { createDevice } from "@/shared/api/deviceApi";

export const useDeviceForm = () => {
    const dispatch = useAppDispatch();
    const { brands } = useAppSelector((state) => state.brandReducer);
    const { types } = useAppSelector((state) => state.typeReducer);
    const [device, setDevice] = useState(deviceInitialState);
    const { notifySuccess, notifyWarn, notifyError } = useNotification();

    useEffect(() => {
        dispatch(fetchAllBrands());
        dispatch(fetchAllTypes());
    }, []);

    const handleBrandSelect = (id: string, name: string) => {
        setDevice((prev) => ({ ...prev, brandId: id, brandName: name }));
    };

    const handleTypeSelect = (id: string, name: string) => {
        setDevice((prev) => ({ ...prev, typeId: id, typeName: name }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setDevice((prev) => ({ ...prev, img: selectedFile }));
        }
    };
        
    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!device.img) return notifyWarn('Выберите фотографию');

        try {
            const formData = formDataUtils(device);
            await createDevice(formData);
            notifySuccess("Отлично! Устройство создано!");
            setDevice(deviceInitialState);
        } catch (error) {
            console.error(error);
            notifyError(
                "Ошибка при добавлении устройства. Попробуй еще раз :)"
            );
        }
    };

    const handleChange = (field: 'name' | 'price', value: string) => {
        setDevice((prev) => ({...prev, [field]: value}))
    }

    const brandItems = filtersDropdownItems({
        list: brands,
        onSelect: handleBrandSelect,
    });

    const typeItems = filtersDropdownItems({
        list: types,
        onSelect: handleTypeSelect,
    });

    return {
        device, 
        setDevice, 
        brandItems, 
        typeItems,
        handleChange,
        handleFileChange, 
        handleSubmitForm
    }
}