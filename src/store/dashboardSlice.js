import { createSlice } from "@reduxjs/toolkit";
import dashboardData from "../data/dashboardData.json";
const initialState = {
    cspmData: [dashboardData.dashboard.categories[0].category1],
    cwppData: [dashboardData.dashboard.categories[1].category2],
    registryScanData: [dashboardData.dashboard.categories[2].category3],
    allWidgets: [dashboardData.dashboard.categories]
};


export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        addCSPMWidget: (state, action) => {
            state.cspmData[0].charts.push(action.payload);
        },
        updatedCSPMChart: (state, action) => {
            const charts = state.cspmData[0].charts;
            const chartIndex = charts.findIndex(
                (item) => item.title === action.payload.title
            );
            if (chartIndex !== -1) {
                charts[chartIndex].isChecked = action.payload.isChecked;
            }
        },
        addCWPPWidget: (state, action) => {
            state.cwppData[0].charts.push(action.payload);
        },
        addRegistry: (state, action) => {
            state.registryScanData[0].charts.push(action.payload);
        },
        // deleteCSPMChart: (state, action) => {
        //     const charts = state.cspmData[0].charts;
        //     state.cspmData[0].charts = charts.filter(
        //         (item) => item.title !== action.payload.title
        //     );
        // }

    }
});

export const { addCSPMWidget, updatedCSPMChart, addCWPPWidget, addRegistry } = dashboardSlice.actions;
export default dashboardSlice.reducer;