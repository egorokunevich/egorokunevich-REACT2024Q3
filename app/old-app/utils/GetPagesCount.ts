export const GetPagesCount = (limit: number, totalCount: number) => {
  return Math.ceil(totalCount / limit);
};
