/**
 * resolve property value.
 * @param properties
 * @param dataItem
 * @returns value
 */
export const resolvePropertyValue: Function = (
  properties: string[],
  dataItem: any,
): any => {
  let obj: any = dataItem;
  const propertyValue: any = properties.map(
    (property: any) => (obj = obj[property]),
  );
  return propertyValue[properties.length - 1];
};
