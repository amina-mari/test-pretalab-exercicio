import { BookRepository } from "../../src/application/repositories/book-repository";
import { UpdateBookUseCase } from "../../src/application/use-cases/update-book-use-case"; 

describe("UpdateBooksUseCase", () => {
    let updateBooksUseCase: UpdateBookUseCase;
    let bookRepositoryMock: BookRepository = {
        update: jest.fn()
    } as any;

    jest
        .spyOn(bookRepositoryMock, "update")
        .mockImplementation((id, params) => Promise.resolve(null))

    beforeEach(() => {
        updateBooksUseCase = new UpdateBookUseCase(bookRepositoryMock)
    })

    it("the call of updateBooksUseCase calls bookRepository update function too", async () => {
        let updatedBook = await updateBooksUseCase.execute("123456", {title: "New Title"})

        expect(bookRepositoryMock.update).toHaveBeenCalled();
        expect(bookRepositoryMock.update).toHaveBeenCalledWith("123456", {title: "New Title"})
    })
})
