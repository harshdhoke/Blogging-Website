import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import client from "../client"

export default function Author() {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "author"] {
        name,
        slug,
        bio,
        image {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setAuthors(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-8xl">
          Authors Page
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <article key={author.slug.current} className="author-article">
              <img className="authorImage" src={author.image.asset.url} alt={author.name} />
              <h4 className="text-xl mt-2 text-center">{author.name}</h4>
              <button className="mt-5 mb-10">
                <Link
                  to={`/author/${author.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                >
                  View Author
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
