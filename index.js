module.exports = function(locationSearchs) {
  if (!window || !window.location) {
    console.log('error not browser');
    return;
  }
  var locationSearch = locationSearchs
    ? locationSearchs
    : window.location.search;
  var query = {};
  if (locationSearch) {
    locationSearch = locationSearch.replace('?', '');
    var params = locationSearch.split('&');
    params.forEach((param, idx) => {
      var keyValue = param.split('=');
      query[keyValue[0]] = decodeURIComponent(keyValue[1]);
    });
  }
  return query;
};
