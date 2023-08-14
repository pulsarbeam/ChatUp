import Image from 'next/image'
import Link from 'next/link'
import Logout from './Logout'

function Header() {
  const session = true

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white shadow-sm flex justify-between items-center p-10 ">
        <div className="flex space-x-2">
          <Image
            src={'/'}
            alt="user image"
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
          />
          <div>
            <p className="text-purple-400">Logged in as:</p>
            <p className="text-lg font-bold">Rene Groothuis</p>
          </div>
        </div>

        <Logout />
      </header>
    )

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm flex justify-center items-center p-10 ">
      <div className="flex-col flex items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image src="/" alt="logo" height={10} width={50} />
          <p className="text-purple-400">Welcome to ChatUp</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  )
}
export default Header
