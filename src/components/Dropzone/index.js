import { UploadIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import upload from 'assets/img/upload.svg'
import "./style.css";
import logo from "../../assets/img/BleuFi_Logo.png";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  height: 100,
  width: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  width: "100%",
};

const img = {
  display: "block",
  width: "100%",
  height: "100%",
};

const acceptedList = {
  Audio: "audio/*",
  All: "image/*, video/*",
};

export default function NFTDropzone(props) {
  const [previewFile, setpreviewFile] = useState();
  const { getRootProps, getInputProps } = useDropzone({
    accept:
      props.nftType === "Audio"
        ? acceptedList["Audio"]
        : props.nftType === "image"
        ? "image/*"
        : props.nftType === "Video"
        ? "video/*"
        : acceptedList["All"],
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      props.onChange(file);
      if (file.type.startsWith("audio")) {
        file.preview = "assets/icon/audio.png";
        setpreviewFile(file);
      } else if (file.type.startsWith("video")) {
        file.preview = "assets/icon/video.png";
        setpreviewFile(file);
      } else if (file.type.startsWith("image")) {
        file.preview = URL.createObjectURL(file);
        setpreviewFile(file);
      } else {
        file.preview = "assets/icon/file.png";
        setpreviewFile(file);
      }
    },
  });

  return (
    <>
      <section className="container flex p-2" style={{height: 281}}>
        <div
          {...getRootProps({ className: "dropzone" })}
          className="flex flex-wrap items-center justify-center focus:outline-none mx-auto"
          style={{border: '2px dashed #999999', borderRadius: '10px', width: '100%'}}
        >
          <input {...getInputProps()} />
          <div class="d-inline">
            <div><img src={upload} className="createUploadLogo" alt=""/></div>
            <div className="text-set" >Choose File or Drag and Drop</div>
          </div>

          {/* <div>
            {props.nftType === "Audio"
              ? "(audio)"
              : props.nftType === "Collection"
              ? "( collection image )"
              : props.nftType === "image-audio"
              ? "( image,gif )"
              : props.nftType === "Video"
              ? "(Video)"
              : props.nftType === "all"
              ? "( all files )"
              : "( image, gif )"}
          </div> */}
        </div>
        <aside style={thumbsContainer} className="space-x-5">
          {previewFile && (
            <div style={thumb}>
              <div style={thumbInner}>
                <img src={previewFile.preview} alt="preview" style={img} />
              </div>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
