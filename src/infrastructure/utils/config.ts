import { Repository } from "../database/mongo-db/book-repository";
import { CreateBookUseCase } from "../../application/use-cases/create-book-use-case";
import { BookController } from "../../interface/book-controller";
import { ListAllBooksUseCase } from "../../application/use-cases/list-all-books-use-case";
import { DeleteBookUseCase } from "../../application/use-cases/delete-book-use-case";
import { UpdateBookUseCase } from "../../application/use-cases/update-book-use-case";
import { UserController } from "../../interface/user-controller";
import { MongoUserRepository } from "../database/mongo-db/user-repository";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user-use-case";
import { FindUserUseCase } from "../../application/use-cases/user/find-user-use-case";

export function configureDependencies() {
  //seu codigo aqui
  const bookRepository = new Repository();
  const createBookUseCase = new CreateBookUseCase(bookRepository);
  const listAllBooksUseCase = new ListAllBooksUseCase(bookRepository);
  const updateBookUseCase = new UpdateBookUseCase(bookRepository);
  const deleteBooksUseCase = new DeleteBookUseCase(bookRepository);

  const bookController = new BookController(
    createBookUseCase,
    listAllBooksUseCase,
    updateBookUseCase,
    deleteBooksUseCase
  );

  const userRepository = new MongoUserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const findUserUseCase = new FindUserUseCase(userRepository);
  const userController = new UserController(createUserUseCase, findUserUseCase);

  return {
    bookController,
    userController,
  };
}
