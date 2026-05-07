import { Card } from '../ui/Card';

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="grid gap-4">
      <Card className="min-h-80 bg-gradient-to-br from-white/[0.08] to-transparent">
        <div className="flex h-72 items-end justify-between rounded-3xl border border-white/10 bg-black/30 p-6">
          <div><p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Preview</p><h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2><p className="mt-2 text-sm text-neutral-400">{images[0]}</p></div>
        </div>
      </Card>
      <div className="grid grid-cols-3 gap-3">{images.map((image) => <div key={image} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs text-neutral-400">{image}</div>)}</div>
    </div>
  );
}
