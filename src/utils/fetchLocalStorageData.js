export const fetchuser =()=>{
    const userInfo = localStorage.getItem("user") !== "undefined" ?JSON.parse(localStorage.getItem("user") ): localStorage.clear();
    return userInfo;
}

export const fetchcart =()=>{
    const cartInfo = localStorage.getItem("carItems") !== "undefined" ?JSON.parse(localStorage.getItem("carItems") ): localStorage.clear();
    return cartInfo ? cartInfo :[];
}