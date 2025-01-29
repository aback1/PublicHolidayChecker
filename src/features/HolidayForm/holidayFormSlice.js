import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    countryISOCode: null,
    validFrom: null,
    validTo: null,
    languageIsoCode: null,
    subDivisionCode: null,
}

export const holidayFormSlice = createSlice({
    name: "holidayForm",
    initialState,
    reducers: {
        setCountryISOCode: (state, action) => {
            state.countryISOCode = action.payload;
        },
        setValidFrom: (state, action) => {
            state.validFrom = action.payload;
        },
        setvalidTo: (state, action) => {
            state.validTo = action.payload;
        },
        setLanguageIsoCode: (state, action) => {
            state.languageIsoCode = action.payload;
        },
        setSubDivisionCode: (state, action) => {
            state.subDivisionCode = action.payload;
        }
    }
});

export const {setCountryISOCode, setValidFrom, setvalidTo, setLanguageIsoCode, setSubDivisionCode} = holidayFormSlice.actions;

export default holidayFormSlice.reducer;