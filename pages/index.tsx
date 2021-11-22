import Link from "next/link"

function Home() {
  return (
  <div>
  <h1>About Me</h1>
  <p>Check out my <Link href="/projects"><a>projects</a></Link></p>
  <p>or <Link href="/contact"><a>contact me here</a></Link></p>
  </div>
  )
}

export default Home
