import { Book } from "../../domain/book";
import { BookRepository } from "../repositories/book-repository";

export class CreateBookUseCase {
  //seu codigo aqui
  constructor(private bookRepository: BookRepository) {}

  async execute(bookParams: Book): Promise<Book> {
    const book = {
      ...bookParams,
    } as Book;

    await this.bookRepository.save(book);
    return book;
  }

  private getDate() {
    return new Date().toLocaleDateString("PT-br");
  }
}
