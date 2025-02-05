export const getSubmenuItems = async (menuId) => {
  let res = await fetch(
    `https://640ef1d54ed25579dc40e2a6.mockapi.io/categories?${menuId}`
  );
  res = await res.json();
  return res[1].categories;
};
