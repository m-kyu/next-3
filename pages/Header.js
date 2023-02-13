import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
          <Link href="/">home</Link>
          <Link href="/List" >list</Link>
          <Link href="/Write" >write</Link>
        </nav>
      </header>
  )
}

export default Header