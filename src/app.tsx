import banner from '/banner.png'
import bannerSons from '/banner-2.png'

export function App() {
  return (
    <div className="h-dvh w-full p-20 text-center">
      <span className="text-2xl">Movie Catalog</span>
      <div className='flex gap-4'>

        {/* Card 1 */}
        <div className="w-[280px] h-fit flex flex-col items-center bg-zinc-900 rounded-[10px] mt-8 border-1 border-zinc-700">
          <img src={banner} className='w-[107px] h-[145px] content-center' />
          <div className='h-0.25 w-full bg-zinc-700' />
          <div className='w-full text-start p-4 space-y-3'>
            <p className='font-bold'>Um Sonho de Liberdade</p>
            <div className='space-y-2'>
              <p className='text-sm text-zinc-200'>Frank Darabont</p>
              <div className='rounded-sm px-2 w-fit bg-zinc-800 text-sm'>Drama</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[280px] flex flex-col items-center bg-zinc-900 rounded-[10px] mt-8 border-1 border-zinc-700">
          <img src={bannerSons} className='w-[107px] h-[145px] content-center' />
          <div className='h-0.25 w-full bg-zinc-700' />
          <div className='w-full text-start p-4 space-y-3'>
            <div className='flex gap-2 items-center'>
              <span>▶️</span>
              <p className='font-bold'>Sons of Anarchy</p>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-zinc-200'>Kurt Sutter</p>
              <div className='rounded-sm px-2 w-fit bg-zinc-800 text-sm'>Drama</div>
              <div className='flex items-center gap-2'>
                <span className='text-sm text-zinc-200'>16%</span>
                <div className="w-32 bg-emerald-900 rounded-full h-1 overflow-hidden">
                  <div className="bg-emerald-600 rounded-full h-full w-[16%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[280px] flex flex-col items-center bg-zinc-900 rounded-[10px] mt-8 border-1 border-zinc-700">
          <img src={banner} className='w-[107px] h-[145px] content-center' />
          <div className='h-0.25 w-full bg-zinc-700' />
          <div className='w-full text-start p-4 space-y-3'>
            <div className='flex gap-2 items-center'>
              <span>✅</span>
              <p className='font-bold'>Um Sonho de Liberdade</p>
            </div>
            <div className='space-y-2'>
              <p className='text-sm text-zinc-200'>Frank Darabont</p>
              <div className='rounded-full px-2 w-fit bg-emerald-900 text-sm flex items-center gap-1.5'>
                <div className='size-2 rounded-full bg-emerald-600' />
                <span className='text-zinc-200'>Completed</span>
              </div>
              <div className='rounded-sm px-2 w-fit bg-zinc-800 text-sm'>
                <span>⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[280px] flex flex-col items-center bg-zinc-900 rounded-[10px] mt-8 border-1 border-zinc-700">
          <img src={banner} className='w-[107px] h-[145px] content-center' />
          <div className='h-0.25 w-full bg-zinc-700' />
          <div className='w-full text-start p-4 space-y-3'>
            <p className='font-bold'>Um Sonho de Liberdade</p>
            <div className='space-y-2'>
              <p className='text-sm text-zinc-200'>Frank Darabont</p>
              <div className='rounded-full px-2 w-fit bg-zinc-800 text-sm flex items-center gap-1.5'>
                <div className='size-2 rounded-full bg-zinc-400' />
                <span className='text-zinc-200'>Not started</span>
              </div>
              <div className='rounded-sm px-2 w-fit bg-zinc-800 text-sm'>
                <span className='text-zinc-200'>Not yet rated</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
