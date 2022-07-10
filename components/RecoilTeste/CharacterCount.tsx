import { useRecoilValue } from 'recoil'
import { charCountState } from './recoil.service'

interface CharacterCountProps {
    charCountState: string
}

export const CharacterCount = () => {
    const count = useRecoilValue(charCountState)

    return <p>Character Count: {count}</p>
}
