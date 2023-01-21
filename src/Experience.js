import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.js'
import Hamburger from './Hamburger.js'

export default function Experience()
{
    return <>

        <OrbitControls makeDefault />

        <Lights />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Hamburger scale={ 0.4 } position={[ 0, -1, -5 ]}/>

    </>
}