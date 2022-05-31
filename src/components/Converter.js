import { useState } from 'react'

export default function Converter () {
  const [rgb, setRGB] = useState('')
  const [color, setColor] = useState('#c0fffe')

  const handler = ({target}) => {
    if (target.value.length !== 7) {
      return
    }

    const input =  /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value)
    if (input === null) {
      setRGB('Error')
      setColor('red')
      return
    }

    const convert = `${parseInt(input[1], 16)}, ${parseInt(input[2], 16)}, ${parseInt(input[3], 16)}`
    setRGB(`rgb(${convert})`)
    setColor(input[0])
  }

  return(
    <form className="convertet">
      <div className="container" style={{backgroundColor: color}}>
        <input className="input" placeholder="Введите #hex" pattern='^#[0-9A-Fa-f{6}]' onChange={handler} />
        <div className="result">{rgb}</div>
      </div>
    </form>
  )
}