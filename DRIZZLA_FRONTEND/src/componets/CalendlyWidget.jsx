import { useEffect } from "react";

const CalendlyWidget = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className=" w-full h-full"
      data-url="https://calendly.com/sunath-kolazhi-drizzla?hide_landing_page_details=1&hide_gdpr_banner=1"
    ></div>
  );
};

export default CalendlyWidget;
