import {
  OldFashionedPrinter,
  Photocopier,
  MultiFunctionPrinter,
} from "../../Solid/4.Isp/main";
describe("Printer, Scanner, Fax functionality", () => {
  test("OldFashionedPrinter should only print", () => {
    const printer = new OldFashionedPrinter();
    const spy = jest.spyOn(console, "log");

    printer.print("Document 1");
    expect(spy).toHaveBeenCalledWith("Printing document: Document 1");

    spy.mockRestore();
  });

  test("OldFashionedPrinter should not have scan or fax functionalities", () => {
    const printer = new OldFashionedPrinter();

    expect(() => (printer as any).scan("Document 2")).toThrow();
    expect(() => (printer as any).fax("Document 3")).toThrow();
  });

  test("Photocopier should print and scan but not fax", () => {
    const photocopier = new Photocopier();
    const spy = jest.spyOn(console, "log");

    photocopier.print("Document 2");
    expect(spy).toHaveBeenCalledWith("Printing document: Document 2");

    photocopier.scan("Document 2");
    expect(spy).toHaveBeenCalledWith("Scanning document: Document 2");

    expect(() => (photocopier as any).fax("Document 3")).toThrow();

    spy.mockRestore();
  });

  test("MultiFunctionPrinter should print, scan, and fax", () => {
    const multiFunctionPrinter = new MultiFunctionPrinter();
    const spy = jest.spyOn(console, "log");

    multiFunctionPrinter.print("Document 3");
    expect(spy).toHaveBeenCalledWith("Printing document: Document 3");

    multiFunctionPrinter.scan("Document 3");
    expect(spy).toHaveBeenCalledWith("Scanning document: Document 3");

    multiFunctionPrinter.fax("Document 3");
    expect(spy).toHaveBeenCalledWith("Faxing document: Document 3");

    spy.mockRestore();
  });
});
