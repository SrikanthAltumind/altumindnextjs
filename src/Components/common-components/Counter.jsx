import { useEffect, useRef, useState } from 'react'

// eslint-disable-next-line react/prop-types
const Counter = ({value,countSpeed,}) => {
    // const [count, setCount] = useState(value)
    const [count, setCount] = useState(parseInt(value))
    const decimalValue = Number(value.toString().split('.')[1])
    const [decimalCount, setDecimalCount] = useState(decimalValue)
    const counterRef = useRef()

    const handleDecimalCount = ()=> {
        let increament = 0;
        const decimalCounterId = setInterval(() => {
                    if (increament <= decimalValue) {
                        setDecimalCount(increament)
                        increament += 1;
                    } else {
                        clearInterval(decimalCounterId);
                    }
                }, 100);
    }
  
    let counterId
    const handleScroll = ()=> {
        if (counterRef.current) {
            const top = counterRef.current.getBoundingClientRect().top;
            const isVisible = top <= window.innerHeight
            if(isVisible){
                setDecimalCount(0)
                let increament = 0;
                counterId = setInterval(() => {
                    if (increament <= value) {
                        if(increament === parseInt(value)-3){
                            if(decimalValue){
                                handleDecimalCount()
                            }
                        }
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
    // <span ref={counterRef}>{count}</span>
    <span ref={counterRef}>{decimalCount ? `${count}.${decimalCount}` : count }</span>
  )
}

export default Counter