import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const [state, setstate] = useState({ data: null, loading: true, error: null });
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        !!isMounted && (
            setstate({
                loading: true,
                error: null,
                data: null
            }))

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                !!isMounted.current && (
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                )


            })
    }, [url])

    return state;

}
