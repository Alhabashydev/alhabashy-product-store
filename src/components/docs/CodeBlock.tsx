import { CopyButton } from './CopyButton';

export function CodeBlock({ code }: { code: string }) {
  return <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/70"><div className="flex items-center justify-between border-b border-white/10 px-4 py-2"><span className="text-xs text-neutral-500">config example</span><CopyButton text={code} /></div><pre className="overflow-auto p-4 text-sm leading-6 text-neutral-200"><code>{code}</code></pre></div>;
}
