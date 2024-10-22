"use client";

import { ChangeEvent, useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

interface ImagePicker {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: ImagePicker) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    imageInputRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files != null) {
      const file = files[0];

      if (!file) {
        setPickedImage(null);
        return;
      }

      const fileReader = new FileReader();

      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };

      fileReader.readAsDataURL(file);
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image picked</p>
          ) : (
            <Image
              src={String(pickedImage)}
              alt="Image selected by the user"
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          required
          onChange={handleImageChange}
        />
        <button onClick={handleClick} className={classes.button} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
}
