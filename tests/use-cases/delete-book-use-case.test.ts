import { BookRepository } from "../../src/application/repositories/book-repository";
import { DeleteBookUseCase } from "../../src/application/use-cases/delete-book-use-case"; 

describe("DeleteBookUseCase", () => {
    let deleteBookUseCase: DeleteBookUseCase;
    let bookRepositoryMock: BookRepository = {
        delete: jest.fn()
    } as any;

    jest
        .spyOn(bookRepositoryMock, "delete")
        .mockImplementation(id => Promise.resolve())

    beforeEach(() => {
        deleteBookUseCase = new DeleteBookUseCase(bookRepositoryMock);
    })

    it("DeleteBookUseCase calls bookRepository delete function", () => {

    })
})