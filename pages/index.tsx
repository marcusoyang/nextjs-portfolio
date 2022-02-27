import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
            pathname: '/[username]',
            query: { username: 'marcuso123' },
          }}>
        <a>Marcus&apos;s profile</a>
      </Link>
    </div>
  )
}
