/**
 * resolve property
 * @param DataItem
 * @param properties
 * @returns value
 */
export const resolveProperty: Function = (
  properties: string[],
  dataItem: any,
): any => {
  let obj: any = dataItem;
  return properties.map((property: any) => (obj = obj[property]))[0];
};
