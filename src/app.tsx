import banner from '/banner.png'

export function App() {
  return (
    <div className="h-dvh w-full p-20 text-center">
      <span className="text-2xl">Movie Catalog</span>
      <div className='flex gap-4'>
        <div className="w-[280px] flex flex-col items-center bg-zinc-900 rounded-[10px] mt-8 border-1 border-zinc-700">
          <img src={banner} className='w-[107px] h-[145px] content-center' />
          <div className='h-0.25 w-full bg-zinc-700' />
          <div className='w-full text-start p-4 space-y-3'>
            <p className='font-bold'>Um Sonho de Liberdade</p>
            <div className='space-y-1 text-zinc-200'>
              <p className='text-s'>Frank Darabont</p>
              <div className='rounded-sm px-2 w-min bg-zinc-800 text-s'>Drama</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
