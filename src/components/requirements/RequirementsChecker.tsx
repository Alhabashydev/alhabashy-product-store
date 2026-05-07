import { useMemo, useState } from 'react';
import { frameworks, inventories, targetSystems } from '../../data/categories';
import type { Product } from '../../types/product';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Label } from '../ui/Input';
import { Select } from '../ui/Select';
import { CompatibilityBadge } from './CompatibilityBadge';
import { DependencyList } from './DependencyList';

export function RequirementsChecker({ product }: { product: Product }) {
  const [framework, setFramework] = useState(frameworks[0]);
  const [inventory, setInventory] = useState(inventories[0]);
  const [target, setTarget] = useState(targetSystems[0]);

  const result = useMemo(() => {
    const frameworkOk = product.frameworks.includes(framework) || product.frameworks.includes('Standalone');
    const inventoryOk = product.inventories.length === 0 || product.inventories.includes(inventory);
    const targetOk = product.targetSystems.length === 0 || product.targetSystems.includes(target);
    const misses = [!frameworkOk && `Framework ${framework}`, !inventoryOk && `Inventory ${inventory}`, !targetOk && `Target ${target}`].filter(Boolean) as string[];
    if (misses.length === 0) return { status: 'Compatible' as const, misses };
    if (misses.length <= 1) return { status: 'Partially compatible' as const, misses };
    return { status: 'Not compatible' as const, misses };
  }, [framework, inventory, target, product]);

  return (
    <Card>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div><h3 className="text-xl font-semibold text-white">Product Requirements Checker</h3><p className="mt-2 text-sm text-neutral-400">Choose your server setup and check compatibility before buying.</p></div>
        <CompatibilityBadge status={result.status} />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div><Label>Framework</Label><Select value={framework} onChange={(event) => setFramework(event.target.value)}>{frameworks.map((item) => <option key={item}>{item}</option>)}</Select></div>
        <div><Label>Inventory</Label><Select value={inventory} onChange={(event) => setInventory(event.target.value)}>{inventories.map((item) => <option key={item}>{item}</option>)}</Select></div>
        <div><Label>Target system</Label><Select value={target} onChange={(event) => setTarget(event.target.value)}>{targetSystems.map((item) => <option key={item}>{item}</option>)}</Select></div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
          <h4 className="mb-3 font-semibold text-white">Compatibility result</h4>
          {result.misses.length === 0 ? <p className="text-sm text-neutral-300">This product should fit your selected setup.</p> : <div className="grid gap-2">{result.misses.map((miss) => <Badge key={miss} tone="warning">Missing or partial: {miss}</Badge>)}</div>}
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
          <h4 className="mb-3 font-semibold text-white">Dependencies</h4>
          <DependencyList items={product.dependencies} />
        </div>
      </div>
      <div className="mt-5 grid gap-3 text-sm text-neutral-300 md:grid-cols-4">
        <p>SQL: <span className="text-white">{product.sqlRequired ? 'Yes' : 'No'}</span></p><p>OneSync: <span className="text-white">{product.onesyncRequired ? 'Yes' : 'No'}</span></p><p>Build: <span className="text-white">{product.testedBuild}</span></p><p>Setup: <span className="text-white">{product.setupTime}</span></p>
      </div>
    </Card>
  );
}
