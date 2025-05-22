import { useAppDispatch, useAppSelector, useNotification } from "@/shared/hooks";
import { useState, useEffect, useCallback } from "react";
import { fetchAllBrands } from "@/entities/Brand";
import { fetchAllTypes } from "@/entities/Type";
import { deviceInitialState } from "../model/types/deviceInitialState";
import { formDataUtils } from "../../../shared/lib/Form/formDataUtils";
import { filtersDropdownItems } from "@/widgets/ProductFilters";
import { createDevice } from "@/shared/api/deviceApi";
import { DeviceInfoSchema } from "../model/types/DeviceInfoSchema";
import { nanoid } from "nanoid";

export const useDeviceForm = () => {
    const dispatch = useAppDispatch();
    const { brands } = useAppSelector((state) => state.brandReducer);
    const { types } = useAppSelector((state) => state.typeReducer);
    const [device, setDevice] = useState(deviceInitialState);
    const [info, setInfo] = useState<DeviceInfoSchema[]>([]);
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
    
    const handleAddInfo = () => {
        setInfo([...info, {id: nanoid(), title: '', description: ''}])
    }

    const handleChangeInfo = useCallback((id: string, key: string, value: string) => {
        setInfo((prevInfo) =>
            prevInfo.map((i) =>
                i.id === id ? { ...i, [key]: value } : i
            )
        );
    }, []);

    const handleRemoveInfo = (id: string) => {
        setInfo(info.filter(i => i.id !== id))
    }
        
    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!device.img) return notifyWarn('Выберите фотографию');

        try {
            const dataWithInfo = {
                ...device,
                info: JSON.stringify(info),
            }
            const formData = formDataUtils(dataWithInfo);
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
        handleSubmitForm,
        info,
        handleAddInfo,
        handleChangeInfo,
        handleRemoveInfo
    }
}