import React, { useEffect } from 'react';

const UseOutSide = (hand,ref) => {
    useEffect(()=>{
        function lis(eve){
            if(!ref.current || ref.current.contains(eve.target)){
                return;
            }
            hand(eve)
        }
        document.addEventListener("mousedown",lis);
        document.addEventListener("touchstart",lis);
        return ()=>{
            document.removeEventListener("mousedown",lis);
            document.removeEventListener("touchstart",lis);
        }
    },[hand,ref]);
}

export default UseOutSide;
