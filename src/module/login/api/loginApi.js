// loginApi.js
import repository from "@/Base/repository.js";

const resource = "/api/auth/login";

export default {
  login(payload) {
    return repository.post(`${resource}`, payload);
  },
  setAuthorizationHeaders(token) {
    repository.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
};
