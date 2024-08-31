export const fetchProducts = async (link: string) => {
  try {
    const res = await fetch(link);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
