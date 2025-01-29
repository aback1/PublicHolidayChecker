import Header from "../Header/Header.jsx";
import HolidayScreen from "../../features/HolidayScreen/HolidayScreen.jsx";
import HolidayForm from "../../features/HolidayForm/HolidayForm.jsx";

export default function MainLayout() {
    return (
        <>
            <div className="main-header">
                <Header />
            </div>
            <div className="main-layout">
                <div className="sub-div form-input" >
                   <HolidayForm />
                </div>
                <div className="sub-div-lastchild">
                   <HolidayScreen />
                </div>
            </div>
        </>
    );
}