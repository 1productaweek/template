import flatMap from 'lodash/flatMap'

// TODO: this should be part of the plan!
const lineItemMap = {
  storage: {
    name: 'Storage',
    desc: 'Images and source code storage.',
    unit: 'GB',
  },
  bandwidthEgress: {
    name: 'Bandwidth (Egress)',
    desc: 'Total outgoing bandwidth from your services.',
    unit: 'GB',
  },
  bandwidthIngress: {
    name: 'Bandwidth (Ingress)',
    desc: 'Total incoming bandwidth from your services.',
    unit: 'GB',
  },
  memory: {
    name: 'Memory',
    desc: 'Total seconds of running instance at 1GB.',
    unit: 'GB/s',
  },
  cpu: {
    name: 'CPU',
    desc: 'Total seconds of running instance at 1Ghz.',
    unit: 'Ghz/s',
  },
}

export function createUsageInvoiceLineItems (plan, usage, from, to) {
  return flatMap(plan.features.metered, (metered, key) => {
    if (!lineItemMap[key]) return []
    const inclusive = plan.features.inclusive[key]
    const inclusiveUsage = Math.min(usage[key], inclusive || 0)
    const meteredUsage = Math.max(0, usage[key] - (inclusive || 0))
    const lines = []
    if (inclusiveUsage) lines.push(createLineItem(key, from, to, 0, inclusiveUsage))
    if (meteredUsage) lines.push(createLineItem(key, from, to, metered, meteredUsage))
    return lines
  })
}

export function createLineItem (key, from, to, price, quantity) {
  return {
    from: from.toISOString(),
    to: to.toISOString(),
    discount: 0,
    chargeable: true,
    price,
    quantity,
    total: price * quantity,
    ...(lineItemMap[key] || {}),
  }
}
