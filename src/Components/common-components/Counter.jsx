import { useEffect, useRef, useState } from 'react'

// eslint-disable-next-line react/prop-types
const Counter = ({value,countSpeed,}) => {
    const [count, setCount] = useState(value)
    const counterRef = useRef()
  
    let counterId
    const handleScroll = ()=> {
        if (counterRef.current) {
            const top = counterRef.current.getBoundingClientRect().top;
            const isVisible = top <= window.innerHeight
            if(isVisible){
                let increament = 0;
                counterId = setInterval(() => {
                    if (increament <= value) {
                        setCount(increament)
                        increament += 1;
                    } else {
                        clearInterval(counterId);
                    }
                }, countSpeed);

                window.removeEventListener('scroll', handleScroll)
            }

          }
    }
useEffect(()=> {
    window.addEventListener('scroll', handleScroll)

    return ()=> {
        clearInterval(counterId)
        window.removeEventListener('scroll', handleScroll)
    }
},[])
  return (
    <span ref={counterRef}>{count}</span>
  )
}

export default Counter