import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

export function RegulatorySummary() {
  const regulatorySummary = [
    {
      product: "Cardiostat",
      markets: 28,
      pendingMarkets: 12,
      coverage: 70,
    },
    {
      product: "Neurobalance",
      markets: 35,
      pendingMarkets: 8,
      coverage: 81,
    },
    {
      product: "Respiroclear",
      markets: 22,
      pendingMarkets: 18,
      coverage: 55,
    },
    {
      product: "Gastroease",
      markets: 42,
      pendingMarkets: 5,
      coverage: 89,
    },
    {
      product: "Dermacalm",
      markets: 15,
      pendingMarkets: 25,
      coverage: 38,
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Approved Markets</TableHead>
          <TableHead>Pending Markets</TableHead>
          <TableHead>Global Coverage</TableHead>
          <TableHead>Coverage %</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {regulatorySummary.map((item) => (
          <TableRow key={item.product}>
            <TableCell className="font-medium">{item.product}</TableCell>
            <TableCell>{item.markets}</TableCell>
            <TableCell>{item.pendingMarkets}</TableCell>
            <TableCell>
              <Progress value={item.coverage} className="w-[60%]" />
            </TableCell>
            <TableCell>{item.coverage}%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
