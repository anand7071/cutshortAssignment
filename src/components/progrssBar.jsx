import React from "react";
import "./progresbar.css"

const ProgressBar = (props) => {
    const { bgcolor, completed, numberofQuestion } = props;
    const arr = Array(numberofQuestion).fill(1);

    const containerStyles = {
        height: 5,
        width: '90%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin:"auto"
    }
    const fillerStyles = {
        height: '90%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
    }
    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}></span>
            </div>
            <div className="progressbar" >
                {arr.map((item, index) => {
                    return (
                        <div className="circle">
                            <div className="number">{index + 1}</div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default ProgressBar;