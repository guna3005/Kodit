const generateHeaders = (authConfig, requestHeaders, isFormData) => {
    const headers = new Headers();
    if (authConfig) {
      headers.append("Authorization", `${authConfig.accessToken}`);
    }
    if (!isFormData) {
      headers.append("Content-Type", "application/json");
    }
  
    Object.keys(headers).forEach((key) =>
      headers.append(key, requestHeaders[key])
    );
    return headers;
  };
  
  const errorResponses = [400, 401, 403, 404, 500, 415];
  
  async function checkError(response) {
    if (response.status === 401) {
      window.sessionStorage.clear();
      window.location.reload();
    }
    if (errorResponses.includes(response.status)) {
      throw await response.json();
    }
    return response;
  }
  
  export const api = async (
    {
      url = "",
      method = "GET",
      requestHeaders = {},
      params,
      body = null,
      isFormData = false,
    },
    authConfig
  ) => {
    const headers = generateHeaders(authConfig, requestHeaders, isFormData);
    const paramString = new URLSearchParams({
      association: window.location.hostname,
      ...params,
    }).toString();
    const requestURL = `${url}?${paramString}`;
    let requestObject = { headers, method };
    if (body) {
      requestObject = {
        ...requestObject,
        body: isFormData ? body : JSON.stringify(body),
      };
    }
  
    return fetch(requestURL, requestObject)
      .then(checkError)
      .then((response) => response.json());
  };
  