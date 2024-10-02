/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

class OldFashionedPrinter implements Printer {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}

class Photocopier implements Printer, Scanner {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning document: ${document}`);
  }
}

class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning document: ${document}`);
  }

  fax(document: string): void {
    console.log(`Faxing document: ${document}`);
  }
}

const printer = new OldFashionedPrinter();
printer.print("Document 1");

const photocopier = new Photocopier();
photocopier.print("Document 2");
photocopier.scan("Document 2");

const multiFunctionPrinter = new MultiFunctionPrinter();
multiFunctionPrinter.print("Document 3");
multiFunctionPrinter.scan("Document 3");
multiFunctionPrinter.fax("Document 3");

export { OldFashionedPrinter, Photocopier, MultiFunctionPrinter };
