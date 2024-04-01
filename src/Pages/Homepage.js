import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl">
          Harsh Dhoke's Blog
        </h1>
        <button>
          <Link
            to="/blog"
            className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold inline-block mt-4"
          >
            Read my Blog Posts
          </Link>
        </button>
      </section>
    </div>
  )
}