import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProgressBar from "./progrssBar";
import logoimg from "../assets/img/logo.png"
import multiPerson from "../assets/img/MultiPerson.png"
import OnePerson from "../assets/img/onePerson.png"
import allSavae from "../assets/img/allSave.png"

import './template.css'

const FormInput = (props) => {
    const { label, placeholder, setfinalvalue, name, finalValue, setFullname } = props;
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    };
    useEffect(() => {
        let obj = {}
        if (value.length > 0) {
            obj[name] = value
            setfinalvalue(obj)
        }
        if (name === "full_name") {
            setFullname(value)
        }
    }, [value])

    return (
        <div className="FormInput">
            <label className="label">{label}</label>
            <br />
            <input
                className="input"
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{ width: "96%" }}
            />
        </div>
    )
}
const Button = (props) => {
    const { fontSize = "18px", color = "white", text = "Create WorkSpace" } = props || {}
    return (
        <button className="button" style={{ color: color, fontSize: fontSize }} >{text}</button>
    )
}
const OptionSelect = (props) => {
    const { optioName, discription, logo, border } = props;
    return (
        <>
            <div className="select-container" style={border}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="user-selector">
                    {optioName}
                </div>
                <div className="disciption">
                    {discription}
                </div>
            </div>
        </>
    )
}
const OptionPage = () => {
    const discription1 = "Write Better Think More Clearly Stay Orgnised";
    const discription2 = "wikis, docs,tasks and projects are all in one Place";
    const border = { border: "2px solid #9BA0AB" }
    return (
        <div className="flex select-op">
            <OptionSelect optioName={"For MySelf"} discription={discription1} logo={OnePerson} border={border} />
            <OptionSelect optioName={"With My team"} discription={discription2} logo={multiPerson} />
        </div>
    )
}
const FormComponent = (props) => {
    const { setfinalvalue, finalValue, data, full_name, setFullname } = props || {}
    return (
        <>
            {data === 0 && <>
                <div className="mt_10 flex">
                    <FormInput label={"Full Name"} placeholder={"Name"} setfinalvalue={setfinalvalue} name={"full_name"} finalValue={finalValue} setFullname={setFullname} />
                </div>
                <div className="mt_10 flex">
                    <FormInput label={"Display Name"} placeholder={"Display Name"} setfinalvalue={setfinalvalue} name={"display_name"} finalValue={finalValue} />
                </div>
            </>}
            {data === 1 && <>
                <div className="mt_10 flex">
                    <FormInput label={"WorkSpace Name "} placeholder={"work space"} setfinalvalue={setfinalvalue} name={"workspace_name"} finalValue={finalValue} />
                </div>
                <div className="mt_10 flex">
                    <FormInput label={"Workspace URL "} placeholder={"www.cutshorts.com"} setfinalvalue={setfinalvalue} name={"url_name"} finalValue={finalValue} />
                </div>
            </>}
            {data === 2 && <OptionPage />}
            {data === 3 && <FinalPage full_name={full_name} />}
        </>
    )
}
const FinalPage = ({ full_name }) => {
    return (
        <div className="FinalPage">
            <div className="flex" style={{ height: "150px" }}>
                <img src={allSavae} alt="" />
            </div>
            <div className="flex cong" >
                Congratulations, {full_name}!
            </div>
            <div className="flex desc">
                you have completed onbording, you can start using the Cutshort
            </div>
        </div>
    )
}
const Template = () => {
    const [data, setData] = useState(0);
    const [finalValue, setfinalvalue] = useState({});
    const [full_name, setFullname] = useState("");
    const [barData, setbarData] = useState(25);
    const [er,seter]= useState(false)

    const handelOnclick = () => {
        if (Object.keys(finalValue).length >0) {
            seter(false)
            if (barData < 100) {
                setbarData(barData + 25)
            }
            if (data <= 2) (
                setData(data + 1)
            )
        }
        else{
            seter(true)
        }
    }
    useEffect(() => {
        console.log(finalValue)
    }, [finalValue])
    const welcomeNote = "Welcome! First things first..."
    const change = "You can always change them later"
    const plan = "How you are plannig to use the Eden ?"
    const setup = "We'll streamline your setup exprince acordingly ";
    const text = data <= 2 ? "Create workspace" : "Launch Eden"

    return (
        <div className="container">
            <div className="image flex">
                <img src={logoimg} alt="" />
            </div>
            <div>
                <ProgressBar key={0} bgcolor={"#2415c9"} completed={barData} numberofQuestion={4} />
            </div>
            {(data <= 2) && <><div className="hedding flex mt_20">
                {data === 2 ? plan : welcomeNote}
            </div>
                <div className="mt_10 flex subhedding">
                    {data === 2 ? setup : change}
                </div></>}
            <FormComponent data={data} setfinalvalue={setfinalvalue} finalValue={finalValue} full_name={full_name} setFullname={setFullname} />
            <div className="mt_20 flex" onClick={() => handelOnclick()}>
                <Button finalValue={finalValue} text={text} />
            </div>
           {er && <div className="error">
                Please fill all the detail
            </div>}
        </div>
    )
}
export default Template