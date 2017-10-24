const _isDev = window.location.port.indexOf('4200') > -1;
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};
const serverURI = _isDev ? `http://localhost:8085` : getHost();
const apiURI = _isDev ? `${serverURI}/api/` : `/api/`;

export const ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI,
  BASE_SERVER_URI: serverURI
};
