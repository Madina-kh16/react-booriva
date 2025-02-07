export const getSubmenuItems = async (id) => {
  let res = await fetch(
    `https://640ef1d54ed25579dc40e2a6.mockapi.io/categories?menuId=${id}`
  );
  res = await res.json();
  return res[0].categories;
};
