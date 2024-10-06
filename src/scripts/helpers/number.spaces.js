function numberSpaces ( n ) {

  if (!n) return "";

  const number = n.toString();    

  if ( number.indexOf(".") === -1 && number.indexOf(",") === -1 ) {

    return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  } else {

    let parts = number.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");

  }
  
}

export default numberSpaces;