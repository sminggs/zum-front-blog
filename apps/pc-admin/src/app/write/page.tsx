// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./write.module.scss";
// import "quill/dist/quill.snow.css";

// // 클라이언트 환경에서만 로드
// const Quill = typeof window === "object" ? require("quill") : () => false;
// const ImageResize = typeof window === "object" ? require("quill-image-resize").default : () => {};

// if (typeof window === "object" && Quill && ImageResize) {
//   Quill.register("modules/imageResize", ImageResize);

//   const Font = Quill.import("formats/font");
//   Font.whitelist = ["Pretendard", "Gyeonggi", "NewFont"];
//   Quill.register(Font, true); // 💥 이걸 꼭 에디터 생성 전에!
// }


// export default function WritePage() {
//   const router = useRouter();
//   const editorRef = useRef<HTMLDivElement>(null);
//   const quillRef = useRef<any>(null);

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const toolbarOptions = [
//     [{ header: [1, 2, 3, false] }],
//     [{ font: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
//     ["link", "image", "video", "clean", "code-block", "formula"],
//     [{ align: [] }, { color: [] }, { background: [] }],
//   ];

//   useEffect(() => {
//     if (editorRef.current && typeof window === "object" && !quillRef.current) {
//       quillRef.current = new Quill(editorRef.current, {
//         theme: "snow",
//         placeholder: "내용을 입력하세요",
//         modules: {
//           toolbar: toolbarOptions,
//           imageResize: {
//             parchment: Quill.import("parchment"),
//           },
//         },
//       });

//       quillRef.current.on("text-change", () => {
//         const html = editorRef.current?.querySelector(".ql-editor")?.innerHTML;
//         setContent(html || "");
//       });
//     }
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     console.log("제목:", title);
//     console.log("내용:", content);

//     await fetch("/api/post/new", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title, content }),
//     });

//     // router.push("/post/1");
//   };

//   return (
//     <div className={styles["write-page"]}>
//       <form onSubmit={handleSubmit} className={styles["write-page__form"]}>
//         <div className={styles["write-page__left"]}>
//           <input
//             type="text"
//             placeholder="제목을 입력하세요"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className={styles["write-page__input"]}
//           />

//           <div className={styles["write-page__editor-wrapper"]}>
//             <div className={styles["write-page__editor"]} ref={editorRef}></div>
//           </div>

//           <button type="submit" className={styles["write-page__button"]}>
//             작성 완료
//           </button>
//         </div>
//         <div className={styles["write-page__right"]}>
//           <div className={styles["write-page__view-wrapper"]}>
//             <div className={styles["write-page__preview"]}>
//               <h2 className={styles["write-page__preview-title"]}>미리보기</h2>
//               <div
//                 className={`ql-editor ${styles["write-page__preview-content"]}`}
//                 dangerouslySetInnerHTML={{ __html: content }}
//               />
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
