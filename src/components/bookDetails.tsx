import Image from "next/image";

export type BookType = {
  index: number,
  book: {
    id: string,
    title: string,
    author: string,
    price: number,
    publisher: string,
    published: string,
    image: string,
  },
}

export function BookDetails({ index, book }: BookType) {
  return (
    <div className="flex w-full mb-4">
      <div>
        <Image src={book.image} alt="" width={140} height={180} />
      </div>
      <div>
        <ul className="list-none text-black ml-4">
          <li>{index && index + "."}</li>
          <li>{book.title} ({book.price}円) </li>
          <li>{book.author}</li>
          <li>{book.publisher}刊</li>
          <li>{book.published} 発売</li>
        </ul>
      </div>
    </div>
  )
} 