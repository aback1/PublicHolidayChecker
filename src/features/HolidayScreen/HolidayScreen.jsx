import {useSelector} from "react-redux";
import {useFetchHolidaysQuery} from "./holidayApi.js";
import HolidayItem from "./HolidayItem";

export default function HolidayScreen() {

    const countryISO = useSelector(state => state?.holidayForm?.countryISOCode);
    const validFrom = useSelector(state => state?.holidayForm?.validFrom);
    const validTo = useSelector(state => state?.holidayForm?.validTo);
    const langISOCode = useSelector(state => state.holidayForm?.languageIsoCode || "");
    const subDivisionCode = useSelector(state => state.holidayForm?.subDivisionCode);


    //skip the fetching of data until all required fields are not equal to undefined or null
    const shouldSkip = !countryISO || !validFrom || !validTo;


    const {data: holidays, error, isLoading} = useFetchHolidaysQuery({
        countryIsoCode: countryISO,
        validFrom,
        validTo,
        languageIsoCode: langISOCode,
        subdivisionCode: subDivisionCode,
    },
        {
            skip: shouldSkip
        }
        );



    if(shouldSkip) {
        return <p>Please fill in all required fields to fetch holidays.</p>
    }
    if(isLoading) {
        return <p>...Loading</p>
    }

    if(error || !holidays){
        return <p>{error.message}</p>
    }

    if(holidays.length === 0) {
        return <p>No holidays found.</p>
    }

    return (
        <div>
            { holidays?.map((holiday) => (
                <HolidayItem key={holiday.id} holiday={holiday} language={langISOCode} />
            ))}
        </div>
    );
}