import { useEffect, useState } from "react";

const CalendlyWidget = ({ show }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!show || isScriptLoaded) return;

    const scriptId = "calendly-widget-script";
    if (document.getElementById(scriptId)) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    // No cleanup needed for the script tag specifically as we want it to stay once loaded
    // to avoid reloading it if user switches tabs back and forth.
  }, [show, isScriptLoaded]);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/sunath-kolazhi-drizzla/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
};

export default CalendlyWidget;
