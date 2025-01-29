import {useSearchParams} from "react-router-dom";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    setCountryISOCode,
    setLanguageIsoCode,
    setSubDivisionCode,
    setValidFrom,
    setvalidTo
} from "./holidayFormSlice.js";
export default function HolidayForm() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const dispatch = useDispatch();

    const updateSearchParams = useCallback((key, value) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(key, value);
        setSearchParams(newParams);
    }, [searchParams, setSearchParams]);

        const countryCode = searchParams.get("countryCode");
        const langCode = searchParams.get("languageCode");
        const subDivisionCode = searchParams.get("subdivisionCode");

        const handleSubmit = (e) => {
            e.preventDefault();
            const validFrom = startDate.toISOString().split("T")[0];
            const validTo = endDate.toISOString().split("T")[0];
            const countryCode = searchParams.get("countryCode");
            const langCode = searchParams.get("languageCode") || "";
            const subDivisionCode = searchParams.get("subdivisionCode") || "";

            dispatch(setCountryISOCode(countryCode));
            dispatch(setValidFrom(validFrom));
            dispatch(setvalidTo(validTo));
            dispatch(setLanguageIsoCode(langCode));
            dispatch(setSubDivisionCode(subDivisionCode));

        }

    const handleStartDateChange = (date) => {
        setStartDate(date);
        updateSearchParams("validFrom", date.toISOString().split("T")[0]);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        updateSearchParams("validTo", date.toISOString().split("T")[0]);
    }

    const start = searchParams.get("validFrom") || "";
    const end = searchParams.get("validTo") || "";

    return(
      <div>
          <form onSubmit={handleSubmit}
                style={{
                    marginTop: "40px",
                    fontFamily: "Roboto",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    gap: "1rem",
                    width: "50%",
                    padding: "1rem",
                    position: "-webkit-sticky",
                    top: "20px",
                    borderRadius: "16px",
                    border: "2px solid #000"
                }}
          >
              <label> Counry ISO Code: Eg: DE</label>
              <input
                  type="text"
                  name=""
                  value={countryCode}
                  placeholder="Country ISO Code"
                  required
                  onChange={(e) => updateSearchParams("countryCode", e.target.value)}
              />
              <label> Start Date: (yyyy-MM-dd)</label>
              <DatePicker
                  selected={start}
                  onChange={handleStartDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a start date"
                  required
              />
              <label> End Date: (yyyy-MM-dd)</label>
              <DatePicker
                  selected={end}
                  onChange={handleEndDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a end date"
                  required
              />
              <label>Language ISO Code (optional) Eg: DE</label>
              <input
                  type="text"
                  name=""
                  value={langCode}
                  placeholder="Language ISO Code"
                  onChange={(e) => updateSearchParams("languageCode", e.target.value)}
              />
              <label>Subdivision Code (optional) Eg: DE-BE</label>
              <input
                  value={subDivisionCode}
                  type="text"
                  name="DE-BE"
                  placeholder="subdivision Code"
                  onChange={(e) => updateSearchParams("subdivisionCode", e.target.value)}
              />
          <button type="submit">
              Show Holidays</button>
          </form>


      </div>
    );


}


