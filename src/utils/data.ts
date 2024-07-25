export const extractTextFromHtml = (html: string) => {
  const regex = /<\/?[^>]+(>|$)/g;
  return html.replace(regex, '');
};
