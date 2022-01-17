import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from 'react'
import { Sky, Loader, Stats } from '@react-three/drei'
import * as THREE from 'three'

// Import/create components
// import PlayButton from '../components/PlayButton'
import CupModels from '../components/CupModel'
import Text from '../components/Text'
import BreathingDots from '../components/BreathingDots'
import ZeusScene from '../components/Zeus'
import CarScene from '../components/Car'
import ParticleField from '../components/ParticleNet'

// Camera effects
function Dolly() {
  useFrame((state) => {
    state.camera.position.z = 7 + Math.sin(state.clock.getElapsedTime())
    state.camera.updateProjectionMatrix()
  })
  return null
}

const Home: NextPage = () => {

  const textOptions = {
    size: 1,
    height: 1,
    bevelEnabled: true,
    bevelSize: 0.05,
    bevelThickness: 0.05
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>3js/r3f</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>React Three Fiber/Drei examples in a Next.js project</h1>

      <h2>Instancing <em>n</em> teacups, camera/animation effects, logo on-hover effects</h2>
      <Link href="/demos/basicExamples" passHref>
        <button>
          More like this including: controlling camera with mouse, using Instances, basic animation
        </button>
      </Link>
      <Canvas 
        id="teacup-field" 
        style={{height: '50vh'}}
        camera={{ near: 0.5, far: 15 }}
      >
        <Suspense fallback={null}>
          <spotLight color="#61dafb" position={[-10, -10, -10]} intensity={0.2} />
          <spotLight color="#61dafb" position={[-10, 0, 15]} intensity={0.8} />
          <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={0.5} />
          <spotLight color="#f2056f" position={[15, 10, -2]} intensity={2} />
          <spotLight color="#f2056f" position={[15, 10, 5]} intensity={1} />
          <spotLight color="#b107db" position={[5, -10, 5]} intensity={0.8} />
          <CupModels count={500} fieldScale={10} closeness={0} animation={true} material='phong' opacity={0.6}/>
          <Text text="VANILLA" position={[0, 0, -1]} vAlign='center' hAlign='center' geomOptions={textOptions} animate={true} opacity={1} />
          <Text text="TEA" position={[-1, -1, -1]} vAlign='center' hAlign='center' geomOptions={textOptions} animate={true} opacity={1} />
          <Sky />
          <Dolly />
          <Stats showPanel={0} />
        </Suspense>
      </Canvas>
      <Loader />

      <h2>Breathing Dots</h2>
      <BreathingDots />

      <h2>More detailed imported model; mouse repel effect, glitch</h2>
      <ZeusScene />

      <h2>Snappy controls</h2>
      <CarScene />
      
      <h2>Particle field</h2>
      <ParticleField />

      <Link href="/demos/usefulLinks" passHref>
        <button>
          Useful links
        </button>
      </Link>
      
    </div>
  )
}

export default Home
