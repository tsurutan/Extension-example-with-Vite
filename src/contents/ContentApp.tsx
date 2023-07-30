import React from "react";
import Button from "./Button.tsx";
import reactLogo from './../assets/react.svg'

const ContentApp: React.FC = () => {
    return (<div>
        <Button><img src={chrome.runtime.getURL(reactLogo)} />Hello World!!</Button>
    </div>)
}

export default ContentApp;
