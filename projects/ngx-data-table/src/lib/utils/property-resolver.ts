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
  return properties.map((property: any) => (obj = obj[property]))[0];
};
