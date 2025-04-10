'use client';

import Link from 'next/link';
import styles from './page.module.scss';

export default function BlogHomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>내 블로그</h1>

      <p className={styles.description}>블로그입니다.</p>

      <div className={styles.links}>
        <Link href="/write" className={styles.link}>
          ✍️ 글 작성하러 가기
        </Link>

        <Link href="/post/1" className={styles.link}>
          📄 예시 글 보기
        </Link>
      </div>
    </div>
  );
}
