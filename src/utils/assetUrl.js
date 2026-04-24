export const imgUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
