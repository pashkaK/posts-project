import { useRef } from "react";
import { useEffect } from "react";
export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()
    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        var cb = function (entries, observer) {
          // console.log(entries)
            if(entries[0].isIntersecting && canLoad) {
                // setPage(page + 1)
                callback()
            }  
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading]);
}