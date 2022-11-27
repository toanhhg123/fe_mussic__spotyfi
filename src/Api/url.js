export const BASE_URL = "http://localhost:5050";

export const combieLinkMusic = (url) => (url ? `${BASE_URL}/files/${url}` : "");
