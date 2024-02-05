import { Screen } from '@testing-library/react';


export const getTableValues = (tableContainerId: string, screen: Screen): Array<Array<string>> => {
    const result = new Array<Array<string>>();

    const agGridTable = screen.queryByTestId(tableContainerId);
    if (!agGridTable) {
        return result;
    }

    const elements = searchTableRows(agGridTable);
    elements.forEach(row => {
        const rowArray = new Array<string>();
        const children = [...(row.children || [])];
        children.forEach(col => {
            const result = extractValue(col);
            rowArray.push(result.innerHTML);
        });
        result.push(rowArray);
    });

    return result;
};

const extractValue = (element: Element): Element => {
    const children = [...(element?.children || [])];
    for (let i = 0; i < children.length; i++) {
        const result = extractValue(children[i]);
        if (result.className.includes('ag-group-value')) {
            return result;
        }
    }

    return element;
};

const searchTableRows = (element: Element): Array<Element> => {
    const childResults = new Array<Element>();
    if (
        element.className.includes('ag-row-level-0') &&
        element.parentElement?.className.includes('ag-center-cols-container')
    ) {
        childResults.push(element);
    }

    const children = [...(element?.children || [])];
    children.forEach(child => searchTableRows(child).forEach(e => childResults.push(e)));

    return childResults;
};
