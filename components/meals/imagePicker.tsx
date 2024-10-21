"use client";

import { useRef } from "react";
import classes from "./imagePicker.module.css";

interface ImagePicker {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: ImagePicker) {
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    imageInputRef.current?.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
        />
        <button onClick={handleClick} className={classes.button} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}
