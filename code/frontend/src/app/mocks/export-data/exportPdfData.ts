export const GET_PDF_EXPORT_DATA = ({ data, headers, widths, title }: any) => {
  const firstRow = headers.map((item: any) => ({
    text: item.header,
    style: 'header',
  }));
  const rows = data.map((element: any) =>
    headers.map((item: any) => ({
      style: 'subheader',
      text: element[item.key],
    }))
  );

  return {
    tableData: { widths, headerRows: 1, body: [firstRow, ...rows] },
    title: title,
  };
};
