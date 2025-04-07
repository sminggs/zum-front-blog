'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './write.module.scss';

export default function WritePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('제목:', title);
    console.log('내용:', content);

    // 저장 후 임시로 예시 상세 페이지로 이동
    router.push('/post/1');
  };

  return (
    <div className={styles.writePage}>
      <h1 className={styles.heading}>✍️ 글 작성</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          작성 완료
        </button>
      </form>
    </div>
  );
}
