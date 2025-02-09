export const getMenuItems = async () => {
  let res = await fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu");
  res = await res.json();
  return res;
};


export const getMenuItem = async () => {
  let res = await fetch("https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000");
  res = await res.json();
  return res[0].products;
};