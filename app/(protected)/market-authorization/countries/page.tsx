import { CountryRequirements } from "@/components/market-authorization/country-requirements"

export default function CountryRequirementsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Country-Specific Requirements</h1>
      <CountryRequirements />
    </div>
  )
}
