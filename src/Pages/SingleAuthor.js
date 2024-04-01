import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"

export default function SingleAuthor() {
  const [author, setAuthor] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        name,
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
      .then((data) => setAuthor(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>
      {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-8xl text-center mt-5">
            {author.name}'s Profile
          </h1>
          {author.image && author.image.asset && (
            <img
              src={author.image.asset.url}
              alt={author.name}
              title={author.name}
              className="authorImage rounded-t"
            />
          )}

          <div className="block__content text-center">
            <BlockContent
              blocks={author.bio}
              projectId="2hp9gld0"
              dataset="production"
            />
          </div>
          
          <div className="text-center">
          <button>
            <Link
              to="/author"
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold inline-block mt-4"
            >
              View more authors
            </Link>
          </button>
          </div>
        </section>
      )}
    </>
  )
}
