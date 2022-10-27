// loginApi.js
import repository from "@/Base/repository.js";

const resource = "/api/auth/logout";

export default {
  logout() {
    return repository.get(`${resource}`);
  },
  removeAuthorizationHeaders(token) {
    repository.defaults.headers.common["Authorization"] = "";
  },
};
