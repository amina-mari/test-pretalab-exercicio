import { CreateBookUseCase } from "../../src/application/use-cases/create-book-use-case";
import { BookRepository } from "../../src/application/repositories/book-repository";

// Mocks
const bookRepositoryMock = {
  save: jest.fn(),
};

// Teste unitário
describe("CreateBookUseCase", () => {
  let createBookUseCase: CreateBookUseCase;

  beforeEach(() => {
    createBookUseCase = new CreateBookUseCase(
      bookRepositoryMock as unknown as BookRepository
    );
  });

  it("should create a book and save it", async () => {
    const bookParams = {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      isbn: "978-0201616224",
      publisher: "Addison-Wesley",
      category: "Programming",
      status: "read",
    } as any;

    const result = await createBookUseCase.execute(bookParams);

    expect(bookRepositoryMock.save).toHaveBeenCalledWith({
      ...bookParams,
    });
    expect(result).toMatchObject({
      ...bookParams,
    });
  });
});
