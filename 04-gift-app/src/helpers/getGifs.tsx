export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=NTzkwVI55MDAK0AlZdzb2AVUmORkYf3z&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
