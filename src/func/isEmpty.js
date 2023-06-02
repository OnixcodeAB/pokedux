function isEmpty(variable) {
  if (variable === null || variable === undefined) {
    return true;
  }

  if (typeof variable === "string" || Array.isArray(variable)) {
    return variable.length === 0;
  }

  if (typeof variable === "object") {
    return Object.keys(variable).length === 0;
  }

  return false;
}

export default isEmpty;
