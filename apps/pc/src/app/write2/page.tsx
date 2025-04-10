"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styles from "./write.module.scss";
import NextLink from '@repo/ui/src/NextLink';
import type { Content } from '@repo/services/com/awszum/hub/internal-api/zum-provision/contents/contents.schema';
import NextImage from '@repo/ui/src/NextImage';


export default function WritePage() {
  const router = useRouter();
  const editorRef = useRef<Editor>(null);

  const [title, setTitle] = useState("");
  const [editorMode, setEditorMode] = useState<"markdown" | "wysiwyg">("markdown");

  const handleModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mode = e.target.value as "markdown" | "wysiwyg";
    setEditorMode(mode);
    editorRef.current?.getInstance().changeMode(mode, true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const editorInstance = editorRef.current?.getInstance();
    const content = editorInstance?.getMarkdown(); // or getHTML() if needed

    console.log("제목:", title);
    console.log("내용:", content);

    await fetch("/api/post/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    // router.push("/post/1");
  };

  return (
    <div className={styles["write-page"]}>
      <form onSubmit={handleSubmit} className={styles["write-page__form"]}>
        <div className={styles["write-page__left"]}>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles["write-page__input"]}
          />

          {/* ✅ 마크다운 / WYSIWYG 라디오 버튼 */}
          <div className={styles["write-page__mode-toggle"]}>
            <label>
              <input
                type="radio"
                name="mode"
                value="markdown"
                checked={editorMode === "markdown"}
                onChange={handleModeChange}
              />
              Markdown
            </label>
            <label>
              <input
                type="radio"
                name="mode"
                value="wysiwyg"
                checked={editorMode === "wysiwyg"}
                onChange={handleModeChange}
              />
              WYSIWYG
            </label>
          </div>

          {/* ✅ 에디터 */}
          <Editor
            ref={editorRef}
            initialValue=""
            previewStyle="vertical"
            height="400px"
            initialEditType={editorMode}
            useCommandShortcut={true}
          />

          <button type="submit" className={styles["write-page__button"]}>
            작성 완료
          </button>
        </div>
      </form>
    </div>
  );
}
