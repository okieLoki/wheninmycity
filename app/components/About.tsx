import React from 'react'
import { Image } from '@nextui-org/react'

const About = () => {
  return (
    <main
      className='flex flex-row mx-60 h-screen gap-5'
    >

      <section>
        <Image
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/b1a84af5-45b2-4e71-9fde-78deb233c788?apiKey=82fbeafba71b456098d689d87f195e0a&width=600'
          width={1000}
          radius='none'
        />

      </section>

      <section className='flex flex-col gap-2'>

        <section className='flex justify-center gap-2 items-center mb-3'>
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/5f10ea80-7e05-4671-864d-e12ed7c02987?apiKey=82fbeafba71b456098d689d87f195e0a&'
          />
          <p className='text-[#c7c7b2]'>Our bread & butter</p>
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/5f10ea80-7e05-4671-864d-e12ed7c02987?apiKey=82fbeafba71b456098d689d87f195e0a&'
          />
          
        </section>

        <section className='flex flex-col gap-4'>
          <h1 className='instrument-serif-italic text-8xl tracking-tighter text-[#ffffe3]'>Distinctly</h1>
          <p className='instrument-serif text-8xl tracking-tighter text-[#ffffe3]'>human work</p>
        </section>

        <section className='flex justify-center my-2'>
          <p
            className='text-2xl text-[#ffffe3] w-[40%] border-2 border-green-900 p-6 rounded-[50px] align-middle text-center rotate-[-5deg]'
          >FOR</p>
        </section>


        <section className='flex flex-col gap-4'>
          <h1 className='instrument-serif-italic text-8xl tracking-tighter text-[#ffffe3] text-center'>distinctly</h1>
          <p className='instrument-serif text-8xl tracking-tighter text-[#ffffe3]'>human brands</p>
        </section>

        <section className='mt-12 px-[7rem] text-center text-[#c7c7b2]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis illo, dicta, sapiente corporis ea pariatur aliquid quos amet itaque qui, aspernatur maiores labore! Ullam voluptate ducimus quaerat facere laboriosam, hic sed sit!</p>
        </section>

      </section>

      <section className='flex items-center p-3'>
        <Image
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/1c4a5dca-4bd4-407f-a5bd-5de5f3d400fd?apiKey=82fbeafba71b456098d689d87f195e0a&width=700'
          width={1000}
          radius='none'
        />
      </section>

    </main>
  )
}

export default About
