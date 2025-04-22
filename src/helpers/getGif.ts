interface Gif {
  id: string;
  title: string;
  images: {
    downsized_medium: { url: string };
  };
}

export const getGif = async (category: string) => {
  const api_key = "Lzv3OHhhn8pV6LvQITCBPA4z2N6XD4XM";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20&offset=0&rating=g&lang=en`;

  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((img: Gif) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  console.log(gifs);
  return gifs;
};
