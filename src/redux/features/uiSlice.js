const { createSlice } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
  name: "ui",
  initialState: { historical: false },
  reducers: {
    toggleHistorical: (ui) => ({ ...ui, historical: !ui.historical }),
  },
});

export const { toggleHistorical: toggleHistoricalActionCreator } =
  uiSlice.actions;

export default uiSlice.reducer;
