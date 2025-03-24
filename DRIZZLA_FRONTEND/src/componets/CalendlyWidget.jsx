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
      className="calendly-inline-widget"
      data-url="https://calendly.com/sunath-kolazhi-drizzla/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
      style={{  width:'100%', height:'100%'}}
    ></div>
  );
};

export default CalendlyWidget;
