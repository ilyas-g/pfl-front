import React from "react";
// https://dev.to/reedbarger/how-to-create-a-custom-usedevicedetect-react-hook-56l1
export default function useDeviceDetect() {
    const [isMobile, setMobile] = React.useState(false);

    React.useEffect(() => {
        const userAgent =
            typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobile = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        );
        setMobile(mobile);
    }, []);

    return { isMobile };
}
