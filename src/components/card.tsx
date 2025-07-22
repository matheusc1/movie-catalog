import banner from '/banner.png'

export function Card() {
  return (
    <div className="w-[280px] h-fit flex flex-col items-center bg-zinc-900 rounded-[10px] mt-8 border-1 border-zinc-700">
      <img
        src={banner}
        className="w-[107px] h-[145px] content-center"
        alt="Um Sonho de Liberdade banner"
      />
      <div className="h-0.25 w-full bg-zinc-700" />
      <div className="w-full text-start p-4 space-y-3">
        <p className="font-bold">Um Sonho de Liberdade</p>
        <div className="space-y-2">
          <p className="text-sm text-zinc-200">Frank Darabont</p>
          <div className="rounded-sm px-2 w-fit bg-zinc-800 text-sm">Drama</div>
        </div>
      </div>
    </div>
  )
}
