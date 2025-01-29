import {useSelector} from "react-redux";

export default function HolidayItem({holiday}) {
    const {startDate, name } = holiday;

    const arr = Object.entries(holiday);
    const language = useSelector((state) => state.holidayForm.languageIsoCode);
    const countryISOCode = useSelector((state) => state.holidayForm.countryISOCode);
    console.log({countryISOCode});

    return (
        <div className="holiday-item">
            <p>Date: {startDate}</p>
            {name.map((n) => (
                <>
                    <p>Language: {n.language}</p>
                    <p key={n.text}>{n.text}</p>
                </>
            )

             )}
        </div>
    );
}