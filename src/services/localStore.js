const KEY_AUTH_STORE = "KEY_AUTH_STORE_SPOTIFY";
export class authStore {
  static setStore({ accessToken, refreshToken, payload }) {
    localStorage.setItem(
      KEY_AUTH_STORE,
      JSON.stringify({ accessToken, refreshToken, payload })
    );
  }
  static getStore() {
    const dataSotre = localStorage.getItem(KEY_AUTH_STORE);
    if (!dataSotre) return null;
    const { accessToken, refreshToken, payload } = JSON.parse(dataSotre);

    return { accessToken, refreshToken, payload };
  }

  static removeStore() {
    localStorage.removeItem(KEY_AUTH_STORE);
  }
}
