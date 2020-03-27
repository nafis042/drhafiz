function importAll(r) {
  return r.keys().map(r);
}
export const thumbnails = importAll(require.context('../../assets/images/gallery/webp/sm', false, /\.(png|jpe?g|webp)$/));
export const originals = importAll(require.context('../../assets/images/gallery/webp/lg', false, /\.(png|jpe?g|webp)$/));

export const thumbnailsjpg = importAll(require.context('../../assets/images/gallery/jpg/sm', false, /\.(png|jpe?g|webp)$/));
export const originalsjpg = importAll(require.context('../../assets/images/gallery/jpg/lg', false, /\.(png|jpe?g|webp)$/));

export default function(state = { webp: { thumbnails, originals }, jpg: { thumbnails: thumbnailsjpg, originals: originalsjpg } }, action) {
  return state;
}
