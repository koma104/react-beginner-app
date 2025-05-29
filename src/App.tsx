import { useState } from 'react'
import './App.css'
import { ChildArea } from './components/ChildArea'

export default function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickOpen = () => setOpen(!open);

  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  )
}
