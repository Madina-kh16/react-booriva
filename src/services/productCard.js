export const getProductCard = async (id) => {
    let res = await fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product?id=${id}`);
    if (res.ok) {
       res = await res.json();
       return res;
    } else {
      return [];
    }
};


export const getProductCardAll = async () => {
  let res = await fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product`);
  if (res.ok) {
     res = await res.json();
     return res;
  } else {
    return [];
  }
};

  