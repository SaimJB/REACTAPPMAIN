        import React, { useState } from "react";

        export default function TextForm(props) {
        //  Convert upper case
        const handleUpClick = () => {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase", "success");
        };
        //  Convert lower case
        const handleLoClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase", "success");
        };
        const handleOnChange = (event) => {
            setText(event.target.value);
        };
        const handleClearClick = ()=>{
            let newText = ('')
            setText(newText);
            props.showAlert("Text was cleared", "success");
        };
        const handleExtraSpaces = ()=>{
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Spaces Removed", "success");
        };
        const speak = () => {
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);
            props.showAlert("All was said", "success");
        };
        
    const wordCount = (text)=>{
        let regex = /\s+\S+/;
        let numOfWords = text.split(regex);
        return numOfWords.length;
        };

        const [text, setText] = useState(" ");
        return (
            <>
            <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                id="myBox"
                rows="8"
                style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                Clear Text
            </button>
            <button onClick={speak} className="btn btn-primary mx-1">Speak</button>
            <button onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Spaces</button>
            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
                <p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here!"}</p>
            </div>
            </>
        );
        };