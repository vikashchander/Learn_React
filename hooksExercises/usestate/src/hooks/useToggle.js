import {
    useState
} from 'react';

export default function TogglerHook(initialValue = false) {
    const [isToogle, isToogleState] = useState(initialValue);
    const toggle = () => {
        isToogleState(!isToogle);
    }
    return [isToogle, toggle];
}