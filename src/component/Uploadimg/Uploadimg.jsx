import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

const Uploadimg = () => {
  const [uploadimg, setuploadimg] = useState([]);
  const handleOnChange = (e) => {
    const fileImg = e.target.files[0];
    if (!fileImg) return;
    const storages = storage;
    const imgrefs = ref(storages, `img/${fileImg}`);
    uploadBytes(imgrefs, fileImg).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setuploadimg([...uploadimg, url]);
      });
    });
  };
  return (
    <div>
      <input type="file" onChange={handleOnChange} multiple />
      {uploadimg && uploadimg.map((img) => <img src={img} />)}
    </div>
  );
};

export default Uploadimg;
