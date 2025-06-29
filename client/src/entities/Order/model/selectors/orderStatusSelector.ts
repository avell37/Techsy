import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const orderStatusState = (state: RootState) => state['orderStatusReducer'];

export const orderStatusSelector = {
    status: createSelector(
        [orderStatusState],
        (orderStatusReducer) => orderStatusReducer.status
    ),
    loading: createSelector(
        [orderStatusState],
        (orderStatusReducer) => orderStatusReducer.loading
    ),
}