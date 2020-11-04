import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import { Container } from "./styles";

interface Props {
  title: string;
  width: string;
  height: string;
  containerStyle?: object;
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({
  onFileUploaded,
  width,
  height,
  title,
  containerStyle = {},
}) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <Container
      width={width}
      height={height}
      {...getRootProps()}
      style={containerStyle}
    >
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="thumb Product" />
      ) : (
        <p>
          <FiUpload />
          {title}
        </p>
      )}
    </Container>
  );
};

export default Dropzone;
