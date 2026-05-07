export function generateOrderId(existingCount = 0) {
  const base = 124 + existingCount;
  return `ORD-${String(base).padStart(6, '0')}`;
}
