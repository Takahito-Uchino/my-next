import Link from "next/link"
import { BookType, BookDetails } from "./bookDetails"

export default function LinkedBookDetails({ index, book }: BookType) {
  return (
    <Link href={`/edit/${book.id}`}>
      <div className="hover:bg-green-50">
        <BookDetails index={index} book={book} />
      </div>
    </Link>
  )
}