import { Input, Space } from "antd";
import React, { useRef, useState } from "react";
import "./input.scss";

const validateNumber = (evt, regex) => {
	var theEvent = evt || window.event;
	var code = theEvent.keyCode || theEvent.which;
	var key = String.fromCharCode(code);
	// 37 = left arrow, 38 = top arrow, 39 = right arrow, 40 = bottom arrow.
	if (
		!regex.test(key) &&
		code !== 190 &&
		code !== 37 &&
		code !== 38 &&
		code !== 39 &&
		code !== 40
	) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
	// Only one dot (.) every number
	if (evt.target.value.includes(".") && code === 190) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
};

const { TextArea } = Input;

const FormInputSingle = (props) => {
	const inputRef = useRef(null);
	let input = null;
	switch (props.type) {
		case "search":
			input = (
				<Input
					autoFocus
					disabled={props.disabled}
					className={props.className}
					placeholder={props.placeholder}
					value={props.value}
					suffix={props.suffix ? props.suffix : null}
					onChange={props.handleChange}
					onKeyPress={props.handleKeyPress}
					allowClear={props.allowClear}
					ref={props.inputRef}
				/>
			);
			break;
		case "number":
			input = (
				<Input
					disabled={props.disabled}
					className={props.className}
					placeholder={props.placeholder}
					defaultValue={props.value}
					suffix={props.suffix ? props.suffix : null}
					onKeyDown={(e) => {
						validateNumber(e, /[0-9\b]|\./);
					}}
					onChange={props.handleChange}
					ref={props.inputRef}
				/>
			);
			break;
		case "textarea":
			input = (
				<TextArea
					disabled={props.disabled}
					className={props.className}
					placeholder={props.placeholder}
					defaultValue={props.value}
					rows={props.rows}
					onChange={props.handleChange}
					ref={props.inputRef}
					maxLength={props.maxLength}
					showCount={props.showCount}
				/>
			);
			break;
		case "chat":
			input = (
				<Input
				disabled={props.disabled}
				className={props.className}
				placeholder={props.placeholder}
				value={props.value}
				suffix={props.suffix ? props.suffix : null}
				onChange={props.handleChange}
				onKeyPress={props.handleKeyPress}
				allowClear={props.allowClear}
				ref={props.inputRef}
				/>
			);
			break;
		case "text":
		default:
			input = (
				<Input
					disabled={props.disabled}
					className={props.className}
					placeholder={props.placeholder}
					defaultValue={props.value}
					suffix={props.suffix ? props.suffix : null}
					onChange={props.handleChange}
					onKeyPress={props.handleKeyPress}
					allowClear={props.allowClear}
					ref={props.inputRef}
				/>
			);
			break;
	}

	return input;
};

export default FormInputSingle;
