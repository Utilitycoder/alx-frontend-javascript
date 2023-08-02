type RowID = number;

interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
  location?: string;
}

export { RowID, RowElement }
