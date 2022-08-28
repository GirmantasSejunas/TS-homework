import countObjectProperties from '../helpers/count-object-properties';

type RowData = {
    id: string;
    [key: string]: string;
};
export type TableProps<Type> = {
    title: string,
    colums: Type,
    rowData: Type[],
};

class Table<Type extends RowData> {
public htmlElement: HTMLElement;

private props: TableProps<Type>;

private tbody: HTMLTableSectionElement;

private thead: HTMLTableSectionElement;

public constructor(props: TableProps<Type>) {
    this.props = props;

    this.checkColumsSynchronize();

    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
}

private checkColumsSynchronize = (): void => {
    const { rowData, colums } = this.props;

    if (this.props.rowData.length === 0) return;
    const columnCount = countObjectProperties(colums);

    const columnsSynchronizeWithRowsData = rowData.every((row) => {
        const rowsCount = countObjectProperties(row);

        return rowsCount === columnCount;
    });
    if (!columnsSynchronizeWithRowsData) {
        throw new Error('Rows and Columns not match');
    }
};

private initializedHead = (): void => {
    const { title, colums } = this.props;

    const headerArr = Object.values(colums);
    const headerRowString = headerArr.map((header) => `<th> ${header}</th>`).join('');

    this.thead.innerHTML = `<tr>
    <th colspan="${headerArr.length}" class="text-center h2">${title}</th>
  </tr>
  <tr>${headerRowString}</tr>`;
};

private initializeBody = (): void => {
    const { rowData, colums } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowData
      .map((rowsData) => {
        const rowHtmlElement = document.createElement('tr');

        const cellsHtmlString = Object.keys(colums)
          .map((key) => `<td>${rowsData[key]}</td>`)
          .join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;

        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  private initialize = (): void => {
    this.initializedHead();
    this.initializeBody();

    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  };
}

export default Table;
