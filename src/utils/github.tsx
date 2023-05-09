// Detect the url is Github pages or not
export const isGithub = (url: string) => {
  return url.includes("github.io");
};

// transform the url of image to Github pages for bug issue
export const transformUrl =
  (subPath: string) => (currentOrigin: string, imgUrl: string) => {
    if (isGithub(currentOrigin)) {
      return `/${subPath}${imgUrl}`;
    }
    return imgUrl;
  };

export const transformToMrlo = transformUrl("mrlo");
