import CalendarComp from "@/app/components/Calendar";
import Example from "@/app/components/Calendar";
import Seo from "@/app/components/common/Seo";
import DefaultHeader from "@/app/components/header/DefaultHeader";
import CopyrightFooter from "@/app/components/common/CopyrightFooter";

const Calendar = () => {
  return (
    <>
      <Seo pageTitle="Calendar" />
      <DefaultHeader />;
      <Example />
      <CopyrightFooter />
    </>
  );
};

export default Calendar;
