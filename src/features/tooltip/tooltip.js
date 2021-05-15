import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = (props) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 200);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className={`Tooltip-Wrapper task-element ${props.type}`}
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            { props.children}
            {
                active && (
                    <div className={`Tooltip-Tip ${props.direction || "top"}`}>
                        <div className="Tooltip-head">
                            {props.content.name}
                            <i className="fa fa-pencil-square-o"></i>
                        </div>
                        <div className="text-muted"><i className={`fa fa-square ${props.content.type}`}></i> {props.content.type}</div>
                        <div className="text-muted"><i className="fa fa-clock-o"></i> {props.content.start} - {props.content.stop}</div>
                        <div className="pragraph">Contact details: </div>
                        <div className="text-muted"><i className="fa fa-phone"></i> {props.content.phone}</div>
                        <div className="text-muted"><i className="fa fa-envelope-o"></i> {props.content.email}</div>

                    </div>
                )
            }
        </div >
    );
};

export default Tooltip;
