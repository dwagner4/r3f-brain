import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.js'
import { Model } from './Brain.js'

export default function Experience()
{
    return <>

        <OrbitControls makeDefault />

        <Lights />

        <Model />


    </>
}