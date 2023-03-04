const BASE_PATH = 'https://zipcloud.ibsnet.co.jp/api/search';

export const getAddress = async (zipcode: string) => {
  const res = await (await fetch(`${BASE_PATH}?zipcode=${zipcode}`)).json();
  return res.results[0];
};
