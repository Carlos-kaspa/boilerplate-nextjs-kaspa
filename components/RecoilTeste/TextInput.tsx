import { textState } from './recoil.service'
import { useRecoilState } from 'recoil'

export const TextInput = () => {
    const [text, setText] = useRecoilState(textState)

    const onChange = (event: any) => {
        setText(event.target.value)
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={onChange}
            />
            <br />
            Echo: {text}
        </div>
    )
}
