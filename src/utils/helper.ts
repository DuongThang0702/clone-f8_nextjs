import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

export const formatSizeUnits = (bytes: any): string => {
  if (bytes >= 1073741824) {
    bytes = (bytes / 1073741824).toFixed(2) + " GB";
  } else if (bytes >= 1048576) {
    bytes = (bytes / 1048576).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    bytes = (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes > 1) {
    bytes = bytes + " bytes";
  } else if (bytes == 1) {
    bytes = bytes + " byte";
  } else {
    bytes = "0 bytes";
  }
  return bytes;
};

export const handlePreview = async (
  file: File,
  setPreview: Dispatch<SetStateAction<string | null>>
) => {
  if (file) {
    if (file.type === "image/jpeg" || file.type === "image/png") {
      const reader = new FileReader();
      const blob = new Blob([file]);
      reader.readAsDataURL(blob);
      reader.onload = () => {
        const previewImageString = reader?.result?.toString();
        setPreview(previewImageString || null);
      };
    } else return toast.error("file not suppport");
  }
};
