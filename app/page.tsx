import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href='/users'>Click to View Users</Link>
      <ProductCard />
    </main>
  )
}
