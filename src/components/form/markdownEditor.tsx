import React, { Dispatch, FC, SetStateAction, memo } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface MarkDownEditor {
  defaultValue?: string;
  setDescription: Dispatch<SetStateAction<string | null | any>>;
}

const MarkDownEditor: FC<MarkDownEditor> = ({
  defaultValue,
  setDescription,
}) => {
  return (
    <>
      <Editor
        onChange={(e) => setDescription(e.target.getContent())}
        apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
        initialValue={defaultValue ? defaultValue : "<p></p>"}
        init={{
          height: 500,
          menubar: true,
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
};

export default memo(MarkDownEditor);
